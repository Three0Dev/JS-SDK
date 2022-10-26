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

const peerDBServer = 'https://pinning.three0dev.com/'

const cacheMap = new Map()

type DocStoreOptions = {
	indexBy?: string
}

async function getDB(
	address: string,
	type: string,
	options: DocStoreOptions = {}
): Promise<Database> {
	let db: Database | null = null
	if (cacheMap.has(address)) return cacheMap.get(address)
	cacheMap.set(address, db)

	try {
		switch (type) {
			case 'counter':
				db = await getCounter(address)
				break
			case 'docstore':
				db = await getDocStore(address, options)
				break
			case 'eventlog':
				db = await getEventLog(address)
				break
			case 'feed':
				db = await getFeed(address)
				break
			case 'keyvalue':
				db = await getKeyValue(address)
				break
			default:
				throw new Error(`Unknown database type: ${type}`)
		}

		cacheMap.set(address, db)

		await fetch(`${peerDBServer}pin/?address${address}`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		})
	} catch (e) {
		console.error(e)
	}

	if (!db) throw new Error('Database not found')
	return db
}

export async function Counter(address: string): Promise<CounterDatabase> {
	const db = await getDB(address, 'counter')
	return db as CounterDatabase
}

export async function DocStore(
	address: string,
	options: DocStoreOptions = { indexBy: '_id' }
): Promise<DocumentDatabase> {
	const db = await getDB(address, 'docstore', options)
	return db as DocumentDatabase
}

export async function EventLog(address: string): Promise<EventLogDatabase> {
	const db = await getDB(address, 'eventlog')
	return db as EventLogDatabase
}

export async function Feed(address: string): Promise<FeedDatabase> {
	const db = await getDB(address, 'feed')
	return db as FeedDatabase
}

export async function KeyValue(address: string): Promise<KVDatabase> {
	const db = await getDB(address, 'keyvalue')
	return db as KVDatabase
}

export function timestamp() {
	return Date.now()
}
