import OrbitDB from 'orbit-db'
import KeyValueStore from 'orbit-db-kvstore'
import Database from './database'
import { isValidDatabase } from './utils'

class KVDatabase extends Database {
	instance() {
		return this.database
	}

	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as KeyValueStore<any>).get(key)
	}

	getAll() {
		return (this.database as KeyValueStore<any>).all
	}

	async set(key: string, value: any) {
		if (!key) throw Error('Key is required')
		await (this.database as KeyValueStore<any>).put(key, value)
	}

	async delete(key: string) {
		if (!key) throw Error('Key is required')
		await (this.database as KeyValueStore<any>).del(key)
	}
}

const getKeyValue = async (
	address: string,
	orbitdb: OrbitDB = globalThis.orbitdb
) => {
	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.keyvalue(address)
	await database.load()
	return new KVDatabase(database)
}

export default getKeyValue
