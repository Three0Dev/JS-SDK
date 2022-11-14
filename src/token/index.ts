import { utils } from 'near-api-js'

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
	const balance = await globalThis.tokenContract.ft_balance_of({
		account_id: globalThis.walletConnection.getAccountId(),
	})
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
