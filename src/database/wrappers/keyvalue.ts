import OrbitDB from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';
import Database from './database';
import { isValidDatabase } from './utils';

class KVDatabase extends Database {
  #database: KeyValueStore<any>;

  constructor(database: KeyValueStore<any>) {
    super(database);
    this.#database = database;
  }

  instance() {
    return this.#database;
  }

  get(key:string) {
    if (!(key)) throw Error("Key is required")
    return this.#database.get(key);
  }

  getAll() {
    return this.#database.all;
  }

  async set(key:string, value:any) {
    if (!(key)) throw Error("Key is required")
    await this.#database.put(key, value);
  }

  async delete(key:string) {
    if (!(key)) throw Error("Key is required")
    await this.#database.del(key);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getKeyValue = async (address:string, orbitdb:OrbitDB = globalThis.orbitdb) => {
  if (!orbitdb) throw Error('OrbitDB is not initialized');
  const isValid = await isValidDatabase(address);
  if (!isValid) throw Error('Invalid database address');

  const database = await orbitdb.keyvalue(address);
  await database.load();
  return new KVDatabase(database);
};
