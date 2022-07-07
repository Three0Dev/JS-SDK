import { isLoggedIn } from '.';

export default async function initAuth() {
  if (isLoggedIn()) {
    await globalThis.contract.user_action({
      action: 'LOGIN',
    });
  }
}
