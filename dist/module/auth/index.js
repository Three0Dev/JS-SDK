var $078e128063fe7ceb$exports = {};
"use strict";
Object.defineProperty($078e128063fe7ceb$exports, "__esModule", {
    value: true
});
$078e128063fe7ceb$exports.add = $078e128063fe7ceb$var$add;
$078e128063fe7ceb$exports.getAccountId = $078e128063fe7ceb$var$getAccountId;
$078e128063fe7ceb$exports.isLoggedIn = $078e128063fe7ceb$var$isLoggedIn;
$078e128063fe7ceb$exports.login = $078e128063fe7ceb$var$login;
$078e128063fe7ceb$exports.logout = $078e128063fe7ceb$var$logout;
function $078e128063fe7ceb$var$add(a, b) {
    return a + b;
}
function $078e128063fe7ceb$var$isLoggedIn() {
    return globalThis.walletConnection.isSignedIn();
}
function $078e128063fe7ceb$var$getAccountId() {
    return globalThis.walletConnection.getAccountId();
}
async function $078e128063fe7ceb$var$logout() {
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
async function $078e128063fe7ceb$var$login() {
    let appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "My Three0 App";
    let successUrL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    let failureUrL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


export {$078e128063fe7ceb$exports as default};
//# sourceMappingURL=index.js.map
