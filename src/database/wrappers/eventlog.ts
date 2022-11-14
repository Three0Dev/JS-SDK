import EventStore from 'orbit-db-eventstore'
import Database from './Database'

export class EventLogDatabase extends Database {
	/**
	 * This function returns instance of event log database
	 * 
	 * @returns Instance of event log database
	 */
	instance() {
		return this.database as EventStore<any>
	}

	/**
	 * This function gets an entry from the event log database
	 * 
	 * @param key Event log database key
	 * @returns Entry from the event log database
	 */
	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as EventStore<any>).get(key)
	}

	/**
	 * This function gets all the entries from the event log database
	 * 
	 * @returns All entries from the event log database
	 */
	getAll() {
		return (this.database as EventStore<any>).all
	}

	/**
	 * This function creates a new entry in the event log database
	 * 
	 * @param value Event log database value
	 * @returns
	 */
	async set(value: any) {
		return (this.database as EventStore<any>).add(value)
	}
}

/**
 * This function creates a new event log database
 * 
 * @param address Database address
 * @returns New event log database
 */
const getEventLog = async (address: string) => {
	throw Error('Not implemented')

	const database = await orbitdb.log(address)
	return new EventLogDatabase(database)
}

export default getEventLog
