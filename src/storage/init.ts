import { Contract } from 'near-api-js'
import { StorageContract } from '../blockchain/NEAR'
import { web3StorageClientAuth } from './Web3Storage'

export default async function initStorage() {
	try {
		const storageAccount = await globalThis.contract.get_storage()

		if (!storageAccount) return

		web3StorageClientAuth()

		globalThis.storageContract = new Contract(
			globalThis.walletConnection.account(),
			storageAccount,
			{
				// View methods are read only. They don't modify the state, but usually return some value.
				viewMethods: ['list_files', 'get_file'],
				// Change methods can modify the state. But you don't receive the returned value when called.
				changeMethods: ['nft_mint'],
			}
		) as StorageContract
	} catch (e) {
		// TODO
	}
}
