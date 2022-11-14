import DocumentStore from 'orbit-db-docstore'
import { v4 as uuidv4 } from 'uuid'
import Database from './Database'
import { isValidKey } from './Utils'

export class DocumentDatabase extends Database {
	/**
	 * This function returns a document database
	 * 
	 * @param key database key
	 * @returns a document database
	 */
	get(key?: string) {
		return key
			? (this.database as DocumentStore<Object>).get(key)[0]
			: (this.database as DocumentStore<Object>).get('')
	}

	/**
	 * This function queries for a particular document entry
	 * 
	 * @param callbackfn 
	 * @returns Boolean value to see if query is found
	 */
	where(callbackfn: (value: Object) => boolean): Array<Object> {
		return (this.database as DocumentStore<Object>).query(callbackfn)
	}

	/**
	 * This function creates a new entry in the document database
	 * 
	 * @param key Document database key
	 * @param value Document database value
	 */
	async set(key: string, value: Object) {
		if (!isValidKey(key)) throw Error('Key is required')
		await (this.database as DocumentStore<Object>).put({ _id: key, ...value })
	}

	/**
	 * This function adds an Object
	 * 
	 * @param value 
	 * @returns 
	 */
	async add(value: Object) {
		const id = uuidv4()
		await this.set(id, value)
		return id
	}

	/**
	 * This function deletes an entry from the document database
	 * 
	 * @param key Document database key
	 */
	async delete(key: string) {
		if (!isValidKey(key)) throw Error('Key is required')
		await (this.database as DocumentStore<Object>).del(key)
	}

	/**
	 * This function updates an entry in the document database
	 * 
	 * @param key Document database key
	 * @param value Document databae value
	 */
	async update(key: string, value: Object) {
		if (!isValidKey(key)) throw Error('Key is required')

		const doc = this.get(key)
		await this.set(key, { ...doc, ...value })
	}
}

/**
 * This function creates a new document database
 * 
 * @param address Database address
 * @param indexBy Database indexBy parameter
 * @returns New document database
 */
const getDocStore = async (address: string, indexBy: Object) => {
	const database = (await globalThis.orbitdb.docs(
		address,
		indexBy
	)) as DocumentStore<Object>
	await database.load()
	return new DocumentDatabase(database)
}

export default getDocStore
