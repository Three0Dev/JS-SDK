import { utils } from 'near-api-js'
import { NEAR } from '../blockchain'
import { getTokenContract } from './init'

export async function getMetadata() {
	const metadata = await getTokenContract().ft_metadata()
	return metadata
}

export async function isUserRegistered() {
	const balance = await getTokenContract().storage_balance_of({
		account_id: NEAR.getAccount().accountId,
	})
	return balance > 0.00125
}

export async function registerUser() {
	await getTokenContract().storage_deposit({
		args: {
			account_id: NEAR.getAccount().accountId,
		},
		amount: utils.format.parseNearAmount('0.00125'),
	})
}

export async function getBalance() {
	const { decimals } = await getMetadata()
	const balance =
		(await getTokenContract().ft_balance_of({
			account_id: NEAR.getAccount().accountId,
		})) /
		10 ** decimals
	return balance
}

export async function transferTokens(receiver: string, amount: number) {
	await getTokenContract().ft_transfer({
		args: {
			receiver_id: receiver,
			amount: `${amount}`,
		},
		amount: '1',
	})
}

// Mint tokens for the user calling this function, amount is in fungible token units
export async function buyTokens(amount: number) {
	await getTokenContract().ft_mint({
		amount: `${amount / 10 ** (await getMetadata()).exchange_rate}`,
	})
}
