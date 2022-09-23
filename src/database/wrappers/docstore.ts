import OrbitDB from 'orbit-db';
import DocumentStore from 'orbit-db-docstore';
import { v4 as uuidv4 } from 'uuid';
import Database from './database';
import { isValidDatabase, isValidKey, isValidValueObject } from './utils';

class DocumentDatabase extends Database {
  #database: DocumentStore<Object>;

  constructor(database: DocumentStore<Object>) {
    super(database);
    this.#database = database;
  }

  get(key: string | null) {
    return key ? this.#database.get(key)[0] : this.where((e) => e !== null);
  }

  where(callbackfn: (value: Object) => boolean):Array<Object> {
    return this.#database.query(callbackfn);
  }

  async set(key:string, value:Object) {
    if (!isValidKey(key)) throw Error("Key is required")
    if (!isValidValueObject(value)) throw Error("Value is required")
    await this.#database.put({ _id: key, ...value });
  }

  async add(value: Object) {
    const id = uuidv4();
    if (!isValidValueObject(value)) throw Error("Value is required")
    await this.set(id, value);
    return id;
  }

  async delete(key:string) {
    if (!isValidKey(key)) throw Error("Key is required")
    await this.#database.del(key);
  }

  async update(key:string, value:Object) {
    if (!isValidKey(key)) throw Error("Key is required")
    if (!isValidValueObject(value)) throw Error("Value is required")
    
    const doc = this.get(key);
    await this.set(key, { ...doc, ...value });
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getDocStore = async (address:string, indexBy:Object, orbitdb:OrbitDB = globalThis.orbitdb) => {
  if (!orbitdb) throw Error('OrbitDB is not initialized');
  const isValid = await isValidDatabase(address);
  if (!isValid) throw Error('Invalid database address');

  const database = await orbitdb.docs(address, indexBy) as DocumentStore<Object>;
  await database.load();
  return new DocumentDatabase(database);
};
