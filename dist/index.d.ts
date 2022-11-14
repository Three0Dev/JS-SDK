import Store from "orbit-db-store";
import EventStore from "orbit-db-eventstore";
import FeedStore from "orbit-db-feedstore";
declare function logout(): Promise<void>;
declare function login(successUrl?: string, failureUrl?: string): Promise<void>;
declare function isLoggedIn(): boolean;
declare function getAccountId(): string;
declare class _Database1 {
    protected readonly database: Store;
    /**
     * This function constructs a new database
     *
     * @param database Database object
     */
    constructor(database: Store);
    /**
     * This function updates information across all systems once database is updated
     *
     * @param callbackfn Function
     */
    onChange(callbackfn: Function): void;
}
declare class CounterDatabase extends Database {
    /**
     * Ths function gets the counter store database
     *
     * @returns the counter store database
     */
    get(): number;
    /**
     * This function increments the counter value
     *
     * @param amt The value to increment database by
     */
    inc(amt?: number): Promise<void>;
}
declare class DocumentDatabase extends Database {
    /**
     * This function returns a document database
     *
     * @param key database key
     * @returns a document database
     */
    get(key?: string): Object;
    /**
     * This function queries for a particular document entry
     *
     * @param callbackfn
     * @returns Boolean value to see if query is found
     */
    where(callbackfn: (value: Object) => boolean): Array<Object>;
    /**
     * This function creates a new entry in the document database
     *
     * @param key Document database key
     * @param value Document database value
     */
    set(key: string, value: Object): Promise<void>;
    /**
     * This function adds an Object
     *
     * @param value
     * @returns
     */
    add(value: Object): Promise<string>;
    /**
     * This function deletes an entry from the document database
     *
     * @param key Document database key
     */
    delete(key: string): Promise<void>;
    /**
     * This function updates an entry in the document database
     *
     * @param key Document database key
     * @param value Document databae value
     */
    update(key: string, value: Object): Promise<void>;
}
declare class EventLogDatabase extends Database {
    /**
     * This function returns instance of event log database
     *
     * @returns Instance of event log database
     */
    instance(): EventStore<any>;
    /**
     * This function gets an entry from the event log database
     *
     * @param key Event log database key
     * @returns Entry from the event log database
     */
    get(key: string): LogEntry<any>;
    /**
     * This function gets all the entries from the event log database
     *
     * @returns All entries from the event log database
     */
    getAll(): unknown;
    /**
     * This function creates a new entry in the event log database
     *
     * @param value Event log database value
     * @returns
     */
    set(value: any): Promise<string>;
}
declare class FeedDatabase extends Database {
    /**
     * This function returns the instance of a feed database
     *
     * @returns Instance of feed database
     */
    instance(): FeedStore<any>;
    /**
     * This function gets the entry of an entry in the feed database
     *
     * @param key Feed database key
     * @returns Feed database entry
     */
    get(key: string): any;
    /**
     * This function adds a new entry in the feed database
     *
     * @param value Feed database value
     * @returns
     */
    add(value: any): Promise<string>;
    /**
     * This function retrieves all the entries in the feed database
     *
     * @returns All entries in the feed database
     */
    getAll(): LogEntry<any>[];
    /**
     * This function creates a new entry in the feed database
     *
     * @param value Feed database value
     * @returns
     */
    set(value: any): Promise<string>;
}
declare class KVDatabase extends Database {
    /**
     * This function returns the key value database
     *
     * @param key database address
     * @returns key value database
     */
    get(key: string): any;
    /**
     * This function returns all entries within the key value database
     *
     * @returns all entries within the key value database
     */
    getAll(): {
        [key: string]: any;
    };
    /**
     * This function creates a new entry in the key value database
     *
     * @param key of the new database entry
     * @param value of the new database entry
     */
    set(key: string, value: any): Promise<void>;
    /**
     * This function deletes an entry within the key value database
     *
     * @param key of the database entry
     */
    delete(key: string): Promise<void>;
}
type DocStoreOptions = {
    indexBy?: string;
};
/**
 * This function creates a new counter database
 *
 * @param address Database address
 * @returns Counter database
 */
declare function Counter(address: string): Promise<CounterDatabase>;
/**
 * This function creates a new document database
 *
 * @param address Database address
 * @returns Document database
 */
declare function DocStore(address: string, options?: DocStoreOptions): Promise<DocumentDatabase>;
/**
 * This function creates a new event log database
 *
 * @param address Database address
 * @returns Event log database
 */
declare function EventLog(address: string): Promise<EventLogDatabase>;
/**
 * This function creates a new feed database
 *
 * @param address Database address
 * @returns Feed database
 */
declare function Feed(address: string): Promise<FeedDatabase>;
/**
 * This function creates a new key value database
 *
 * @param address Database address
 * @returns Key value database
 */
declare function KeyValue(address: string): Promise<KVDatabase>;
/**
 * This function returns the current time
 *
 * @returns Current time
 */
declare function timestamp(): number;
interface ProjectConfig {
    chainType: string;
    contractName: string;
    projectId: string;
}
declare function uploadFile(file: File, path?: string, description?: string): Promise<void>;
declare function openFile(path: string): Promise<any>;
declare function getFileList(path: string): Promise<any>;
export const init: (projectConfig: ProjectConfig) => Promise<void>;
export const Auth: {
    getAccountId: typeof getAccountId;
    login: typeof login;
    logout: typeof logout;
    isLoggedIn: typeof isLoggedIn;
};
export const Database: {
    timestamp: typeof timestamp;
    Counter: typeof Counter;
    KeyValue: typeof KeyValue;
    DocStore: typeof DocStore;
    Feed: typeof Feed;
    EventLog: typeof EventLog;
};
export const Storage: {
    uploadFile: typeof uploadFile;
    openFile: typeof openFile;
    getFileList: typeof getFileList;
};

//# sourceMappingURL=index.d.ts.map
