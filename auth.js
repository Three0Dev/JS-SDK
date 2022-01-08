export class Auth {
    constructor(config) {
        this.config = config;
    }

    logout() {
        window.walletConnection.signOut()
        // reload page
        window.location.replace(window.location.origin + window.location.pathname)
      }
      
    login() {
        // Allow the current app to make calls to the specified contract on the
        // user's behalf.
        // This works by creating a new access key for the user's account and storing
        // the private key in localStorage.
        window.walletConnection.requestSignIn(this.config.contractName)
        try {
            await window.contract.createUser({
                pid: this.config.pid,
                orbitID: "" // TODO
            });
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}