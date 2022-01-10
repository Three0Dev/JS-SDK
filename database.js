import { IPFS } from 'ipfs';
import { OrbitDB } from 'orbit-db';
import { PID } from './config';
import { IdentityProvider, Identities } from "orbit-db-identity-provider";
import { keyStores } from 'near-api-js';


Identities.addIdentityProvider(NearIdentityProvider)

export class Database {
    constructor() {
        // OrbitDB instance
        this.orbitdb = null
    }

    initDB = async () => {
        const identity = await Identities.createIdentity({ type: `NearIdentity`})
        await this.#initOrbitDB(await this.#initIPFS() , {identity})
    }

    // Start IPFS
    #initIPFS = async () => {
        return await IPFS.create(Config.ipfs)
    }

    // Start OrbitDB
    #initOrbitDB = async (ipfs) => {
        try{
            this.orbitdb = await OrbitDB.createInstance(ipfs)
            return this.orbitdb
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    get = async (name) => {
        if(!this.orbitdb){
            throw new Error("DB is not initialized")
        }

        if(!window.walletConnection.isSignedIn()){
            throw new Error("User not authenticated")
        }

        const address = (await window.contract.getDatabaseAddress({
            pid: PID,
            name: name
        })).address
        
        let db = await orbitdb.open(address)
        await db.load()

        return db
    }

}

class NearIdentityProvider extends IdentityProvider {
    // return type
    static get type () {
         return 'NearIdentity' 
    }
    // return identifier of external id (eg. a public key)
    async getId () { 
        return window.accountId
    } 
    //return a signature of data (signature of the OrbitDB public key)
    async signIdentity (data) {
        const keyStore = new keyStores.BrowserLocalStorageKeyStore()
        const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, window.accountId)
        return keyPair.sign(data).signature
    }
    //return true if identity.signatures are valid 
    static async verifyIdentity (identity) { 
        const keyStore = new keyStores.BrowserLocalStorageKeyStore()
        const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, window.accountId)
        return keyPair.verify(identity.publicKey + identity.signatures.id, identity.signatures.publicKey)
    }
}