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
	if (typeof key === "string"){
		return true
	}
	return false
}

export function isValidValueObject(value) {
	if (typeof value === "object"){
		return true
	}
	return false
}
