import { Three0Contract, UserActionType } from '../blockchain/NEAR'

export async function logout() {
	await (globalThis.contract as unknown as Three0Contract).user_action({
		action: UserActionType.LOGOUT,
	})
	globalThis.walletConnection.signOut()
}

export async function login(successUrl?: string, failureUrl?: string) {
	globalThis.walletConnection.requestSignIn({
		contractId: globalThis.projectConfig.contractName,
		successUrl,
		failureUrl,
	})
}
