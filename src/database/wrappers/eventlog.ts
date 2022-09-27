/* eslint-disable no-unused-vars */
import OrbitDB from 'orbit-db'
import EventStore from 'orbit-db-eventstore'
import Database from './database'
import { isValidDatabase } from './utils'

class EventLogDatabase extends Database {
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

const getEventLog = async (
	address: string,
	orbitdb: OrbitDB = globalThis.orbitdb
) => {
	throw Error('Not implemented')

	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.log(address)
	return new EventLogDatabase(database)
}

export default getEventLog
