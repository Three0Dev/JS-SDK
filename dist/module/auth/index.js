function $078e128063fe7ceb$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $078e128063fe7ceb$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}
async function $078e128063fe7ceb$export$a0973bcfe11b05c9() {
    try {
        await globalThis.contract.user_action({
            action: "LOGOUT"
        });
        globalThis.walletConnection.signOut();
    } catch (e) {
        console.error(e);
        throw e;
    }
}
async function $078e128063fe7ceb$export$596d806903d1f59e(appName = "My Three0 App", successUrL = window.location.href, failureUrL = window.location.href) {
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


export {$078e128063fe7ceb$export$256a5a3564694cfc as isLoggedIn, $078e128063fe7ceb$export$c1e0336bde96e2dc as getAccountId, $078e128063fe7ceb$export$a0973bcfe11b05c9 as logout, $078e128063fe7ceb$export$596d806903d1f59e as login};
//# sourceMappingURL=index.js.map
