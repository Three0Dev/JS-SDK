import Store from "orbit-db-store";
import EventStore from "orbit-db-eventstore";
import FeedStore from "orbit-db-feedstore";
declare function logout(): Promise<void>;
declare function login(appName?: string, successUrL?: string, failureUrL?: string): Promise<void>;
declare function isLoggedIn(): boolean;
declare function getAccountId(): string;
declare class _Database1 {
    protected readonly database: Store;
    constructor(database: Store);
    onChange(callbackfn: Function): void;
}
declare class CounterDatabase extends Database {
    get(): number;
    inc(amt?: number): Promise<void>;
}
declare class DocumentDatabase extends Database {
    get(key?: string): Object;
    where(callbackfn: (value: Object) => boolean): Array<Object>;
    set(key: string, value: Object): Promise<void>;
    add(value: Object): Promise<string>;
    delete(key: string): Promise<void>;
    update(key: string, value: Object): Promise<void>;
}
declare class EventLogDatabase extends Database {
    instance(): EventStore<any>;
    get(key: string): LogEntry<any>;
    getAll(): unknown;
    set(value: any): Promise<string>;
}
declare class FeedDatabase extends Database {
    instance(): FeedStore<any>;
    get(key: string): any;
    add(value: any): Promise<string>;
    getAll(): LogEntry<any>[];
    set(value: any): Promise<string>;
}
declare class KVDatabase extends Database {
    instance(): Store;
    get(key: string): any;
    getAll(): {
        [key: string]: any;
    };
    set(key: string, value: any): Promise<void>;
    delete(key: string): Promise<void>;
}
type DocStoreOptions = {
    indexBy?: string;
};
declare function Counter(address: string): Promise<CounterDatabase>;
declare function DocStore(address: string, options?: DocStoreOptions): Promise<DocumentDatabase>;
declare function EventLog(address: string): Promise<EventLogDatabase>;
declare function Feed(address: string): Promise<FeedDatabase>;
declare function KeyValue(address: string): Promise<KVDatabase>;
declare function timestamp(): number;
interface ProjectConfig {
    chainType: string;
    contractName: string;
    projectId: string;
}
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

//# sourceMappingURL=index.d.ts.map
