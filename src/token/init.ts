import { Contract } from 'near-api-js'

export default async function initToken() {
	try {
		const tokenAccount = await globalThis.contract.get_tokenization()
		globalThis.tokenContract = new Contract(
			globalThis.walletConnection.account(),
			tokenAccount,
			{
				// View methods are read only. They don't modify the state, but usually return some value.
				viewMethods: ['ft_metadata', 'ft_balance_of', 'storage_balance_of'],
				// Change methods can modify the state. But you don't receive the returned value when called.
				changeMethods: ['storage_deposit', 'ft_transfer', 'ft_mint'],
			}
		)
	} catch (e) {
		console.log('Error starting tokens:', e)
	}
}
