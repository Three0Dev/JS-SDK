import { UserActionType } from '../blockchain/NEAR'
import { isLoggedIn as isLoggedInLocally, getAccountId } from './Session'

export default async function initAuth() {
	if (!isLoggedInLocally()) return

	let isLoggedIn = true

	try {
		const user = await globalThis.contract.get_user({
			account_id: getAccountId(),
		})
		isLoggedIn = user.is_online
	} catch (e) {
		isLoggedIn = false
	}

	if (!isLoggedIn) {
		await globalThis.contract.user_action({
			action: UserActionType.LOGIN,
		})
	}
}
