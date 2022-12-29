import FeedStore from 'orbit-db-feedstore'
import { getOrbitDBInstance } from '../Instance'
import Database from './Database'

export class FeedDatabase extends Database {
	instance() {
		return this.database as FeedStore<any>
	}

	get(key: string) {
		if (!key) throw Error('Key is required')
		return (this.database as FeedStore<any>).get(key).payload.value
	}

	add(value: any) {
		return (this.database as FeedStore<any>).add(value)
	}

	// TODO Should we implement this?
	getAll() {
		return (this.database as FeedStore<any>).all
	}

	async set(value: any) {
		return (this.database as FeedStore<any>).add(value)
	}
}

const getFeed = async (address: string) => {
	throw Error('Not implemented')

	const database = await getOrbitDBInstance().log(address)
	return new FeedDatabase(database)
}

export default getFeed
