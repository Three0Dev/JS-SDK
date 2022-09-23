import axios from 'axios';
import {
  Counter,
  DocStore,
  EventLog,
  Feed,
  KeyValue,
} from './wrappers';
import Database from './wrappers/database';

const peerDBServer = 'https://pinning.three0dev.com/';

const cacheMap = new Map();

async function getDB(address:string, type:string, options = {}) {

  let db:Database | null = null;
  if (db) return db
  cacheMap.set(address, db)

  try {
    switch (type) {
      case 'counter':
        db = await Counter.getCounter(address);
        break;
      case 'docstore':
        db = await DocStore.getDocStore(address, options);
        break;
      case 'eventlog':
        db = await EventLog.getEventLog(address);
        break;
      case 'feed':
        db = await Feed.getFeed(address);
        break;
      case 'keyvalue':
        db = await KeyValue.getKeyValue(address);
        break;
      default:
        throw new Error(`Unknown database type: ${type}`);
    }

    cacheMap.set(address, db)

    await fetch(`${peerDBServer}pin/?address${address}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });
  } catch (e) {
    console.error(e);
  }

  return db;
}

export async function getCounter(address:string) {
  return getDB(address, 'counter');
}

export async function getDocStore(address:string, options = { indexBy: '_id' }) {
  return getDB(address, 'docstore', options);
}

export async function getEventLog(address:string) {
  return getDB(address, 'eventlog');
}

export async function getFeed(address:string) {
  return getDB(address, 'feed');
}

export async function getKeyValue(address:string) {
  return getDB(address, 'keyvalue');
}

export function timestamp() {
  return Date.now();
}
