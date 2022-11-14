import CounterStore from 'orbit-db-counterstore'
import Database from './Database'

export class CounterDatabase extends Database {
	/**
	 * Ths function gets the counter store database
	 * 
	 * @returns the counter store database
	 */
	get() {
		return (this.database as CounterStore).value
	}

	/**
	 * This function increments the counter value
	 * 
	 * @param amt The value to increment database by
	 */
	async inc(amt = 1) {
		if (amt < 1) throw Error('Valid amount is required')

		await (this.database as CounterStore).inc(amt)
	}
}


/**
 * This function creates a new counter database
 *  
 * @param address database address
 * @returns a new counter database
 */
const getCounter = async (address: string) => {
	const database = await globalThis.orbitdb.counter(address)
	await database.load()
	return new CounterDatabase(database)
}

export default getCounter
