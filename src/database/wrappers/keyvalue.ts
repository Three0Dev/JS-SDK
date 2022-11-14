import KeyValueStore from 'orbit-db-kvstore'
import Store from 'orbit-db-store'
import Database from './Database'

export class KVDatabase extends Database {
	/**
	 * This function returns the key value database
	 * 
	 * @param key database address
	 * @returns key value database
	 */
	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as unknown as KeyValueStore<any>).get(key)
	}

	/**
	 * This function returns all entries within the key value database
	 * 
	 * @returns all entries within the key value database
	 */
	getAll() {
		return (this.database as unknown as KeyValueStore<any>).all
	}

	/**
	 * This function creates a new entry in the key value database
	 * 
	 * @param key of the new database entry
	 * @param value of the new database entry
	 */
	async set(key: string, value: any) {
		if (!key) throw Error('Key is required')
		await (this.database as unknown as KeyValueStore<any>).put(key, value)
	}

	/**
	 * This function deletes an entry within the key value database
	 * 
	 * @param key of the database entry
	 */
	async delete(key: string) {
		if (!key) throw Error('Key is required')
		await (this.database as unknown as KeyValueStore<any>).del(key)
	}
}

/**
 * This function creates a new key value database
 * 
 * @param address database address
 * @returns a new key value database
 */
const getKeyValue = async (address: string) => {
	const database = await orbitdb.keyvalue(address)
	await database.load()
	return new KVDatabase(database as unknown as Store)
}

export default getKeyValue
