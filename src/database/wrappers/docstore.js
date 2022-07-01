import { v4 as uuidv4 } from 'uuid';
import { isValidDatabase } from './utils';

class DocumentDatabase {
  #database;

  constructor(database) {
    this.#database = database;
  }

  get(key) {
    if (!(key && key instanceof String)) throw Error('Key is required');
    return this.#database.get(key)[0];
  }

  where(callbackfn) {
    return this.#database.query(callbackfn);
  }

  async set(key, value) {
    if (!(key && key instanceof String)) throw Error('Key is required');
    if (value == null || value instanceof Object) throw Error('Value is required');
    return this.#database.put({ _id: key, ...value });
  }

  async add(value) {
    if (value == null || value instanceof Object) throw Error('Value is required');
    return this.set(uuidv4(), value);
  }

  async delete(key) {
    if (!(key && key instanceof String)) throw Error('Key is required');
    return this.#database.delete(key);
  }

  async update(key, value) {
    if (!(key && key instanceof String)) throw Error('Key is required');
    if (value == null || value instanceof Object) throw Error('Value is required');

    const doc = this.get(key);
    return this.#database.put(key, { ...doc, ...value });
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getDocStore = async (orbitdb, address) => {
  if (!orbitdb) throw Error('OrbitDB is not initialized');
  const isValid = await isValidDatabase(address);
  if (!isValid) throw Error('Invalid database address');

  const database = await orbitdb.docs(address);
  return new DocumentDatabase(database);
};
