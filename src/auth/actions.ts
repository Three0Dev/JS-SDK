import { generateSeedPhrase, parseSeedPhrase } from 'near-seed-phrase'
import { keyStores, KeyPair } from 'near-api-js'
import { UserActionType } from '../types/near'
import { NEAR } from '../blockchain'
import { getProjectConfig } from '../core'
import { getAccountId, isLoggedIn } from './session'
import { isValidPassCall } from './utils'

export async function logout() {
	const contract = NEAR.getProjectContract()

	await contract.user_action({
		action: UserActionType.LOGOUT,
	})

	if (NEAR.isWalletAccount()) {
		NEAR.getWalletConnection().signOut()
	} else {
		const keystore = new keyStores.BrowserLocalStorageKeyStore()
		const accountId = getAccountId()

		const nearConfig = NEAR.getNearConfig()

		try {
			await keystore.removeKey(nearConfig.networkId, accountId)
		} catch (e) {
			console.error(e)
		}

		localStorage.removeItem('three0loggedIn')
	}
}

export async function loginWithWallet(
	successUrl?: string,
	failureUrl?: string
) {
	const isLoggedInInstance = isLoggedIn()

	if (isLoggedInInstance) {
		throw new Error('Already logged in')
	}

	await NEAR.getWalletConnection().requestSignIn({
		contractId: getProjectConfig().contractName,
		successUrl,
		failureUrl,
	})
}

export async function loginWithPass(
	username: string,
	seedPhrase: string
): Promise<void> {
	console.warn(
		'loginWithPass is a beta function. Use loginWithWallet for greater security.'
	)

	isValidPassCall(username)

	const { networkId } = NEAR.getNearConfig()
	const keyStore = new keyStores.BrowserLocalStorageKeyStore()

	const newUserId = `${username}.${networkId}`

	const near = NEAR.getNear()
	const account = await near.account(newUserId)

	try {
		await account.state()
	} catch (e) {
		throw new Error(`Account Doesn't Exist: ${username}`)
	}

	const key = await keyStore.getKey(networkId, newUserId)

	if (key) return

	if (!seedPhrase) throw new Error('Seed phrase is required')

	const { secretKey } = parseSeedPhrase(seedPhrase)
	const keyPair = KeyPair.fromString(secretKey)
	await keyStore.setKey(networkId, newUserId, keyPair)

	localStorage.setItem('three0loggedIn', newUserId)

	try {
		await NEAR.init()
		const contract = NEAR.getProjectContract()
		await contract.user_action({
			action: UserActionType.LOGIN,
		})
	} catch (e) {
		localStorage.removeItem('three0loggedIn')
		keyStore.removeKey(networkId, newUserId)
		throw new Error(`Invalid seed phrase for account ${username}`)
	}
}

export async function signUpWithPass(username: string, autoLogin = true) {
	console.warn(
		'signUpWithPass is a beta function. Use loginWithWallet for greater security.'
	)

	isValidPassCall(username)

	const { networkId } = NEAR.getNearConfig()

	const newUserId = `${username}.${networkId}`

	if (newUserId.length > 32) throw new Error('Account name is too long.')

	const nameRegex = /^(([a-z\d]+[-_])*[a-z\d]+)$/
	if (!nameRegex.test(username)) throw new Error('Account name is invalid.')

	const near = NEAR.getNear()

	let accountExists = false

	try {
		const account = await near.account(newUserId)
		await account.state()
		accountExists = true
	} catch (e) {
		/* empty */
	}

	if (accountExists) throw new Error('Account already exists')

	const { seedPhrase, secretKey } = generateSeedPhrase()
	const keyPair = KeyPair.fromString(secretKey)

	await near.createAccount(newUserId, keyPair.getPublicKey())

	if (autoLogin) {
		await loginWithPass(username, seedPhrase)
	} else {
		const keyStore = new keyStores.BrowserLocalStorageKeyStore()
		await keyStore.setKey(networkId, newUserId, keyPair)
	}

	return seedPhrase
}
