import Store from 'orbit-db-store'

export default class Database {
	protected readonly database: Store

	/**
	 * This function constructs a new database
	 * 
	 * @param database Database object
	 */
	constructor(database: Store) {
		this.database = database
	}

	/**
	 * This function updates information across all systems once database is updated
	 * 
	 * @param callbackfn Function
	 */
	onChange(callbackfn: Function) {
		this.database.events.on('replicated', () => callbackfn())
	}
}
