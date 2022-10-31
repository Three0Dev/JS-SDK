// import { isValidAddress } from 'orbit-db'
import OrbitDB from 'orbit-db'

// eslint-disable-next-line import/prefer-default-export
export const isValidDatabase = async (address) => {
	if (!OrbitDB.isValidAddress(address)) {
		return false
	}

	const isProjectDatabase = await globalThis.contract.valid_database({
		address,
	})
	return isProjectDatabase
}

export function isValidKey(key) {
	// return key && typeof key === 'string'
	return true
}

export function isValidValueObject(value) {
	// return value && value instanceof Object
	return true
}
