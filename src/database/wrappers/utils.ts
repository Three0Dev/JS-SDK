import OrbitDB from 'orbit-db'
import { Three0Contract } from '../../blockchain/NEAR'

export const isValidDatabase = async (address: string) => {
	if (!OrbitDB.isValidAddress(address)) {
		return false
	}

	try {
		const isProjectDatabase = await (
			globalThis.contract as unknown as Three0Contract
		).valid_database({
			address,
		})

		return isProjectDatabase
	} catch (e) {
		return false
	}
}

export function isValidKey(key: string) {
	return !!key
}
