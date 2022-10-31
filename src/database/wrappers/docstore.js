import { v4 as uuidv4 } from 'uuid'
import Database from './database'
import { isValidDatabase, isValidKey, isValidValueObject } from './utils'

class DocumentDatabase extends Database {
	#database

	constructor(database) {
		super(database)
		this.#database = database
	}

	get(key = null) {
		if (key == null) {
			throw Error("Key is required")
		}
		return this.#database.get(key)[0]

	}

	where(callbackfn) {
		return this.#database.query(callbackfn)
	}

	async set(key, value) {
		if (!isValidKey(key)) throw Error('Key is required')
		if (!isValidValueObject(value)) throw Error('Value is required')
		await this.#database.put({ _id: key, ...value })
	}

	async add(value) {
		const id = uuidv4()
		if (!isValidValueObject(value)) throw Error('Value is required')
		await this.set(id, value)
		return id
	}

	async delete(key) {
		if (!isValidKey(key)) throw Error('Key is required')
		await this.#database.del(key)
	}

	async update(key, value) {
		if (!isValidKey(key)) throw Error('Key is required')
		if (!isValidValueObject(value)) throw Error('Value is required')

		const doc = this.get(key)
		await this.#database.put(key, { ...doc, ...value })
	}
}

// eslint-disable-next-line import/prefer-default-export
export const getDocStore = async (
	address,
	indexBy,
	orbitdb = globalThis.orbitdb
) => {
	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.docs(address, indexBy)
	await database.load()
	return new DocumentDatabase(database)
}
