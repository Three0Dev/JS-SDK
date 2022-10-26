import { isLoggedIn as isLoggedInLocally, getAccountId } from '.'

export default async function initAuth() {
	if (isLoggedInLocally()) {
		let isLoggedIn = true

		try {
			const userProfile = await globalThis.contract.get_user({
				account_id: getAccountId(),
			})

			isLoggedIn = userProfile.is_online
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
