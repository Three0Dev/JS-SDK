import IdentityProvider from 'orbit-db-identity-provider';
import { sha256 } from 'js-sha256';
import { keyStores } from 'near-api-js';
import { NEAR } from '../../blockchain';

const convertToBitArray = (data) => Uint8Array.from(sha256.array(data));

export class NearIdentityProvider extends IdentityProvider {
  // return type
  static get type() {
    return 'NearIdentity';
  }

  // return identifier of external id (eg. a public key)
  async getId() {
    return globalThis.accountId;
  }

  // return a signature of data (signature of the OrbitDB public key)
  async signIdentity(data) {
    const NEAR_CONFIG = NEAR.getNearConfig();

    const dataBuffer = convertToBitArray(data);
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, globalThis.accountId);
    return keyPair.sign(dataBuffer).signature;
  }

  // return true if identity.signatures are valid
  static async verifyIdentity(identity) {
    const NEAR_CONFIG = NEAR.getNearConfig();

    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, globalThis.accountId);
    return keyPair.verify(
      convertToBitArray(identity.publicKey + identity.signatures.id),
      identity.signatures.publicKey,
    );
  }
}
