/* eslint-disable no-unused-vars */
import OrbitDB from 'orbit-db';
import FeedStore from 'orbit-db-feedstore';
import Database from './database';
import { isValidDatabase } from './utils';

class FeedDatabase extends Database {
  #database: FeedStore<any>;

  constructor(database: FeedStore<any>) {
    super(database);
    this.#database = database;
  }

  instance() {
    return this.#database;
  }

  get(key: string) {
    if (!(key)) throw Error("Key is required")
    return this.#database.get(key).payload.value;
  }

  add(value: any) {
    return this.#database.add(value);
  }

  // TODO Should we implement this?
  getAll() {
    return this.#database.all;
  }

  // TODO Check if put creates a new entry for pre-exisiting ID
  async set(key: string, value: any) {
    if (!(key)) throw Error("Key is required")
    return this.#database.add(value);
  }
}

// eslint-disable-next-line import/prefer-default-export
export const getFeed = async (address: string, orbitdb:OrbitDB = globalThis.orbitdb) => {
  throw Error('Not implemented');

  //   if (!orbitdb) throw Error('OrbitDB is not initialized');
  //   const isValid = await isValidDatabase(address);
  //   if (!isValid) throw Error('Invalid database address');

//   const database = await orbitdb.log(address);
//   return new FeedDatabase(database);
};
