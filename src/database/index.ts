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

const cacheMap = new Map()

type DocStoreOptions = {
	indexBy?: string
}

enum DatabaseType {
	Counter = 'counter',
	DocStore = 'docstore',
	EventLog = 'eventlog',
	Feed = 'feed',
	KeyValue = 'keyvalue',
}

async function getDB(
	address: string,
	type: string,
	options: DocStoreOptions = {}
): Promise<Database> {
	let db: Database | null = null
	if (cacheMap.has(address)) return cacheMap.get(address)

	try {
		switch (type) {
			case DatabaseType.Counter:
				db = await getCounter(address)
				break
			case DatabaseType.DocStore:
				db = await getDocStore(address, options)
				break
			case DatabaseType.EventLog:
				db = await getEventLog(address)
				break
			case DatabaseType.Feed:
				db = await getFeed(address)
				break
			case DatabaseType.KeyValue:
				db = await getKeyValue(address)
				break
			default:
				throw new Error(`Unknown database type: ${type}`)
		}

		cacheMap.set(address, db)
	} catch (e) {
		console.error(e)
	}

	if (!db) throw new Error('Database not found')
	return db
}

export async function Counter(address: string): Promise<CounterDatabase> {
	const db = await getDB(address, DatabaseType.Counter)
	return db as CounterDatabase
}

export async function DocStore(
	address: string,
	options: DocStoreOptions = { indexBy: '_id' }
): Promise<DocumentDatabase> {
	const db = await getDB(address, DatabaseType.DocStore, options)
	return db as DocumentDatabase
}

export async function EventLog(address: string): Promise<EventLogDatabase> {
	const db = await getDB(address, DatabaseType.EventLog)
	return db as EventLogDatabase
}

export async function Feed(address: string): Promise<FeedDatabase> {
	const db = await getDB(address, DatabaseType.Feed)
	return db as FeedDatabase
}

export async function KeyValue(address: string): Promise<KVDatabase> {
	const db = await getDB(address, DatabaseType.KeyValue)
	return db as KVDatabase
}

export function timestamp() {
	return Date.now()
}
