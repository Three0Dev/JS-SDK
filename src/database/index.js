/* eslint-disable class-methods-use-this */
import IdentityProvider from 'orbit-db-identity-provider';
import { keyStores } from 'near-api-js';
import OrbitDB from 'orbit-db';
import { sha256 } from 'js-sha256';
import { NEAR } from '../blockchain';
import { initIPFS } from './ipfs';
import {
  Counter,
  DocStore,
  EventLog,
  Feed,
  KeyValue,
} from './wrappers';

const convertToBitArray = (data) => Uint8Array.from(sha256.array(data));

class NearIdentityProvider extends IdentityProvider {
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
    const NEAR_CONFIG = NEAR.getNearConfig(globalThis.projectConfig);

    const dataBuffer = convertToBitArray(data);
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, globalThis.accountId);
    return keyPair.sign(dataBuffer).signature;
  }

  // return true if identity.signatures are valid
  static async verifyIdentity(identity) {
    const NEAR_CONFIG = NEAR.getNearConfig(globalThis.projectConfig);

    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, globalThis.accountId);
    return keyPair.verify(
      convertToBitArray(identity.publicKey + identity.signatures.id),
      identity.signatures.publicKey,
    );
  }
}

let orbitdb;

// Start OrbitDB
export const initOrbitDB = async (chainType, isLoggedIn = false) => {
  const ipfs = await initIPFS();

  if (isLoggedIn) {
    if (chainType.contains('NEAR')) {
      IdentityProvider.addIdentityProvider(NearIdentityProvider);
      const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });

      orbitdb = await OrbitDB.createInstance(ipfs, { identity });
    }
  }

  if (!orbitdb) {
    orbitdb = await OrbitDB.createInstance(ipfs);
  }

  return orbitdb;
};

export const { getCounter } = Counter;
export const { getDocStore } = DocStore;
export const { getEventLog } = EventLog;
export const { getFeed } = Feed;
export const { getKeyValue } = KeyValue;

export const fetchDB = async (db) => {
  if (db) {
    let entries;
    if (db.type === 'eventlog' || db.type === 'feed') entries = await db.iterator({ limit: 10 }).collect().reverse();
    else if (db.type === 'counter') entries = [{ payload: { value: db.value } }];
    else if (db.type === 'keyvalue') entries = Object.keys(db.all).map((e) => ({ payload: { value: { key: e, value: db.get(e) } } }));
    else if (db.type === 'docstore') entries = db.query((e) => e !== null, { fullOp: true }).reverse();
    else entries = [{ payload: { value: 'TODO' } }];

    return entries;
  }
  return null;
};
