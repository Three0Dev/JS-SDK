/* eslint-disable class-methods-use-this */
import IdentityProvider from 'orbit-db-identity-provider'
import { keyStores } from 'near-api-js'
import { getBlockchainType } from '../../utils'

export default class NearIdentityProvider extends IdentityProvider {
	// return type
	static get type() {
		return 'NearIdentity'
	}

	// return identifier of external id (eg. a public key)
	// eslint-disable-next-line class-methods-use-this
	getId() {
		return globalThis.accountId
	}

	// return a signature of data (signature of the OrbitDB public key)
	// eslint-disable-next-line class-methods-use-this
	async signIdentity(
		// eslint-disable-next-line no-undef
		data: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
	) {
		console.log(data)
		const dataBuffer = Buffer.from(data)
		console.log(dataBuffer)

		const keyStore = new keyStores.BrowserLocalStorageKeyStore()
		const keyPair = await keyStore.getKey(getBlockchainType(), this.getId())

		const { signature } = keyPair.sign(dataBuffer)
		console.log(signature)

		return signature
	}

	// return true if identity.signatures are valid
	static async verifyIdentity(identity: any) {
		const keyStore = new keyStores.BrowserLocalStorageKeyStore()
		const keyPair = await keyStore.getKey(getBlockchainType(), identity.id)

		console.log(identity)

		const message = Buffer.from(identity.publicKey + identity.signatures.id)

		const verify = keyPair.verify(
			message,
			Buffer.from(Object.values(identity.signatures.publicKey) as any)
		)

		console.log(verify)

		return verify
	}
}
