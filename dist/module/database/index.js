import $3xXDN$swchelperssrc_class_private_field_getmjs from "@swc/helpers/src/_class_private_field_get.mjs";
import $3xXDN$swchelperssrc_class_private_field_initmjs from "@swc/helpers/src/_class_private_field_init.mjs";
import $3xXDN$swchelperssrc_class_private_field_setmjs from "@swc/helpers/src/_class_private_field_set.mjs";
import {isValidAddress as $3xXDN$isValidAddress} from "orbit-db";
import {v4 as $3xXDN$v4} from "uuid";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $c876db4c3087efe7$exports = {};

$parcel$export($c876db4c3087efe7$exports, "getCounter", function () { return $c876db4c3087efe7$export$ea739e05818e94bc; });




const $39b5a3d6b4d207c8$export$d8658f5af792a7a4 = async (address)=>{
    if (!(0, $3xXDN$isValidAddress)(address)) return false;
    const isProjectDatabase = await globalThis.contract.valid_database({
        address: address
    });
    return isProjectDatabase;
};
function $39b5a3d6b4d207c8$export$47865c7da002be09(key) {
    return key && typeof key === "string";
}
function $39b5a3d6b4d207c8$export$fc456c96b38a4d8(value) {
    return value && value instanceof Object;
}





var $4bdeb6c28aa37c77$var$_database = /*#__PURE__*/ new WeakMap();
class $4bdeb6c28aa37c77$export$2e2bcd8739ae039 {
    onChange(callbackfn) {
        (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $4bdeb6c28aa37c77$var$_database).events.on("replicated", ()=>callbackfn());
    }
    constructor(database){
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $4bdeb6c28aa37c77$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $4bdeb6c28aa37c77$var$_database, database);
    }
}


var $c876db4c3087efe7$var$_database = /*#__PURE__*/ new WeakMap();
class $c876db4c3087efe7$var$CounterDatabase extends (0, $4bdeb6c28aa37c77$export$2e2bcd8739ae039) {
    get() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $c876db4c3087efe7$var$_database).value;
    }
    async inc(amt = 1) {
        if (!(amt instanceof Number && amt >= 1)) throw Error("Valid amount is required");
        const incrementPromises = [];
        for(let i = 0; i < amt; i += 1)incrementPromises.push((0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $c876db4c3087efe7$var$_database).inc());
        await Promise.all(incrementPromises);
    }
    constructor(database){
        super(database);
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $c876db4c3087efe7$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $c876db4c3087efe7$var$_database, database);
    }
}
const $c876db4c3087efe7$export$ea739e05818e94bc = async (address, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $39b5a3d6b4d207c8$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.counter(address);
    await database.load();
    return new $c876db4c3087efe7$var$CounterDatabase(database);
};


var $f7c921eb9985d37a$exports = {};

$parcel$export($f7c921eb9985d37a$exports, "getDocStore", function () { return $f7c921eb9985d37a$export$a2ef662014395552; });






var $f7c921eb9985d37a$var$_database = /*#__PURE__*/ new WeakMap();
class $f7c921eb9985d37a$var$DocumentDatabase extends (0, $4bdeb6c28aa37c77$export$2e2bcd8739ae039) {
    get(key = null) {
        if (key) {
            if (!(typeof key === "string")) throw Error("Key is required");
            return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $f7c921eb9985d37a$var$_database).get(key)[0];
        }
        return this.where((e)=>e !== null);
    }
    where(callbackfn) {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $f7c921eb9985d37a$var$_database).query(callbackfn);
    }
    async set(key, value) {
        if (!(0, $39b5a3d6b4d207c8$export$47865c7da002be09)(key)) throw Error("Key is required");
        if (!(0, $39b5a3d6b4d207c8$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        await (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $f7c921eb9985d37a$var$_database).put({
            _id: key,
            ...value
        });
    }
    async add(value) {
        const id = (0, $3xXDN$v4)();
        if (!(0, $39b5a3d6b4d207c8$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        await this.set(id, value);
        return id;
    }
    async delete(key) {
        if (!(0, $39b5a3d6b4d207c8$export$47865c7da002be09)(key)) throw Error("Key is required");
        await (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $f7c921eb9985d37a$var$_database).del(key);
    }
    async update(key, value) {
        if (!(0, $39b5a3d6b4d207c8$export$47865c7da002be09)(key)) throw Error("Key is required");
        if (!(0, $39b5a3d6b4d207c8$export$fc456c96b38a4d8)(value)) throw Error("Value is required");
        const doc = this.get(key);
        await (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $f7c921eb9985d37a$var$_database).put(key, {
            ...doc,
            ...value
        });
    }
    constructor(database){
        super(database);
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $f7c921eb9985d37a$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $f7c921eb9985d37a$var$_database, database);
    }
}
const $f7c921eb9985d37a$export$a2ef662014395552 = async (address, indexBy, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $39b5a3d6b4d207c8$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.docs(address, indexBy);
    await database.load();
    return new $f7c921eb9985d37a$var$DocumentDatabase(database);
};


var $bed204bf21a4db3f$exports = {};

$parcel$export($bed204bf21a4db3f$exports, "getEventLog", function () { return $bed204bf21a4db3f$export$f19e125aba0e21b0; });





var $bed204bf21a4db3f$var$_database = /*#__PURE__*/ new WeakMap();
class $bed204bf21a4db3f$var$EventLogDatabase extends (0, $4bdeb6c28aa37c77$export$2e2bcd8739ae039) {
    instance() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $bed204bf21a4db3f$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $bed204bf21a4db3f$var$_database).get(key);
    }
    // TODO Should we implement this?
    getAll() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $bed204bf21a4db3f$var$_database).all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $bed204bf21a4db3f$var$_database).put(key, value);
    }
    constructor(database){
        super(database);
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $bed204bf21a4db3f$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $bed204bf21a4db3f$var$_database, database);
    }
}
const $bed204bf21a4db3f$export$f19e125aba0e21b0 = async (address, orbitdb = globalThis.orbitdb)=>{
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new EventLogDatabase(database);
};


var $1dcc0040a0c74b65$exports = {};

$parcel$export($1dcc0040a0c74b65$exports, "getFeed", function () { return $1dcc0040a0c74b65$export$ad32138c9e09ad4; });





var $1dcc0040a0c74b65$var$_database = /*#__PURE__*/ new WeakMap();
class $1dcc0040a0c74b65$var$FeedDatabase extends (0, $4bdeb6c28aa37c77$export$2e2bcd8739ae039) {
    instance() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $1dcc0040a0c74b65$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $1dcc0040a0c74b65$var$_database).get(key).map((e)=>e.payload.value);
    }
    add(value) {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $1dcc0040a0c74b65$var$_database).add(value);
    }
    // TODO Should we implement this?
    getAll() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $1dcc0040a0c74b65$var$_database).all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $1dcc0040a0c74b65$var$_database).put(key, value);
    }
    constructor(database){
        super(database);
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $1dcc0040a0c74b65$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $1dcc0040a0c74b65$var$_database, database);
    }
}
const $1dcc0040a0c74b65$export$ad32138c9e09ad4 = async (address, orbitdb = globalThis.orbitdb)=>{
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new FeedDatabase(database);
};


var $347a60494fd73a84$exports = {};

$parcel$export($347a60494fd73a84$exports, "getKeyValue", function () { return $347a60494fd73a84$export$38eb86f225c9e34c; });





var $347a60494fd73a84$var$_database = /*#__PURE__*/ new WeakMap();
class $347a60494fd73a84$var$KVDatabase extends (0, $4bdeb6c28aa37c77$export$2e2bcd8739ae039) {
    instance() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $347a60494fd73a84$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $347a60494fd73a84$var$_database).get(key);
    }
    getAll() {
        return (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $347a60494fd73a84$var$_database).all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $347a60494fd73a84$var$_database).put(key, value);
    }
    async delete(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await (0, $3xXDN$swchelperssrc_class_private_field_getmjs)(this, $347a60494fd73a84$var$_database).delete(key);
    }
    constructor(database){
        super(database);
        (0, $3xXDN$swchelperssrc_class_private_field_initmjs)(this, $347a60494fd73a84$var$_database, {
            writable: true,
            value: void 0
        });
        (0, $3xXDN$swchelperssrc_class_private_field_setmjs)(this, $347a60494fd73a84$var$_database, database);
    }
}
const $347a60494fd73a84$export$38eb86f225c9e34c = async (address, orbitdb = globalThis.orbitdb)=>{
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $39b5a3d6b4d207c8$export$d8658f5af792a7a4)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.keyvalue(address);
    await database.load();
    return new $347a60494fd73a84$var$KVDatabase(database);
};




const $4d5cc121bd06335c$var$peerDBServer = "https://pinning.three0dev.com/";
const $4d5cc121bd06335c$var$cacheMap = new Map();
async function $4d5cc121bd06335c$var$getDB(address, type, options = {}) {
    let db = $4d5cc121bd06335c$var$cacheMap.get(address);
    if (db) return db;
    $4d5cc121bd06335c$var$cacheMap.set(address, db);
    try {
        switch(type){
            case "counter":
                db = await (0, $c876db4c3087efe7$exports).getCounter(address);
                break;
            case "docstore":
                db = await (0, $f7c921eb9985d37a$exports).getDocStore(address, options);
                break;
            case "eventlog":
                db = await (0, $bed204bf21a4db3f$exports).getEventLog(address);
                break;
            case "feed":
                db = await (0, $1dcc0040a0c74b65$exports).getFeed(address);
                break;
            case "keyvalue":
                db = await (0, $347a60494fd73a84$exports).getKeyValue(address);
                break;
            default:
                throw new Error(`Unknown database type: ${type}`);
        }
        $4d5cc121bd06335c$var$cacheMap.set(address, db);
        await fetch(`${$4d5cc121bd06335c$var$peerDBServer}pin/?address=${address}`, {
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
async function $4d5cc121bd06335c$export$ea739e05818e94bc(address) {
    return $4d5cc121bd06335c$var$getDB(address, "counter");
}
async function $4d5cc121bd06335c$export$a2ef662014395552(address, options = {
    indexBy: "_id"
}) {
    return $4d5cc121bd06335c$var$getDB(address, "docstore", options);
}
async function $4d5cc121bd06335c$export$f19e125aba0e21b0(address) {
    return $4d5cc121bd06335c$var$getDB(address, "eventlog");
}
async function $4d5cc121bd06335c$export$ad32138c9e09ad4(address) {
    return $4d5cc121bd06335c$var$getDB(address, "feed");
}
async function $4d5cc121bd06335c$export$38eb86f225c9e34c(address) {
    return $4d5cc121bd06335c$var$getDB(address, "keyvalue");
}
function $4d5cc121bd06335c$export$fc00ee57782020aa() {
    return Date.now();
}


export {$4d5cc121bd06335c$export$ea739e05818e94bc as getCounter, $4d5cc121bd06335c$export$a2ef662014395552 as getDocStore, $4d5cc121bd06335c$export$f19e125aba0e21b0 as getEventLog, $4d5cc121bd06335c$export$ad32138c9e09ad4 as getFeed, $4d5cc121bd06335c$export$38eb86f225c9e34c as getKeyValue, $4d5cc121bd06335c$export$fc00ee57782020aa as timestamp};
//# sourceMappingURL=index.js.map
