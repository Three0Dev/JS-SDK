import { isLoggedIn as isLoggedInLocally, getAccountId } from '.';

export default async function initAuth() {
  if (isLoggedInLocally()) {
    const isLoggedIn = await globalThis.contract.get_user({ account_id: getAccountId() });
    if (!isLoggedIn) {
      await globalThis.contract.user_action({
        action: 'LOGIN',
      });
    }
  }
}
