import { UserActionType } from '../types/near'
import { NEAR } from '../blockchain'
import { isLoggedIn as isLoggedInLocally } from './session'

export default async function initAuth() {
	let isLoggedIn = isLoggedInLocally()

	if (!isLoggedIn) return

	try {
		const user = await NEAR.getProjectContract().get_user({
			account_id: NEAR.getAccount().accountId,
		})

		isLoggedIn = user.is_online
	} catch (e) {
		isLoggedIn = false
	}

	if (isLoggedIn) return

	await NEAR.getProjectContract().user_action({
		action: UserActionType.LOGIN,
	})
}
