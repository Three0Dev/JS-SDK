import DocumentStore from 'orbit-db-docstore'
import { v4 as uuidv4 } from 'uuid'
import Database from './Database'
import { isValidKey } from './Utils'

export class DocumentDatabase extends Database {
	get(key?: string) {
		return key
			? (this.database as DocumentStore<Object>).get(key)[0]
			: (this.database as DocumentStore<Object>).get('')
	}

	where(callbackfn: (value: Object) => boolean): Array<Object> {
		return (this.database as DocumentStore<Object>).query(callbackfn)
	}

	async set(key: string, value: Object) {
		if (!isValidKey(key)) throw Error('Key is required')
		await (this.database as DocumentStore<Object>).put({ _id: key, ...value })
	}

	async add(value: Object) {
		const id = uuidv4()
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
	const database = (await globalThis.orbitdb.docs(
		address,
		indexBy
	)) as DocumentStore<Object>
	await database.load()
	return new DocumentDatabase(database)
}

export default getDocStore
