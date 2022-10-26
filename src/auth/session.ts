export function isLoggedIn(): boolean {
	return globalThis.walletConnection.isSignedIn()
}

export function getAccountId(): string {
	return globalThis.walletConnection.getAccountId()
}
