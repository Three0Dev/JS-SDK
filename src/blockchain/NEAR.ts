import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import { getBlockchainType } from '../utils'

export interface Three0Contract extends Contract {
	valid_database: ValidDatabaseFunction
	get_user: GetUserFunction
	user_action: UserActionFunction
	get_storage: GetStorageFunction
	set_nonce: SetNonceFunction
}

type ValidDatabaseFunction = (
	database_id: ValidDatabaseParams
) => Promise<boolean>
type GetUserFunction = (user_id: GetUserParams) => Promise<User>
type UserActionFunction = (action: UserActionParams) => Promise<void>
type GetStorageFunction = () => Promise<string>
type SetNonceFunction = () => Promise<number>

interface User {
	account_id: string
	is_online: boolean
	created_at: bigint
	last_online: bigint
}

interface ValidDatabaseParams {
	address: string
}

interface GetUserParams {
	account_id: string
}

interface UserActionParams {
	action: UserActionType
}

export enum UserActionType {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
}

export interface StorageContract extends Contract {
	list_files: ListFilesFunction
	get_file: GetFileFunction
	nft_mint: NftMintFunction
}

type ListFilesFunction = (params: ListFilesParams) => Promise<string[]>
type GetFileFunction = (params: GetFileParams) => Promise<FileMetadata>
type NftMintFunction = (
	params: NftMintParams,
	attached_gas: string,
	attached_deposit: string
) => Promise<void>

interface ListFilesParams {
	path: string
}
interface GetFileParams {
	file_path: string
}
interface NftMintParams {
	token_id: string
	metadata: FileMetadata
	path: string
	receiver_id: string
}

export interface FileMetadata {
	title: string
	description: string
	media: string
	media_hash: string
	file_type: string
	issued_at: number
}

export function getNearConfig() {
	const CONTRACT_NAME = globalThis.projectConfig.contractName
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
		case 'betanet':
			return {
				networkId: 'betanet',
				nodeUrl: 'https://rpc.betanet.near.org',
				contractName: CONTRACT_NAME,
				walletUrl: 'https://wallet.betanet.near.org',
				helperUrl: 'https://helper.betanet.near.org',
				explorerUrl: 'https://explorer.betanet.near.org',
			}
		// case 'local':
		// 	return {
		// 		networkId: 'local',
		// 		nodeUrl: 'http://localhost:3030',
		// 		keyPath: `${process.env.HOME}/.near/validator_key.json`,
		// 		walletUrl: 'http://localhost:4000/wallet',
		// 		contractName: CONTRACT_NAME,
		// 	}
		case 'test':
		case 'ci':
			return {
				networkId: 'shared-test',
				nodeUrl: 'https://rpc.ci-testnet.near.org',
				contractName: CONTRACT_NAME,
				masterAccount: 'test.near',
			}
		case 'ci-betanet':
			return {
				networkId: 'shared-test-staging',
				nodeUrl: 'https://rpc.ci-betanet.near.org',
				contractName: CONTRACT_NAME,
				masterAccount: 'test.near',
			}
		default:
			throw Error(
				`Unconfigured environment '${chainType}'. Can be configured in src/config.js.`
			)
	}
}

// Initialize contract & set global variables
export async function init() {
	const nearConfig = getNearConfig()

	// Initialize connection to the NEAR testnet
	const near = await connect({
		keyStore: new keyStores.BrowserLocalStorageKeyStore(),
		...nearConfig,
	})

	// Initializing Wallet based Account. It can work with NEAR testnet wallet that
	// is hosted at https://wallet.testnet.near.org
	globalThis.walletConnection = new WalletConnection(near, null)

	// Initializing our contract APIs by contract name and configuration
	globalThis.contract = new Contract(
		globalThis.walletConnection.account(),
		nearConfig.contractName,
		{
			// View methods are read only. They don't modify the state, but usually return some value.
			viewMethods: [
				'get_user',
				'valid_database',
				'get_storage',
				'get_tokenization',
			],
			// Change methods can modify the state. But you don't receive the returned value when called.
			changeMethods: ['user_action', 'set_nonce'],
		}
	) as Three0Contract
}
