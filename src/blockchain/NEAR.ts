import {
	Account,
	connect,
	Contract,
	keyStores,
	Near,
	WalletConnection,
} from 'near-api-js'
import { Three0Contract } from '../types/near'
import { getProjectConfig } from '../core'
import { getBlockchainType } from '../utils'

export function getNearConfig() {
	const CONTRACT_NAME = getProjectConfig().contractName
	const chainType = getBlockchainType()

	switch (chainType) {
		case 'mainnet':
			return {
				networkId: 'mainnet',
				nodeUrl: 'https://rpc.mainnet.near.org',
				contractName: CONTRACT_NAME,
				walletUrl: 'https://wallet.near.org',
				helperUrl: 'https://helper.mainnet.near.org',
				explorerUrl: 'https://explorer.mainnet.near.org',
			}
		case 'production':
		case 'development':
		case 'testnet':
			return {
				networkId: 'testnet',
				nodeUrl: 'https://rpc.testnet.near.org',
				contractName: CONTRACT_NAME,
				walletUrl: 'https://wallet.testnet.near.org',
				helperUrl: 'https://helper.testnet.near.org',
				explorerUrl: 'https://explorer.testnet.near.org',
			}
		default:
			throw Error(
				`Unconfigured environment '${chainType}'. Can be configured in src/config.js.`
			)
	}
}

let account: Account
export function getAccount() {
	return account
}

let walletConnection: WalletConnection
export function getWalletConnection() {
	return walletConnection
}

let projectContract: Three0Contract
export function getProjectContract() {
	return projectContract
}

let near: Near
export function getNear() {
	return near
}

export function isWalletAccount() {
	return account.constructor.name === 'ConnectedWalletAccount'
}

async function initNearConnection() {
	const nearConfig = getNearConfig()

	near = await connect({
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		...nearConfig,
	})
}

async function initAccount() {
	const localLogin = localStorage.getItem('three0loggedIn')

	if (!localLogin) {
		walletConnection = new WalletConnection(near, null)
	}

	account = !localLogin
		? walletConnection.account()
		: await near.account(localLogin)
}

async function initProjectContract() {
	const nearConfig = getNearConfig()

	projectContract = new Contract(account, nearConfig.contractName, {
		viewMethods: [
			'get_user',
			'valid_database',
			'get_storage',
			'get_tokenization',
		],
		changeMethods: ['user_action', 'set_nonce'],
	}) as Three0Contract
}

export async function init() {
	await initNearConnection()
	await initAccount()
	await initProjectContract()
}
