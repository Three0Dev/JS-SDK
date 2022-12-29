import * as short from 'short-uuid'
import { NEAR } from '../blockchain'
import { getStorageContract } from './init'
import uploadWeb3Files, { web3StorageGateway } from './Web3Storage'

export async function uploadFile(
	file: File,
	path: string = '',
	description: string = ''
) {
	const filepath = path === '' ? file.name : `${path.slice(1)}/${file.name}`

	const cid = await uploadWeb3Files([file])

	const fileMetadata = {
		title: file.name,
		description,
		media: `${web3StorageGateway}/${cid}/${file.name}`,
		media_hash: window.btoa(cid),
		file_type: file.type,
		issued_at: Date.now(),
	}

	return getStorageContract().nft_mint(
		{
			token_id: short.generate().toLowerCase(),
			metadata: fileMetadata,
			path: filepath,
			receiver_id: NEAR.getAccount().accountId,
			//   perpetual_royalties: royalties
		},
		'300000000000000', // attached GAS (optional)
		'100000000000000000000000' // attached deposit in yoctoNEAR (optional)
	)
}

export async function openFile(path: string) {
	const tokenMetaData = await getStorageContract().get_file({
		file_path: path,
	})
	return tokenMetaData
}

export async function getFileList(path: string) {
	// add slash to end of path if not present
	const folder = path.slice(-1) === '/' ? path : `${path}/`
	const list = await getStorageContract().list_files({ path: folder })
	return list
}
