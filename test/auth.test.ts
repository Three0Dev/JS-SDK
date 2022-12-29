// import { WalletConnection, InMemorySigner, keyStores, Near } from 'near-api-js'
// import localStorage from 'localstorage-memory'
// import URL from 'url'
// import {
// 	getAccountId,
// 	isLoggedIn,
// 	loginWithWallet,
// 	// loginWithWeb2,
// 	logout,
// } from '../src/auth'
// import { NEAR } from '../src/blockchain'
// import { setProjectConfig } from '../src/core'

// let history
// let nearFake
// let walletConnection: WalletConnection
// let lastRedirectUrl: string
// const keyStore = new keyStores.InMemoryKeyStore()

// beforeEach(() => {
// 	keyStore.clear()
// 	nearFake = {
// 		config: {
// 			networkId: 'networkId',
// 			contractName: 'contractId',
// 			walletUrl: 'http://example.com/wallet',
// 		},
// 		connection: {
// 			networkId: 'networkId',
// 			signer: new InMemorySigner(keyStore),
// 		},
// 		account() {
// 			return {
// 				state() {},
// 			}
// 		},
// 	}
// 	lastRedirectUrl = ''
// 	history = []
// 	Object.assign(global, {
// 		...global,
// 		window: {
// 			location: {
// 				href: 'http://example.com/location',
// 				assign(url: string) {
// 					lastRedirectUrl = url
// 				},
// 			},
// 			history: {
// 				replaceState: (state: any, title: string, url: string) =>
// 					history.push([state, title, url]),
// 			},
// 			localStorage,
// 		},
// 		document: {
// 			title: 'documentTitle',
// 		},
// 	})
// 	walletConnection = new WalletConnection(nearFake as unknown as Near, null)
// 	NEAR.getWalletConnection = () => walletConnection
// 	setProjectConfig({
// 		contractName: 'signInContract',
// 		chainType: 'NEAR_TESTNET',
// 		projectId: 'signInProject',
// 	})
// })

// it('not signed in by default', () => {
// 	expect(isLoggedIn()).not.toBeTruthy()
// 	expect(getAccountId()).toBe('')
// })

// describe('Wallet can request sign in', () => {
// 	beforeEach(() => {
// 		setProjectConfig({
// 			contractName: 'signInContract',
// 			chainType: 'NEAR_TESTNET',
// 			projectId: 'signInProject',
// 		})

// 		keyStore.clear()
// 	})

// 	test('testing Web3 login', () =>
// 		loginWithWallet('http://example.com/success', 'http://example.com/fail'))

// 	afterEach(async () => {
// 		const accounts = await keyStore.getAccounts('networkId')
// 		expect(accounts).toHaveLength(1)
// 		expect(accounts[0]).toMatch(/^pending_key.+/)
// 		expect(URL.parse(lastRedirectUrl, true)).toMatchObject({
// 			protocol: 'http:',
// 			host: 'example.com',
// 			query: {
// 				contract_id: 'signInContract',
// 				success_url: 'http://example.com/success',
// 				failure_url: 'http://example.com/fail',
// 				public_key: (await keyStore.getKey('networkId', accounts[0]))
// 					.getPublicKey()
// 					.toString(),
// 			},
// 		})
// 	})
// })

// it('testing logout', () => {
// 	const contract = {
// 		user_action: jest.fn(),
// 	}

// 	NEAR.getProjectContract = jest.fn().mockReturnValue(contract)

// 	logout()
// 	expect(isLoggedIn()).toBe(false)
// })
