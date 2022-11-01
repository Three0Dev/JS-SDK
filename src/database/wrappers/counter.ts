import CounterStore from 'orbit-db-counterstore'
import OrbitDB from 'orbit-db'
import { isValidDatabase } from './Utils'
import Database from './Database'

export class CounterDatabase extends Database {
	get() {
		return (this.database as CounterStore).value
	}

	async inc(amt = 1) {
		if (amt >= 1) throw Error('Valid amount is required')

		// TODO: Add support for multiple increments
		for (let i = 0; i < amt; i += 1) {
			await (this.database as CounterStore).inc()
		}
	}
}

const getCounter = async (
	address: string,
	orbitdb: OrbitDB = globalThis.orbitdb
) => {
	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.counter(address)
	await database.load()
	return new CounterDatabase(database)
}

export default getCounter
