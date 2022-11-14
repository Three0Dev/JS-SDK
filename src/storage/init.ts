import { Contract } from 'near-api-js'

export default async function initStorage() {
	let hasStorage = false
	try {
		hasStorage = await globalThis.contract.get_storage()
	} catch (e) {
		console.log('Error starting storage:', e)
	}

	if (!hasStorage) return

	globalThis.storageContract = new Contract(
		globalThis.walletConnection.account(),
		await globalThis.contract.get_storage(),
		{
			// View methods are read only. They don't modify the state, but usually return some value.
			viewMethods: ['list_files', 'get_file'],
			// Change methods can modify the state. But you don't receive the returned value when called.
			changeMethods: ['nft_mint'],
		}
	)
}
