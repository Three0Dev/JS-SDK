import { IPFS } from 'ipfs';
import { OrbitDB } from 'orbit-db';
import { Config } from '../config';

export class Database {
    constructor() {
        // OrbitDB instance
        this.orbitdb = null;
        // Databases
        this.programs = null;
    }

    // Start IPFS
    initIPFS = async () => {
        return await IPFS.create(Config.ipfs)
    }

    // Start OrbitDB
    initOrbitDB = async (ipfs) => {
        orbitdb = await OrbitDB.createInstance(ipfs)
        return orbitdb
    }

    getAllDatabases = async () => {
        if (!programs && orbitdb) {
            // Load programs database
            programs = await orbitdb.feed('network.programs', {
                accessController: { write: [orbitdb.identity.id] },
                create: true
            })
            await programs.load()
        }

        return programs
            ? programs.iterator({ limit: -1 }).collect()
            : []
    }

    getDB = async (address) => {
        let db
        if (orbitdb) {
            db = await orbitdb.open(address)
            await db.load()
        }
        return db
    }

    addDatabase = async (address) => {
        const db = await orbitdb.open(address)
        return programs.add({
            name: db.dbname,
            type: db.type,
            address: address,
            added: Date.now()
        })
    }

    createDatabase = async (name, type, permissions) => {
        let accessController

        switch (permissions) {
            case 'public':
                accessController = { write: ['*'] }
                break
            default:
                accessController = { write: [orbitdb.identity.id] }
                break
        }

        const db = await orbitdb.create(name, type, { accessController })

        return programs.add({
            name,
            type,
            address: db.address.toString(),
            added: Date.now()
        })
    }

    removeDatabase = async (hash) => {
        return programs.remove(hash)
    }

}
