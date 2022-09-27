import Store from 'orbit-db-store'

export default class Database {
	protected readonly database: Store

	constructor(database: Store) {
		this.database = database
	}

	onChange(callbackfn: Function) {
		this.database.events.on('replicated', () => callbackfn())
	}
}
