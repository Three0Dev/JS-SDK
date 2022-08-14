var $795Jp$orbitdb = require("orbit-db");
var $795Jp$uuid = require("uuid");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "getCounter", () => $0641b9505be276f3$export$ea739e05818e94bc);
$parcel$export(module.exports, "getDocStore", () => $0641b9505be276f3$export$a2ef662014395552);
$parcel$export(module.exports, "getEventLog", () => $0641b9505be276f3$export$f19e125aba0e21b0);
$parcel$export(module.exports, "getFeed", () => $0641b9505be276f3$export$ad32138c9e09ad4);
$parcel$export(module.exports, "getKeyValue", () => $0641b9505be276f3$export$38eb86f225c9e34c);
$parcel$export(module.exports, "timestamp", () => $0641b9505be276f3$export$fc00ee57782020aa);
var $e180e32100ae22a5$exports = {};

$parcel$export($e180e32100ae22a5$exports, "getCounter", () => $e180e32100ae22a5$export$ea739e05818e94bc);

const $8e6ecfd1045330db$export$d8658f5af792a7a4 = async (address)=>{
    if (!(0, $795Jp$orbitdb.isValidAddress)(address)) return false;
    const isProjectDatabase = await globalThis.contract.valid_database({
        address: address
    });
    return isProjectDatabase;
};
function $8e6ecfd1045330db$export$47865c7da002be09(key) {
    return key && typeof key === "string";
}
function $8e6ecfd1045330db$export$fc456c96b38a4d8(value) {
    return value && value instanceof Object;
}


class $1c55f33027e46a71$export$2e2bcd8739ae039 {
    #database;
    constructor(database){
        this.#database = database;
    }
    onChange(callbackfn) {
        this.#database.events.on("replicated", ()=>callbackfn());
    }
}


class $e180e32100ae22a5$var$CounterDatabase extends (0, $1c55f33027e46a71$export$2e2bcd8739ae039) {
    #database;
    constructor(database){
        super(database);
        this.#database = database;
    }
    get() {
        return this.#database.value;
    }
    async inc(amt = 1) {
        if (!(amt instanceof Number && amt >= 1)) throw Error("Valid amount is required");
        const incrementPromises = [];
        for(let i = 0; i < amt; i += 1)incrementPromises.push(this.#database.inc());
        await Promise.all(incrementPromises);
    }
}
const $e180e32100ae22a5$export$ea739e05818e94bc = async (address, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $8e6ecfd1045330db$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.counter(address);
    await database.load();
    return new $e180e32100ae22a5$var$CounterDatabase(database);
};


var $e7afbe79a418d2e3$exports = {};

$parcel$export($e7afbe79a418d2e3$exports, "getDocStore", () => $e7afbe79a418d2e3$export$a2ef662014395552);



class $e7afbe79a418d2e3$var$DocumentDatabase extends (0, $1c55f33027e46a71$export$2e2bcd8739ae039) {
    #database;
    constructor(database){
        super(database);
        this.#database = database;
    }
    get(key = null) {
        if (key) {
            if (!(typeof key === "string")) throw Error("Key is required");
            return this.#database.get(key)[0];
        }
        return this.where((e)=>e !== null);
    }
    where(callbackfn) {
        return this.#database.query(callbackfn);
    }
    async set(key, value) {
        if (!(0, $8e6ecfd1045330db$export$47865c7da002be09)(key)) throw Error("Key is required");
        if (!(0, $8e6ecfd1045330db$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        await this.#database.put({
            _id: key,
            ...value
        });
    }
    async add(value) {
        const id = (0, $795Jp$uuid.v4)();
        if (!(0, $8e6ecfd1045330db$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        await this.set(id, value);
        return id;
    }
    async delete(key) {
        if (!(0, $8e6ecfd1045330db$export$47865c7da002be09)(key)) throw Error("Key is required");
        await this.#database.del(key);
    }
    async update(key, value) {
        if (!(0, $8e6ecfd1045330db$export$47865c7da002be09)(key)) throw Error("Key is required");
        if (!(0, $8e6ecfd1045330db$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        const doc = this.get(key);
        await this.#database.put(key, {
            ...doc,
            ...value
        });
    }
}
const $e7afbe79a418d2e3$export$a2ef662014395552 = async (address, indexBy, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $8e6ecfd1045330db$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.docs(address, indexBy);
    await database.load();
    return new $e7afbe79a418d2e3$var$DocumentDatabase(database);
};


var $9e340ee3d0a2be66$exports = {};

$parcel$export($9e340ee3d0a2be66$exports, "getEventLog", () => $9e340ee3d0a2be66$export$f19e125aba0e21b0);


class $9e340ee3d0a2be66$var$EventLogDatabase extends (0, $1c55f33027e46a71$export$2e2bcd8739ae039) {
    #database;
    constructor(database){
        super(database);
        this.#database = database;
    }
    instance() {
        return this.#database;
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return this.#database.get(key);
    }
    // TODO Should we implement this?
    getAll() {
        return this.#database.all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return this.#database.put(key, value);
    }
}
const $9e340ee3d0a2be66$export$f19e125aba0e21b0 = async (address, orbitdb = globalThis.orbitdb)=>{
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new EventLogDatabase(database);
};


var $cc70fe50062add5e$exports = {};

$parcel$export($cc70fe50062add5e$exports, "getFeed", () => $cc70fe50062add5e$export$ad32138c9e09ad4);


class $cc70fe50062add5e$var$FeedDatabase extends (0, $1c55f33027e46a71$export$2e2bcd8739ae039) {
    #database;
    constructor(database){
        super(database);
        this.#database = database;
    }
    instance() {
        return this.#database;
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return this.#database.get(key).map((e)=>e.payload.value);
    }
    add(value) {
        return this.#database.add(value);
    }
    // TODO Should we implement this?
    getAll() {
        return this.#database.all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return this.#database.put(key, value);
    }
}
const $cc70fe50062add5e$export$ad32138c9e09ad4 = async (address, orbitdb = globalThis.orbitdb)=>{
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new FeedDatabase(database);
};


var $711674e22308e687$exports = {};

$parcel$export($711674e22308e687$exports, "getKeyValue", () => $711674e22308e687$export$38eb86f225c9e34c);


class $711674e22308e687$var$KVDatabase extends (0, $1c55f33027e46a71$export$2e2bcd8739ae039) {
    #database;
    constructor(database){
        super(database);
        this.#database = database;
    }
    instance() {
        return this.#database;
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return this.#database.get(key);
    }
    getAll() {
        return this.#database.all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await this.#database.put(key, value);
    }
    async delete(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await this.#database.delete(key);
    }
}
const $711674e22308e687$export$38eb86f225c9e34c = async (address, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $8e6ecfd1045330db$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.keyvalue(address);
    await database.load();
    return new $711674e22308e687$var$KVDatabase(database);
};




const $0641b9505be276f3$var$peerDBServer = "https://pinning.three0dev.com/";
const $0641b9505be276f3$var$cacheMap = new Map();
async function $0641b9505be276f3$var$getDB(address, type, options = {}) {
    let db = $0641b9505be276f3$var$cacheMap.get(address);
    if (db) return db;
    $0641b9505be276f3$var$cacheMap.set(address, db);
    try {
        switch(type){
            case "counter":
                db = await (0, $e180e32100ae22a5$exports).getCounter(address);
                break;
            case "docstore":
                db = await (0, $e7afbe79a418d2e3$exports).getDocStore(address, options);
                break;
            case "eventlog":
                db = await (0, $9e340ee3d0a2be66$exports).getEventLog(address);
                break;
            case "feed":
                db = await (0, $cc70fe50062add5e$exports).getFeed(address);
                break;
            case "keyvalue":
                db = await (0, $711674e22308e687$exports).getKeyValue(address);
                break;
            default:
                throw new Error(`Unknown database type: ${type}`);
        }
        $0641b9505be276f3$var$cacheMap.set(address, db);
        await fetch(`${$0641b9505be276f3$var$peerDBServer}pin/?address=${address}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer"
        });
    } catch (e) {
        console.error(e);
    }
    return db;
}
async function $0641b9505be276f3$export$ea739e05818e94bc(address) {
    return $0641b9505be276f3$var$getDB(address, "counter");
}
async function $0641b9505be276f3$export$a2ef662014395552(address, options = {
    indexBy: "_id"
}) {
    return $0641b9505be276f3$var$getDB(address, "docstore", options);
}
async function $0641b9505be276f3$export$f19e125aba0e21b0(address) {
    return $0641b9505be276f3$var$getDB(address, "eventlog");
}
async function $0641b9505be276f3$export$ad32138c9e09ad4(address) {
    return $0641b9505be276f3$var$getDB(address, "feed");
}
async function $0641b9505be276f3$export$38eb86f225c9e34c(address) {
    return $0641b9505be276f3$var$getDB(address, "keyvalue");
}
function $0641b9505be276f3$export$fc00ee57782020aa() {
    return Date.now();
}


//# sourceMappingURL=index.js.map
