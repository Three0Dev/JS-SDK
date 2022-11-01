import OrbitDB from 'orbit-db'
import { Three0Contract } from '../../blockchain/NEAR'

export const isValidDatabase = async (address: string) => {
	if (!OrbitDB.isValidAddress(address)) {
		return false
	}

	const isProjectDatabase = await (
		globalThis.contract as unknown as Three0Contract
	).valid_database({
		address,
	})
	return isProjectDatabase
}

export function isValidKey(key: string) {
	return !!key
}

export function isValidValueObject(value: Object) {
	return !!value
}
