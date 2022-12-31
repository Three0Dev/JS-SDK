import DocumentStore from 'orbit-db-docstore'
import * as short from 'short-uuid'
import { getOrbitDBInstance } from '../Instance'
import Database from './Database'
import { isValidKey } from './Utils'

export class DocumentDatabase extends Database {
	get(key?: string) {
		const db = this.database as DocumentStore<Object>
		return key ? db.get(key)[0] : db.get('')
	}

	where(callbackfn: (value: Object) => boolean): Array<Object> {
		return (this.database as DocumentStore<Object>).query(callbackfn)
	}

	async set(key: string, value: Object) {
		if (!isValidKey(key)) throw Error('Key is required')
		await (this.database as DocumentStore<Object>).put({ _id: key, ...value })
	}

	async add(value: Object) {
		const id = short.generate()
		await this.set(id, value)
		return id
	}

	async delete(key: string) {
		if (!isValidKey(key)) throw Error('Key is required')
		await (this.database as DocumentStore<Object>).del(key)
	}

	async update(key: string, value: Object) {
		if (!isValidKey(key)) throw Error('Key is required')

		const doc = this.get(key)
		await this.set(key, { ...doc, ...value })
	}
}

const getDocStore = async (address: string, indexBy: Object) => {
	const database = await getOrbitDBInstance().docs(address, indexBy)
	await database.load()
	return new DocumentDatabase(database)
}

export default getDocStore
