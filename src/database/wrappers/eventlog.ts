/* eslint-disable no-unused-vars */
import OrbitDB from 'orbit-db';
import Database from './database';
import { isValidDatabase } from './utils';

class EventLogDatabase extends Database {
  #database: EventLogDatabase;

  constructor(database:EventLogDatabase) {
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

  // TODO Should we implement this?
  getAll() {
    return this.#database.getAll();
  }

  // TODO Check if put creates a new entry for pre-exisiting ID
  async set(key:string, value:any) {
    if (!(key)) throw Error("Key is required")
    return this.#database.set(key, value);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getEventLog = async (address:string, orbitdb:OrbitDB = globalThis.orbitdb) => {
  throw Error('Not implemented');

  //   if (!orbitdb) throw Error('OrbitDB is not initialized');
  //   const isValid = await isValidDatabase(address);
  //   if (!isValid) throw Error('Invalid database address');

//   const database = await orbitdb.log(address);
//   return new EventLogDatabase(database);
};
