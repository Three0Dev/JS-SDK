import OrbitDB from 'orbit-db'

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

export function isValidKey(key: string) {
	return !!key
}
