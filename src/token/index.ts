import { utils } from 'near-api-js'

export async function getMetadata() {
	const metadata = await globalThis.tokenContract.ft_metadata()
	return metadata
}

export async function isUserRegistered() {
	const balance = await globalThis.tokenContract.storage_balance_of({
		account_id: globalThis.walletConnection.getAccountId(),
	})
	return balance > 0.00125
}

export async function registerUser() {
	await globalThis.tokenContract.storage_deposit({
		args: {
			account_id: globalThis.walletConnection.getAccountId(),
		},
		amount: utils.format.parseNearAmount('0.00125'),
	})
}

export async function getBalance() {
    const decimals = (await getMetadata()).decimals
	const balance = (await globalThis.tokenContract.ft_balance_of({
		account_id: globalThis.walletConnection.getAccountId(),
	})) / 10 ** decimals
	return balance
}

export async function transferTokens(receiver: string, amount: number) {
	await globalThis.tokenContract.ft_transfer({
		args: {
			receiver_id: receiver,
			amount: `${amount}`,
		},
		amount: '1',
	})
}

// Mint tokens for the user calling this function, amount is in fungible token units
export async function buyTokens(amount: number) {
    await globalThis.tokenContract.ft_mint({
        amount: `${amount / 10 ** (await getMetadata()).exchange_rate}`,
    })
}