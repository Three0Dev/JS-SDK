export function isLoggedIn() {
  return globalThis.walletConnection.isSignedIn();
}

export function getAccountId() {
  return globalThis.walletConnection.getAccountId();
}

export async function logout() {
  try {
    await globalThis.contract.user_action({
      action: 'LOGOUT',
    });
    globalThis.walletConnection.signOut();
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function login(
  appName = 'My Three0 App',
  successUrL = window.location.href,
  failureUrL = window.location.href,
) {
  globalThis.walletConnection.requestSignIn(
    globalThis.projectConfig.contractName,
    appName,
    successUrL,
    failureUrL,
  );
}
