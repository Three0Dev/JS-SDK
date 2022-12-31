import { NEAR } from '../blockchain'

export function getAccountId(): string {
	return NEAR.getAccount().accountId
}

export function isLoggedIn() {
	return NEAR.isWalletAccount()
		? NEAR.getWalletConnection().isSignedIn()
		: !!localStorage.getItem('three0loggedIn')
}
