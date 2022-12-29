// declare module '@three0dev/js-sdk/types' {
import { Contract } from 'near-api-js'

export interface Three0Contract extends Contract {
	valid_database: (database_id: ValidDatabaseParams) => Promise<boolean>
	get_user: (user_id: GetUserParams) => Promise<User>
	user_action: (action: UserActionParams) => Promise<void>
	get_storage: () => Promise<string>
	set_nonce: () => Promise<number>
	get_tokenization: () => Promise<string>
}

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
	list_files: (params: ListFilesParams) => Promise<string[]>
	get_file: (params: GetFileParams) => Promise<FileMetadata>
	nft_mint: (
		params: NftMintParams,
		attached_gas: string,
		attached_deposit: string
	) => Promise<void>
}

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
// }
