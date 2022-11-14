import * as short from 'short-uuid'
import initIPFS from '../database/ipfs'

export async function uploadFile(
	file: File,
	path: string = '',
	description: string = ''
) {
	let filepath = path
	if (path === '') {
		filepath = file.name
	} else {
		filepath = `${path}/${file.name}`
	}

	// Upload to IPFS

	// Put IPFS URL into NFT and mint
	const ipfs = await initIPFS()
	const uploadedFile = await ipfs.add(file)

	const fileMetadata = {
		title: file.name,
		description,
		media: `http://ipfs.io/ipfs/${uploadedFile.path}`,
		media_hash: btoa(uploadedFile.path),
		file_type: file.type,
		issued_at: Date.now(),
	}

	await globalThis.storageContract.nft_mint(
		{
			token_id: short.generate().toLowerCase(),
			metadata: fileMetadata,
			path: filepath,
			receiver_id: globalThis.walletConnection.account().accountId,
		},
		'300000000000000', // attached GAS (optional)
		'100000000000000000000000' // attached deposit in yoctoNEAR (optional)
	)
}

export async function openFile(path: string) {
	const tokenMetaData = await globalThis.storageContract.get_file({
		file_path: path,
	})
	return tokenMetaData
}

export async function getFileList(path: string) {
	// add slash to end of path if not present
	const folder = path.slice(-1) === '/' ? path : `${path}/`
	const list = await globalThis.storageContract.list_files({ path: folder })
	return list
}
