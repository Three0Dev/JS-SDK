import CounterStore from 'orbit-db-counterstore'
import { getOrbitDBInstance } from '../Instance'
import Database from './Database'

export class CounterDatabase extends Database {
	get() {
		return (this.database as CounterStore).value
	}

	async inc(amt = 1) {
		if (amt < 1) throw Error('Valid amount is required')

		await (this.database as CounterStore).inc(amt)
	}
}

const getCounter = async (address: string) => {
	const database = await getOrbitDBInstance().counter(address)
	await database.load()
	return new CounterDatabase(database)
}

export default getCounter
