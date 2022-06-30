import IdentityProvider from 'orbit-db-identity-provider';
import Identities from 'orbit-db-identity-provider';
import { keyStores } from 'near-api-js';
import * as IPFS from 'ipfs-core';
import OrbitDB from 'orbit-db';
import { v4 as uuidv4 } from 'uuid';
import * as sha256 from 'js-sha256';
import { NEAR_CONFIG } from './NEAR';
import { IPFS_CONFIG } from './config';

class NearIdentityProvider extends IdentityProvider {
  // return type
  static get type() {
    return 'NearIdentity';
  }

  // return identifier of external id (eg. a public key)
  async getId() {
    return window.accountId;
  }

  // return a signature of data (signature of the OrbitDB public key)
  async signIdentity(data) {
    const dataBuffer = convertToArray(data);
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, window.accountId);
    return keyPair.sign(dataBuffer).signature;
  }

  // return true if identity.signatures are valid
  static async verifyIdentity(identity) {
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const keyPair = await keyStore.getKey(NEAR_CONFIG.networkId, window.accountId);
    return keyPair.verify(convertToArray(identity.publicKey + identity.signatures.id), identity.signatures.publicKey);
  }
}

const isValidDatabase = (address) => window.contract.valid_database(address);

let orbitdb;

let ipfs;

export const initIPFS = async () => {
  if (ipfs) return ipfs;
  ipfs = await IPFS.create(IPFS_CONFIG.ipfs);
  return ipfs;
};

// Start OrbitDB
export const initOrbitDB = async (ipfs, chainType, isLoggedIn = false) => {
  if (isLoggedIn) {
    if (chainType.contains('NEAR')) {
      Identities.addIdentityProvider(NearIdentityProvider);
      const identity = await Identities.createIdentity({ type: 'NearIdentity' });

      orbitdb = await OrbitDB.createInstance(ipfs, { identity });
    }
  }

  if (!orbitdb) {
    orbitdb = await OrbitDB.createInstance(ipfs);
  }

  return orbitdb;
};

export const get = async (address) => {
  let db;
  if (orbitdb) {
    db = await orbitdb.open(address, {
      create: true,
      type: 'docstore',
    });
    await db.load();
  }
  return db;
};

const createUUID = () => uuidv4();

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

function convertToArray(data) {
  return Uint8Array.from(sha256.sha256.array(data));
}
