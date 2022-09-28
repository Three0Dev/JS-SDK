import { Three0Contract, UserActionType } from '../blockchain/NEAR'

export async function logout() {
	try {
		await (globalThis.contract as unknown as Three0Contract).user_action({
			action: UserActionType.LOGOUT,
		})
		globalThis.walletConnection.signOut()
	} catch (e) {
		console.error(e)
		throw e
	}
}

export async function login(
	appName = 'My Three0 App',
	successUrL = window.location.href,
	failureUrL = window.location.href
) {
	globalThis.walletConnection.requestSignIn(
		globalThis.projectConfig.contractName,
		appName,
		successUrL,
		failureUrL
	)
}
