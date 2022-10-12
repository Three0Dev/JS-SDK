import { isValidDatabase } from './utils'
import Database from './database'

class CounterDatabase extends Database {
	#database

	constructor(database) {
		super(database)
		this.#database = database
	}

	get() {
		return this.#database.value
	}

	async inc(amt = 1) {
		if (amt < 1)
			throw Error('Valid amount is required')

		for (let i = 0; i < amt; i += 1) {
			await this.#database.inc()
		}
	}
}

// eslint-disable-next-line import/prefer-default-export
export const getCounter = async (address, orbitdb = globalThis.orbitdb) => {
	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.counter(address)
	await database.load()
	return new CounterDatabase(database)
}
