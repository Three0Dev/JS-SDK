import getCounter, { CounterDatabase } from './counter'
import getDocStore, { DocumentDatabase } from './docstore'
import getEventLog, { EventLogDatabase } from './eventlog'
import getFeed, { FeedDatabase } from './feed'
import getKeyValue, { KVDatabase } from './keyvalue'

export { getCounter, getDocStore, getEventLog, getFeed, getKeyValue }
export {
	CounterDatabase,
	DocumentDatabase,
	EventLogDatabase,
	FeedDatabase,
	KVDatabase,
}
