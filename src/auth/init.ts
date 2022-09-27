import { isLoggedIn as isLoggedInLocally, getAccountId } from './session'

export default async function initAuth() {
	if (isLoggedInLocally()) {
		let isLoggedIn = true

		try {
			isLoggedIn = await globalThis.contract.get_user({
				account_id: getAccountId(),
			})
		} catch (e) {
			isLoggedIn = false
		}

		if (!isLoggedIn) {
			await globalThis.contract.user_action({
				action: 'LOGIN',
			})
		}
	}
}
