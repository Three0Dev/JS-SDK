import {
	getCounter,
	getDocStore,
	getEventLog,
	getFeed,
	getKeyValue,
	CounterDatabase,
	DocumentDatabase,
	EventLogDatabase,
	FeedDatabase,
	KVDatabase,
} from './wrappers'
import Database from './wrappers/Database'
import { isValidDatabase } from './wrappers/Utils'

const cacheMap = new Map()

type DocStoreOptions = {
	indexBy?: string
}

enum DatabaseType {
	CounterDB = 'counter',
	DocStoreDB = 'docstore',
	EventLogDB = 'eventlog',
	FeedDB = 'feed',
	KeyValueDB = 'keyvalue',
}

/**
 * This function creates a specified database type and returns it
 * 
 * @param address Database address
 * @param type Database type
 * @param options Database additional parameters
 * @returns New database object
 */
async function getDB(
	address: string,
	type: string,
	options: DocStoreOptions = {}
): Promise<Database> {
	let db: Database | null = null
	if (!globalThis.orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	if (cacheMap.has(address)) return cacheMap.get(address)

	switch (type) {
		case DatabaseType.CounterDB:
			db = await getCounter(address)
			break
		case DatabaseType.DocStoreDB:
			db = await getDocStore(address, options)
			break
		case DatabaseType.EventLogDB:
			db = await getEventLog(address)
			break
		case DatabaseType.FeedDB:
			db = await getFeed(address)
			break
		case DatabaseType.KeyValueDB:
			db = await getKeyValue(address)
			break
		default:
			throw new Error(`Unknown database type: ${type}`)
	}

	cacheMap.set(address, db)

	if (!db) throw new Error('Database not found')
	return db
}

/**
 * This function creates a new counter database
 * 
 * @param address Database address
 * @returns Counter database
 */
export async function Counter(address: string): Promise<CounterDatabase> {
	const db = await getDB(address, DatabaseType.CounterDB)
	return db as CounterDatabase
}

/**
 * This function creates a new document database
 * 
 * @param address Database address
 * @returns Document database
 */
export async function DocStore(
	address: string,
	options: DocStoreOptions = { indexBy: '_id' }
): Promise<DocumentDatabase> {
	const db = await getDB(address, DatabaseType.DocStoreDB, options)
	return db as DocumentDatabase
}

/**
 * This function creates a new event log database
 * 
 * @param address Database address
 * @returns Event log database
 */
export async function EventLog(address: string): Promise<EventLogDatabase> {
	const db = await getDB(address, DatabaseType.EventLogDB)
	return db as EventLogDatabase
}

/**
 * This function creates a new feed database
 * 
 * @param address Database address
 * @returns Feed database
 */
export async function Feed(address: string): Promise<FeedDatabase> {
	const db = await getDB(address, DatabaseType.FeedDB)
	return db as FeedDatabase
}

/**
 * This function creates a new key value database
 * 
 * @param address Database address
 * @returns Key value database
 */
export async function KeyValue(address: string): Promise<KVDatabase> {
	const db = await getDB(address, DatabaseType.KeyValueDB)
	return db as KVDatabase
}

/**
 * This function returns the current time
 * 
 * @returns Current time
 */
export function timestamp() {
	return Date.now()
}
