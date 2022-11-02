import * as $3xXDN$orbitdb from "orbit-db";
import {v4 as $3xXDN$v4} from "uuid";

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire3405"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire3405"] = parcelRequire;
}
parcelRequire.register("hd48j", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCounter = void 0;

var $4XbyP = parcelRequire("4XbyP");

var $c876db4c3087efe7$var$_database2 = $c876db4c3087efe7$var$_interopRequireDefault((parcelRequire("6vQXa")));
function $c876db4c3087efe7$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $c876db4c3087efe7$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $c876db4c3087efe7$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $c876db4c3087efe7$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $c876db4c3087efe7$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $c876db4c3087efe7$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $c876db4c3087efe7$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $c876db4c3087efe7$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $c876db4c3087efe7$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $c876db4c3087efe7$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $c876db4c3087efe7$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $c876db4c3087efe7$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $c876db4c3087efe7$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $c876db4c3087efe7$var$_database = /*#__PURE__*/ new WeakMap();
class $c876db4c3087efe7$var$CounterDatabase extends $c876db4c3087efe7$var$_database2.default {
    get() {
        return $c876db4c3087efe7$var$_classPrivateFieldGet(this, $c876db4c3087efe7$var$_database).value;
    }
    async inc() {
        let amt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (amt < 1) throw Error("Valid amount is required");
        for(let i = 0; i < amt; i += 1)await $c876db4c3087efe7$var$_classPrivateFieldGet(this, $c876db4c3087efe7$var$_database).inc();
    }
    constructor(database){
        super(database);
        $c876db4c3087efe7$var$_classPrivateFieldInitSpec(this, $c876db4c3087efe7$var$_database, {
            writable: true,
            value: void 0
        });
        $c876db4c3087efe7$var$_classPrivateFieldSet(this, $c876db4c3087efe7$var$_database, database);
    }
}
// eslint-disable-next-line import/prefer-default-export
const $c876db4c3087efe7$var$getCounter = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $4XbyP.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.counter(address);
    await database.load();
    return new $c876db4c3087efe7$var$CounterDatabase(database);
};
module.exports.getCounter = $c876db4c3087efe7$var$getCounter;

});
parcelRequire.register("4XbyP", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isValidDatabase = void 0;
module.exports.isValidKey = $39b5a3d6b4d207c8$var$isValidKey;
module.exports.isValidValueObject = $39b5a3d6b4d207c8$var$isValidValueObject;

var $39b5a3d6b4d207c8$var$_orbitDb = $39b5a3d6b4d207c8$var$_interopRequireDefault($3xXDN$orbitdb);
function $39b5a3d6b4d207c8$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// import { isValidAddress } from 'orbit-db'
// eslint-disable-next-line import/prefer-default-export
const $39b5a3d6b4d207c8$var$isValidDatabase = async (address)=>{
    if (!$39b5a3d6b4d207c8$var$_orbitDb.default.isValidAddress(address)) return false;
    const isProjectDatabase = await globalThis.contract.valid_database({
        address: address
    });
    return isProjectDatabase;
};
module.exports.isValidDatabase = $39b5a3d6b4d207c8$var$isValidDatabase;
function $39b5a3d6b4d207c8$var$isValidKey(key) {
    return key && typeof key === "string";
}
function $39b5a3d6b4d207c8$var$isValidValueObject(value) {
    return value && value instanceof Object;
}

});

parcelRequire.register("6vQXa", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
function $4bdeb6c28aa37c77$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $4bdeb6c28aa37c77$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $4bdeb6c28aa37c77$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $4bdeb6c28aa37c77$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $4bdeb6c28aa37c77$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $4bdeb6c28aa37c77$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $4bdeb6c28aa37c77$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $4bdeb6c28aa37c77$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $4bdeb6c28aa37c77$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $4bdeb6c28aa37c77$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $4bdeb6c28aa37c77$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $4bdeb6c28aa37c77$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $4bdeb6c28aa37c77$var$_database = /*#__PURE__*/ new WeakMap();
class $4bdeb6c28aa37c77$var$Database {
    onChange(callbackfn) {
        $4bdeb6c28aa37c77$var$_classPrivateFieldGet(this, $4bdeb6c28aa37c77$var$_database).events.on("replicated", ()=>callbackfn());
    }
    constructor(database){
        $4bdeb6c28aa37c77$var$_classPrivateFieldInitSpec(this, $4bdeb6c28aa37c77$var$_database, {
            writable: true,
            value: void 0
        });
        $4bdeb6c28aa37c77$var$_classPrivateFieldSet(this, $4bdeb6c28aa37c77$var$_database, database);
    }
}
module.exports.default = $4bdeb6c28aa37c77$var$Database;

});


parcelRequire.register("lgXlX", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getDocStore = void 0;


var $f7c921eb9985d37a$var$_database2 = $f7c921eb9985d37a$var$_interopRequireDefault((parcelRequire("6vQXa")));

var $4XbyP = parcelRequire("4XbyP");
function $f7c921eb9985d37a$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $f7c921eb9985d37a$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $f7c921eb9985d37a$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $f7c921eb9985d37a$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $f7c921eb9985d37a$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $f7c921eb9985d37a$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $f7c921eb9985d37a$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $f7c921eb9985d37a$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $f7c921eb9985d37a$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $f7c921eb9985d37a$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $f7c921eb9985d37a$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $f7c921eb9985d37a$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $f7c921eb9985d37a$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $f7c921eb9985d37a$var$_database = /*#__PURE__*/ new WeakMap();
class $f7c921eb9985d37a$var$DocumentDatabase extends $f7c921eb9985d37a$var$_database2.default {
    get() {
        let key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (key) {
            if (!(typeof key === "string")) throw Error("Key is required");
            return $f7c921eb9985d37a$var$_classPrivateFieldGet(this, $f7c921eb9985d37a$var$_database).get(key)[0];
        }
        return this.where((e)=>e !== null);
    }
    where(callbackfn) {
        return $f7c921eb9985d37a$var$_classPrivateFieldGet(this, $f7c921eb9985d37a$var$_database).query(callbackfn);
    }
    async set(key, value) {
        if (!(0, $4XbyP.isValidKey)(key)) throw Error("Key is required");
        if (!(0, $4XbyP.isValidValueObject)(value)) throw Error("Value is required");
        await $f7c921eb9985d37a$var$_classPrivateFieldGet(this, $f7c921eb9985d37a$var$_database).put({
            _id: key,
            ...value
        });
    }
    async add(value) {
        const id = (0, $3xXDN$v4)();
        if (!(0, $4XbyP.isValidValueObject)(value)) throw Error("Value is required");
        await this.set(id, value);
        return id;
    }
    async delete(key) {
        if (!(0, $4XbyP.isValidKey)(key)) throw Error("Key is required");
        await $f7c921eb9985d37a$var$_classPrivateFieldGet(this, $f7c921eb9985d37a$var$_database).del(key);
    }
    async update(key, value) {
        if (!(0, $4XbyP.isValidKey)(key)) throw Error("Key is required");
        if (!(0, $4XbyP.isValidValueObject)(value)) throw Error("Value is required");
        const doc = this.get(key);
        await $f7c921eb9985d37a$var$_classPrivateFieldGet(this, $f7c921eb9985d37a$var$_database).put(key, {
            ...doc,
            ...value
        });
    }
    constructor(database){
        super(database);
        $f7c921eb9985d37a$var$_classPrivateFieldInitSpec(this, $f7c921eb9985d37a$var$_database, {
            writable: true,
            value: void 0
        });
        $f7c921eb9985d37a$var$_classPrivateFieldSet(this, $f7c921eb9985d37a$var$_database, database);
    }
}
// eslint-disable-next-line import/prefer-default-export
const $f7c921eb9985d37a$var$getDocStore = async function(address, indexBy) {
    let orbitdb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $4XbyP.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.docs(address, indexBy);
    await database.load();
    return new $f7c921eb9985d37a$var$DocumentDatabase(database);
};
module.exports.getDocStore = $f7c921eb9985d37a$var$getDocStore;

});

parcelRequire.register("gnJps", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getEventLog = void 0;

var $bed204bf21a4db3f$var$_database2 = $bed204bf21a4db3f$var$_interopRequireDefault((parcelRequire("6vQXa")));
parcelRequire("4XbyP");
function $bed204bf21a4db3f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $bed204bf21a4db3f$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $bed204bf21a4db3f$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $bed204bf21a4db3f$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $bed204bf21a4db3f$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $bed204bf21a4db3f$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $bed204bf21a4db3f$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $bed204bf21a4db3f$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $bed204bf21a4db3f$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $bed204bf21a4db3f$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $bed204bf21a4db3f$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $bed204bf21a4db3f$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $bed204bf21a4db3f$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $bed204bf21a4db3f$var$_database = /*#__PURE__*/ new WeakMap();
class $bed204bf21a4db3f$var$EventLogDatabase extends $bed204bf21a4db3f$var$_database2.default {
    instance() {
        return $bed204bf21a4db3f$var$_classPrivateFieldGet(this, $bed204bf21a4db3f$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $bed204bf21a4db3f$var$_classPrivateFieldGet(this, $bed204bf21a4db3f$var$_database).get(key);
    }
    // TODO Should we implement this?
    getAll() {
        return $bed204bf21a4db3f$var$_classPrivateFieldGet(this, $bed204bf21a4db3f$var$_database).all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $bed204bf21a4db3f$var$_classPrivateFieldGet(this, $bed204bf21a4db3f$var$_database).put(key, value);
    }
    constructor(database){
        super(database);
        $bed204bf21a4db3f$var$_classPrivateFieldInitSpec(this, $bed204bf21a4db3f$var$_database, {
            writable: true,
            value: void 0
        });
        $bed204bf21a4db3f$var$_classPrivateFieldSet(this, $bed204bf21a4db3f$var$_database, database);
    }
}
// eslint-disable-next-line import/prefer-default-export
const $bed204bf21a4db3f$var$getEventLog = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new EventLogDatabase(database);
};
module.exports.getEventLog = $bed204bf21a4db3f$var$getEventLog;

});

parcelRequire.register("2yBHu", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getFeed = void 0;

var $1dcc0040a0c74b65$var$_database2 = $1dcc0040a0c74b65$var$_interopRequireDefault((parcelRequire("6vQXa")));
parcelRequire("4XbyP");
function $1dcc0040a0c74b65$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $1dcc0040a0c74b65$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $1dcc0040a0c74b65$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $1dcc0040a0c74b65$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $1dcc0040a0c74b65$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $1dcc0040a0c74b65$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $1dcc0040a0c74b65$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $1dcc0040a0c74b65$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $1dcc0040a0c74b65$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $1dcc0040a0c74b65$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $1dcc0040a0c74b65$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $1dcc0040a0c74b65$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $1dcc0040a0c74b65$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $1dcc0040a0c74b65$var$_database = /*#__PURE__*/ new WeakMap();
class $1dcc0040a0c74b65$var$FeedDatabase extends $1dcc0040a0c74b65$var$_database2.default {
    instance() {
        return $1dcc0040a0c74b65$var$_classPrivateFieldGet(this, $1dcc0040a0c74b65$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $1dcc0040a0c74b65$var$_classPrivateFieldGet(this, $1dcc0040a0c74b65$var$_database).get(key).map((e)=>e.payload.value);
    }
    add(value) {
        return $1dcc0040a0c74b65$var$_classPrivateFieldGet(this, $1dcc0040a0c74b65$var$_database).add(value);
    }
    // TODO Should we implement this?
    getAll() {
        return $1dcc0040a0c74b65$var$_classPrivateFieldGet(this, $1dcc0040a0c74b65$var$_database).all;
    }
    // TODO Check if put creates a new entry for pre-exisiting ID
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $1dcc0040a0c74b65$var$_classPrivateFieldGet(this, $1dcc0040a0c74b65$var$_database).put(key, value);
    }
    constructor(database){
        super(database);
        $1dcc0040a0c74b65$var$_classPrivateFieldInitSpec(this, $1dcc0040a0c74b65$var$_database, {
            writable: true,
            value: void 0
        });
        $1dcc0040a0c74b65$var$_classPrivateFieldSet(this, $1dcc0040a0c74b65$var$_database, database);
    }
}
// eslint-disable-next-line import/prefer-default-export
const $1dcc0040a0c74b65$var$getFeed = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    throw Error("Not implemented");
//   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new FeedDatabase(database);
};
module.exports.getFeed = $1dcc0040a0c74b65$var$getFeed;

});

parcelRequire.register("4vl2o", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getKeyValue = void 0;

var $347a60494fd73a84$var$_database2 = $347a60494fd73a84$var$_interopRequireDefault((parcelRequire("6vQXa")));

var $4XbyP = parcelRequire("4XbyP");
function $347a60494fd73a84$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $347a60494fd73a84$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $347a60494fd73a84$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $347a60494fd73a84$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $347a60494fd73a84$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $347a60494fd73a84$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $347a60494fd73a84$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $347a60494fd73a84$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $347a60494fd73a84$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $347a60494fd73a84$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $347a60494fd73a84$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $347a60494fd73a84$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $347a60494fd73a84$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $347a60494fd73a84$var$_database = /*#__PURE__*/ new WeakMap();
class $347a60494fd73a84$var$KVDatabase extends $347a60494fd73a84$var$_database2.default {
    instance() {
        return $347a60494fd73a84$var$_classPrivateFieldGet(this, $347a60494fd73a84$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $347a60494fd73a84$var$_classPrivateFieldGet(this, $347a60494fd73a84$var$_database).get(key);
    }
    getAll() {
        return $347a60494fd73a84$var$_classPrivateFieldGet(this, $347a60494fd73a84$var$_database).all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await $347a60494fd73a84$var$_classPrivateFieldGet(this, $347a60494fd73a84$var$_database).put(key, value);
    }
    async delete(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await $347a60494fd73a84$var$_classPrivateFieldGet(this, $347a60494fd73a84$var$_database).delete(key);
    }
    constructor(database){
        super(database);
        $347a60494fd73a84$var$_classPrivateFieldInitSpec(this, $347a60494fd73a84$var$_database, {
            writable: true,
            value: void 0
        });
        $347a60494fd73a84$var$_classPrivateFieldSet(this, $347a60494fd73a84$var$_database, database);
    }
}
// eslint-disable-next-line import/prefer-default-export
const $347a60494fd73a84$var$getKeyValue = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $4XbyP.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.keyvalue(address);
    await database.load();
    return new $347a60494fd73a84$var$KVDatabase(database);
};
module.exports.getKeyValue = $347a60494fd73a84$var$getKeyValue;

});

var $4d5cc121bd06335c$exports = {};
"use strict";
Object.defineProperty($4d5cc121bd06335c$exports, "__esModule", {
    value: true
});
$4d5cc121bd06335c$exports.getCounter = $4d5cc121bd06335c$var$getCounter;
$4d5cc121bd06335c$exports.getDocStore = $4d5cc121bd06335c$var$getDocStore;
$4d5cc121bd06335c$exports.getEventLog = $4d5cc121bd06335c$var$getEventLog;
$4d5cc121bd06335c$exports.getFeed = $4d5cc121bd06335c$var$getFeed;
$4d5cc121bd06335c$exports.getKeyValue = $4d5cc121bd06335c$var$getKeyValue;
$4d5cc121bd06335c$exports.timestamp = $4d5cc121bd06335c$var$timestamp;
var $b5a5c19f3db4a18c$exports = {};
"use strict";
Object.defineProperty($b5a5c19f3db4a18c$exports, "__esModule", {
    value: true
});
$b5a5c19f3db4a18c$exports.KeyValue = $b5a5c19f3db4a18c$exports.Feed = $b5a5c19f3db4a18c$exports.EventLog = $b5a5c19f3db4a18c$exports.DocStore = $b5a5c19f3db4a18c$exports.Counter = void 0;

var $b5a5c19f3db4a18c$var$Counter = $b5a5c19f3db4a18c$var$_interopRequireWildcard((parcelRequire("hd48j")));
$b5a5c19f3db4a18c$exports.Counter = $b5a5c19f3db4a18c$var$Counter;

var $b5a5c19f3db4a18c$var$DocStore = $b5a5c19f3db4a18c$var$_interopRequireWildcard((parcelRequire("lgXlX")));
$b5a5c19f3db4a18c$exports.DocStore = $b5a5c19f3db4a18c$var$DocStore;

var $b5a5c19f3db4a18c$var$EventLog = $b5a5c19f3db4a18c$var$_interopRequireWildcard((parcelRequire("gnJps")));
$b5a5c19f3db4a18c$exports.EventLog = $b5a5c19f3db4a18c$var$EventLog;

var $b5a5c19f3db4a18c$var$Feed = $b5a5c19f3db4a18c$var$_interopRequireWildcard((parcelRequire("2yBHu")));
$b5a5c19f3db4a18c$exports.Feed = $b5a5c19f3db4a18c$var$Feed;

var $b5a5c19f3db4a18c$var$KeyValue = $b5a5c19f3db4a18c$var$_interopRequireWildcard((parcelRequire("4vl2o")));
$b5a5c19f3db4a18c$exports.KeyValue = $b5a5c19f3db4a18c$var$KeyValue;
function $b5a5c19f3db4a18c$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($b5a5c19f3db4a18c$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $b5a5c19f3db4a18c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $b5a5c19f3db4a18c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}


const $4d5cc121bd06335c$var$peerDBServer = "https://pinning.three0dev.com/";
const $4d5cc121bd06335c$var$cacheMap = new Map();
async function $4d5cc121bd06335c$var$getDB(address, type) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let db = $4d5cc121bd06335c$var$cacheMap.get(address);
    if (db) return db;
    $4d5cc121bd06335c$var$cacheMap.set(address, db);
    try {
        switch(type){
            case "counter":
                db = await $b5a5c19f3db4a18c$exports.Counter.getCounter(address);
                break;
            case "docstore":
                db = await $b5a5c19f3db4a18c$exports.DocStore.getDocStore(address, options);
                break;
            case "eventlog":
                db = await $b5a5c19f3db4a18c$exports.EventLog.getEventLog(address);
                break;
            case "feed":
                db = await $b5a5c19f3db4a18c$exports.Feed.getFeed(address);
                break;
            case "keyvalue":
                db = await $b5a5c19f3db4a18c$exports.KeyValue.getKeyValue(address);
                break;
            default:
                throw new Error(`Unknown database type: ${type}`);
        }
        $4d5cc121bd06335c$var$cacheMap.set(address, db);
    // await fetch(`${peerDBServer}pin/?address=${address}`, {
    // 	method: 'POST',
    // 	mode: 'cors',
    // 	cache: 'no-cache',
    // 	credentials: 'same-origin', // include, *same-origin, omit
    // 	redirect: 'follow',
    // 	referrerPolicy: 'no-referrer',
    // })
    } catch (e) {
        console.error(e);
    }
    return db;
}
async function $4d5cc121bd06335c$var$getCounter(address) {
    return $4d5cc121bd06335c$var$getDB(address, "counter");
}
async function $4d5cc121bd06335c$var$getDocStore(address) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        indexBy: "_id"
    };
    return $4d5cc121bd06335c$var$getDB(address, "docstore", options);
}
async function $4d5cc121bd06335c$var$getEventLog(address) {
    return $4d5cc121bd06335c$var$getDB(address, "eventlog");
}
async function $4d5cc121bd06335c$var$getFeed(address) {
    return $4d5cc121bd06335c$var$getDB(address, "feed");
}
async function $4d5cc121bd06335c$var$getKeyValue(address) {
    return $4d5cc121bd06335c$var$getDB(address, "keyvalue");
}
function $4d5cc121bd06335c$var$timestamp() {
    return Date.now();
}


export {$4d5cc121bd06335c$exports as default};
//# sourceMappingURL=index.js.map
