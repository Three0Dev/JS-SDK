"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.add = $fb5487c0bb6a0f3b$var$add;
module.exports.getAccountId = $fb5487c0bb6a0f3b$var$getAccountId;
module.exports.isLoggedIn = $fb5487c0bb6a0f3b$var$isLoggedIn;
module.exports.login = $fb5487c0bb6a0f3b$var$login;
module.exports.logout = $fb5487c0bb6a0f3b$var$logout;
function $fb5487c0bb6a0f3b$var$add(a, b) {
    return a + b;
}
function $fb5487c0bb6a0f3b$var$isLoggedIn() {
    return globalThis.walletConnection.isSignedIn();
}
function $fb5487c0bb6a0f3b$var$getAccountId() {
    return globalThis.walletConnection.getAccountId();
}
async function $fb5487c0bb6a0f3b$var$logout() {
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
async function $fb5487c0bb6a0f3b$var$login() {
    let appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "My Three0 App";
    let successUrL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    let failureUrL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


//# sourceMappingURL=index.js.map
