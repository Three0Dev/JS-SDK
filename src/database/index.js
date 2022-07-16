import {
  Counter,
  DocStore,
  EventLog,
  Feed,
  KeyValue,
} from './wrappers';

export function getCounter(address) {
  return Counter.getCounter(globalThis.orbitdb, address);
}

export function getDocStore(address, indexBy = { indexBy: '_id' }) {
  return DocStore.getDocStore(globalThis.orbitdb, address, indexBy);
}

export function getEventLog(address) {
  return EventLog.getEventLog(globalThis.orbitdb, address);
}

export function getFeed(address) {
  return Feed.getFeed(globalThis.orbitdb, address);
}

export function getKeyValue(address) {
  return KeyValue.getKeyValue(globalThis.orbitdb, address);
}

export function timestamp() {
  return Date.now();
}
