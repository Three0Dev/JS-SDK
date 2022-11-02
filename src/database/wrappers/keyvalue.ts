import KeyValueStore from 'orbit-db-kvstore'
import Store from 'orbit-db-store'
import Database from './Database'

export class KVDatabase extends Database {
	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as unknown as KeyValueStore<any>).get(key)
	}

	getAll() {
		return (this.database as unknown as KeyValueStore<any>).all
	}

	async set(key: string, value: any) {
		if (!key) throw Error('Key is required')
		await (this.database as unknown as KeyValueStore<any>).put(key, value)
	}

	async delete(key: string) {
		if (!key) throw Error('Key is required')
		await (this.database as unknown as KeyValueStore<any>).del(key)
	}
}

const getKeyValue = async (address: string) => {
	const database = await orbitdb.keyvalue(address)
	await database.load()
	return new KVDatabase(database as unknown as Store)
}

export default getKeyValue
