import {
	getCounter,
	getDocStore,
	getEventLog,
	getFeed,
	getKeyValue,
} from './wrappers'
import Database from './wrappers/database'

const peerDBServer = 'https://pinning.three0dev.com/'

const cacheMap = new Map()

type DocStoreOptions = {
	indexBy?: string
}

async function getDB(
	address: string,
	type: string,
	options: DocStoreOptions = {}
) {
	let db: Database | null = null
	if (db) return db
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

	return db
}

export async function Counter(address: string) {
	return getDB(address, 'counter')
}

export async function DocStore(
	address: string,
	options: DocStoreOptions = { indexBy: '_id' }
) {
	return getDB(address, 'docstore', options)
}

export async function EventLog(address: string) {
	return getDB(address, 'eventlog')
}

export async function Feed(address: string) {
	return getDB(address, 'feed')
}

export async function KeyValue(address: string) {
	return getDB(address, 'keyvalue')
}

export function timestamp() {
	return Date.now()
}
