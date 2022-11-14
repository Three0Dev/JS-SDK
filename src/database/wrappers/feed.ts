import FeedStore from 'orbit-db-feedstore'
import Database from './Database'
import { isValidDatabase } from './Utils'

export class FeedDatabase extends Database {
	/**
	 * This function returns the instance of a feed database
	 * 
	 * @returns Instance of feed database
	 */
	instance() {
		return this.database as FeedStore<any>
	}

	/**
	 * This function gets the entry of an entry in the feed database
	 * 
	 * @param key Feed database key
	 * @returns Feed database entry
	 */
	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as FeedStore<any>).get(key).payload.value
	}

	/**
	 * This function adds a new entry in the feed database
	 * 
	 * @param value Feed database value
	 * @returns 
	 */
	add(value: any) {
		return (this.database as FeedStore<any>).add(value)
	}

	/**
	 * This function retrieves all the entries in the feed database
	 * 
	 * @returns All entries in the feed database
	 */
	getAll() {
		return (this.database as FeedStore<any>).all
	}

	/**
	 * This function creates a new entry in the feed database
	 * 
	 * @param value Feed database value
	 * @returns 
	 */
	async set(value: any) {
		return (this.database as FeedStore<any>).add(value)
	}
}

/**
 * This function creates a new feedback database
 * 
 * @param address Database address
 * @returns New feedback database
 */
const getFeed = async (address: string) => {
	throw Error('Not implemented')

	if (!orbitdb) throw Error('OrbitDB is not initialized')
	const isValid = await isValidDatabase(address)
	if (!isValid) throw Error('Invalid database address')

	const database = await orbitdb.log(address)
	return new FeedDatabase(database)
}

export default getFeed
