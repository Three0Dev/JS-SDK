import { Contract } from 'near-api-js'
import { StorageContract } from '../types/near'
import { NEAR } from '../blockchain'
import { web3StorageClientAuth } from './Web3Storage'

let storageContract: StorageContract
export function getStorageContract() {
	return storageContract
}

export default async function initStorage() {
	try {
		const storageAccount = await NEAR.getProjectContract().get_storage()

		if (!storageAccount) return

		web3StorageClientAuth()

		storageContract = new Contract(NEAR.getAccount(), storageAccount, {
			// View methods are read only. They don't modify the state, but usually return some value.
			viewMethods: ['list_files', 'get_file'],
			// Change methods can modify the state. But you don't receive the returned value when called.
			changeMethods: ['nft_mint'],
		}) as StorageContract
	} catch (e) {
		// TODO
	}
}
