import getCounter, { CounterDatabase } from './Counter'
import getDocStore, { DocumentDatabase } from './Docstore'
import getEventLog, { EventLogDatabase } from './Eventlog'
import getFeed, { FeedDatabase } from './feed'
import getKeyValue, { KVDatabase } from './Keyvalue'

export { getCounter, getDocStore, getEventLog, getFeed, getKeyValue }
export {
	CounterDatabase,
	DocumentDatabase,
	EventLogDatabase,
	FeedDatabase,
	KVDatabase,
}
