export function getAccountId(): string;
export function logout(): Promise<void>;
export function login(appName?: string, successUrL?: string, failureUrL?: string): Promise<void>;
declare class Database {
    #private;
    constructor(database: any);
    onChange(callbackfn: any): void;
}
export function getCounter(address: string): Promise<Database>;
export function getDocStore(address: string, options?: {
    indexBy: string;
}): Promise<Database>;
export function getEventLog(address: string): Promise<Database>;
export function getFeed(address: string): Promise<Database>;
export function getKeyValue(address: string): Promise<Database>;
export function timestamp(): number;
declare const init: (projectConfig: any) => Promise<void>;
export default init;

//# sourceMappingURL=index.d.ts.map
