import { IPFS } from 'ipfs';
import { OrbitDB } from 'orbit-db';
import { Config } from '../config';

export class Database {
    constructor() {
        // OrbitDB instance
        this.orbitdb = null
        // Databases
        this.programs = null
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

    get = async (address) => {
        
        let db
        if (orbitdb) {
            db = await orbitdb.open(address)
            await db.load()
        }
        return db
    }

}