function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "isLoggedIn", () => $fb5487c0bb6a0f3b$export$256a5a3564694cfc);
$parcel$export(module.exports, "getAccountId", () => $fb5487c0bb6a0f3b$export$c1e0336bde96e2dc);
$parcel$export(module.exports, "logout", () => $fb5487c0bb6a0f3b$export$a0973bcfe11b05c9);
$parcel$export(module.exports, "login", () => $fb5487c0bb6a0f3b$export$596d806903d1f59e);
function $fb5487c0bb6a0f3b$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $fb5487c0bb6a0f3b$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}
async function $fb5487c0bb6a0f3b$export$a0973bcfe11b05c9() {
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
async function $fb5487c0bb6a0f3b$export$596d806903d1f59e(appName = "My Three0 App", successUrL = window.location.href, failureUrL = window.location.href) {
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


//# sourceMappingURL=index.js.map
