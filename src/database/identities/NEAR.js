import IdentityProvider from 'orbit-db-identity-provider'
import { keyStores } from 'near-api-js'
import { NEAR } from '../../blockchain'

export default class NearIdentityProvider extends IdentityProvider {
	// return type
	static get type() {
		return 'NearIdentity'
	}

	// return identifier of external id (eg. a public key)
	async getId() {
		return globalThis.accountId
	}

	// return a signature of data (signature of the OrbitDB public key)
	async signIdentity(data) {
		const NEAR_CONFIG = NEAR.getNearConfig()

		const dataBuffer = Buffer.from(data)
		const keyStore = new keyStores.BrowserLocalStorageKeyStore()
		const keyPair = await keyStore.getKey(
			NEAR_CONFIG.networkId,
			globalThis.accountId
		)
		return keyPair.sign(dataBuffer).signature
	}

	// return true if identity.signatures are valid
	static async verifyIdentity(identity) {
		const NEAR_CONFIG = NEAR.getNearConfig()

		const keyStore = new keyStores.BrowserLocalStorageKeyStore()
		const keyPair = await keyStore.getKey(
			NEAR_CONFIG.networkId,
			globalThis.accountId
		)
		return keyPair.verify(
			Buffer.from(identity.publicKey + identity.signatures.id),
			Buffer.from(Object.values(identity.signatures.publicKey))
		)
	}
}
