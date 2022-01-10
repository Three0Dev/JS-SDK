import { CONTRACT_NAME, PID, NEAR_CONFIG } from "./config";

export class Auth {
    logout(refresh = false) {
        window.walletConnection.signOut()
        // reload page
        if(refresh) {
            window.location.replace(window.location.origin + window.location.pathname)
        }
      }
      
    async login() {
        // Allow the current app to make calls to the specified contract on the
        // user's behalf.
        // This works by creating a new access key for the user's account and storing
        // the private key in localStorage.
        window.walletConnection.requestSignIn(CONTRACT_NAME)



        if(!(await window.contract.userExists())) {
            try {
                await window.contract.createUser({
                    pid: PID,
                    orbitID: "" // TODO
                });
            } catch (e) {
                console.error(e)
                throw e
            }
        }
    }
}
