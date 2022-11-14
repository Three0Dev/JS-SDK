import OrbitDB from 'orbit-db'

/**
 * This function checks if the database is valid
 * 
 * @param address Database address
 * @returns Boolean value 
 */
export const isValidDatabase = async (address: string) => {
	if (!OrbitDB.isValidAddress(address)) {
		return false
	}

	try {
		const isProjectDatabase = await globalThis.contract.valid_database({
			address,
		})

		return isProjectDatabase
	} catch (e) {
		return false
	}
}

/**
 * This function checks if the key is valid
 * 
 * @param key Database key
 * @returns Boolean value
 */
export function isValidKey(key: string) {
	return !!key
}
