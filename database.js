import { IPFS } from 'ipfs';
import { OrbitDB } from 'orbit-db';
import { Config } from '../config';

export class Database {
    constructor() {
        // OrbitDB instance
        this.orbitdb = null
        // Databases
        this.#startDBServices()
    }

    #startDBServices = async () => {
        await this.#initOrbitDB(await this.#initIPFS())
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

        const address = (await window.contract.getDatabaseAddress(name)).address
        
        let db = await orbitdb.open(address)
        await db.load()
        
        return db
    }

}