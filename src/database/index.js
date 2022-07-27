import axios from 'axios';
import {
  Counter,
  DocStore,
  EventLog,
  Feed,
  KeyValue,
} from './wrappers';

const peerDBServer = 'https://three0server.herokuapp.com';

const cacheMap = new Map();

async function getDB(address, type, options = {}) {
  let db = null;

  if (cacheMap.has(address)) {
    db = cacheMap.get(address);
  } else {
    switch (type) {
      case 'counter':
        db = Counter.getCounter(address);
        break;
      case 'docstore':
        db = DocStore.getDocStore(address, options);
        break;
      case 'eventlog':
        db = EventLog.getEventLog(address);
        break;
      case 'feed':
        db = Feed.getFeed(address);
        break;
      case 'keyvalue':
        db = KeyValue.getKeyValue(address);
        break;
      default:
        throw new Error(`Unknown database type: ${type}`);
    }

    axios.post(peerDBServer, {
      address,
      type,
    });
  }

  return db;
}

export async function getCounter(address) {
  return getDB(address, 'counter');
}

export async function getDocStore(address, indexBy = { indexBy: '_id' }) {
  return getDB(address, 'docstore', indexBy);
}

export async function getEventLog(address) {
  return getDB(address, 'eventlog');
}

export async function getFeed(address) {
  return getDB(address, 'feed');
}

export async function getKeyValue(address) {
  return getDB(address, 'keyvalue');
}

export function timestamp() {
  return Date.now();
}
