import { Contract } from 'near-api-js'
import { Three0Contract } from '../blockchain/NEAR'

export default async function initStorage() {
	const hasStorage = await (
		globalThis.contract as unknown as Three0Contract
	).has_storage()
	if (!hasStorage) {
		return
	}
	globalThis.storageContract = new Contract(
		globalThis.walletConnection.account(),
		await (globalThis.contract as unknown as Three0Contract).get_storage(),
		{
			// View methods are read only. They don't modify the state, but usually return some value.
			viewMethods: ['list_files', 'get_file'],
			// Change methods can modify the state. But you don't receive the returned value when called.
			changeMethods: ['nft_mint'],
		}
	)
}
