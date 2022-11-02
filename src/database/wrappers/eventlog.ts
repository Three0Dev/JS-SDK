import EventStore from 'orbit-db-eventstore'
import Database from './Database'

export class EventLogDatabase extends Database {
	instance() {
		return this.database as EventStore<any>
	}

	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as EventStore<any>).get(key)
	}

	// TODO Should we implement this?
	getAll() {
		return (this.database as EventStore<any>).all
	}

	async set(value: any) {
		return (this.database as EventStore<any>).add(value)
	}
}

const getEventLog = async (address: string) => {
	throw Error('Not implemented')

	const database = await orbitdb.log(address)
	return new EventLogDatabase(database)
}

export default getEventLog
