var $795Jp$orbitdb = require("orbit-db");
var $795Jp$uuid = require("uuid");

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
parcelRequire.register("jmlG4", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCounter = void 0;

var $ceal2 = parcelRequire("ceal2");

var $e180e32100ae22a5$var$_database2 = $e180e32100ae22a5$var$_interopRequireDefault((parcelRequire("2qPuo")));
function $e180e32100ae22a5$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $e180e32100ae22a5$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $e180e32100ae22a5$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $e180e32100ae22a5$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $e180e32100ae22a5$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $e180e32100ae22a5$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $e180e32100ae22a5$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $e180e32100ae22a5$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $e180e32100ae22a5$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $e180e32100ae22a5$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $e180e32100ae22a5$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $e180e32100ae22a5$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $e180e32100ae22a5$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $e180e32100ae22a5$var$_database = /*#__PURE__*/ new WeakMap();
class $e180e32100ae22a5$var$CounterDatabase extends $e180e32100ae22a5$var$_database2.default {
    constructor(database){
        super(database);
        $e180e32100ae22a5$var$_classPrivateFieldInitSpec(this, $e180e32100ae22a5$var$_database, {
            writable: true,
            value: void 0
        });
        $e180e32100ae22a5$var$_classPrivateFieldSet(this, $e180e32100ae22a5$var$_database, database);
    }
    get() {
        return $e180e32100ae22a5$var$_classPrivateFieldGet(this, $e180e32100ae22a5$var$_database).value;
    }
    async inc() {
        let amt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (!(amt instanceof Number && amt >= 1)) throw Error("Valid amount is required");
        const incrementPromises = [];
        for(let i = 0; i < amt; i += 1)incrementPromises.push($e180e32100ae22a5$var$_classPrivateFieldGet(this, $e180e32100ae22a5$var$_database).inc());
        await Promise.all(incrementPromises);
    }
} // eslint-disable-next-line import/prefer-default-export
const $e180e32100ae22a5$var$getCounter = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $ceal2.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.counter(address);
    await database.load();
    return new $e180e32100ae22a5$var$CounterDatabase(database);
};
module.exports.getCounter = $e180e32100ae22a5$var$getCounter;

});
parcelRequire.register("ceal2", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.isValidDatabase = void 0;
module.exports.isValidKey = $8e6ecfd1045330db$var$isValidKey;
module.exports.isValidValueObject = $8e6ecfd1045330db$var$isValidValueObject;

var $8e6ecfd1045330db$var$_orbitDb = $8e6ecfd1045330db$var$_interopRequireDefault($795Jp$orbitdb);
function $8e6ecfd1045330db$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// import { isValidAddress } from 'orbit-db'
// eslint-disable-next-line import/prefer-default-export
const $8e6ecfd1045330db$var$isValidDatabase = async (address)=>{
    if (!$8e6ecfd1045330db$var$_orbitDb.default.isValidAddress(address)) return false;
    const isProjectDatabase = await globalThis.contract.valid_database({
        address: address
    });
    return isProjectDatabase;
};
module.exports.isValidDatabase = $8e6ecfd1045330db$var$isValidDatabase;
function $8e6ecfd1045330db$var$isValidKey(key) {
    return key && typeof key === "string";
}
function $8e6ecfd1045330db$var$isValidValueObject(value) {
    return value && value instanceof Object;
}

});

parcelRequire.register("2qPuo", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
function $1c55f33027e46a71$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $1c55f33027e46a71$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $1c55f33027e46a71$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $1c55f33027e46a71$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $1c55f33027e46a71$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $1c55f33027e46a71$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $1c55f33027e46a71$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $1c55f33027e46a71$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $1c55f33027e46a71$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $1c55f33027e46a71$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $1c55f33027e46a71$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $1c55f33027e46a71$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $1c55f33027e46a71$var$_database = /*#__PURE__*/ new WeakMap();
class $1c55f33027e46a71$var$Database {
    constructor(database){
        $1c55f33027e46a71$var$_classPrivateFieldInitSpec(this, $1c55f33027e46a71$var$_database, {
            writable: true,
            value: void 0
        });
        $1c55f33027e46a71$var$_classPrivateFieldSet(this, $1c55f33027e46a71$var$_database, database);
    }
    onChange(callbackfn) {
        $1c55f33027e46a71$var$_classPrivateFieldGet(this, $1c55f33027e46a71$var$_database).events.on("replicated", ()=>callbackfn());
    }
}
module.exports.default = $1c55f33027e46a71$var$Database;

});


parcelRequire.register("jTgen", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getDocStore = void 0;


var $e7afbe79a418d2e3$var$_database2 = $e7afbe79a418d2e3$var$_interopRequireDefault((parcelRequire("2qPuo")));

var $ceal2 = parcelRequire("ceal2");
function $e7afbe79a418d2e3$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $e7afbe79a418d2e3$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $e7afbe79a418d2e3$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $e7afbe79a418d2e3$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $e7afbe79a418d2e3$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $e7afbe79a418d2e3$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $e7afbe79a418d2e3$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $e7afbe79a418d2e3$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $e7afbe79a418d2e3$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $e7afbe79a418d2e3$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $e7afbe79a418d2e3$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $e7afbe79a418d2e3$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $e7afbe79a418d2e3$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $e7afbe79a418d2e3$var$_database = /*#__PURE__*/ new WeakMap();
class $e7afbe79a418d2e3$var$DocumentDatabase extends $e7afbe79a418d2e3$var$_database2.default {
    constructor(database){
        super(database);
        $e7afbe79a418d2e3$var$_classPrivateFieldInitSpec(this, $e7afbe79a418d2e3$var$_database, {
            writable: true,
            value: void 0
        });
        $e7afbe79a418d2e3$var$_classPrivateFieldSet(this, $e7afbe79a418d2e3$var$_database, database);
    }
    get() {
        let key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (key) {
            if (!(typeof key === "string")) throw Error("Key is required");
            return $e7afbe79a418d2e3$var$_classPrivateFieldGet(this, $e7afbe79a418d2e3$var$_database).get(key)[0];
        }
        return this.where((e)=>e !== null);
    }
    where(callbackfn) {
        return $e7afbe79a418d2e3$var$_classPrivateFieldGet(this, $e7afbe79a418d2e3$var$_database).query(callbackfn);
    }
    async set(key, value) {
        if (!(0, $ceal2.isValidKey)(key)) throw Error("Key is required");
        if (!(0, $ceal2.isValidValueObject)(value)) throw Error("Value is required");
        await $e7afbe79a418d2e3$var$_classPrivateFieldGet(this, $e7afbe79a418d2e3$var$_database).put({
            _id: key,
            ...value
        });
    }
    async add(value) {
        const id = (0, $795Jp$uuid.v4)();
        if (!(0, $ceal2.isValidValueObject)(value)) throw Error("Value is required");
        await this.set(id, value);
        return id;
    }
    async delete(key) {
        if (!(0, $ceal2.isValidKey)(key)) throw Error("Key is required");
        await $e7afbe79a418d2e3$var$_classPrivateFieldGet(this, $e7afbe79a418d2e3$var$_database).del(key);
    }
    async update(key, value) {
        if (!(0, $ceal2.isValidKey)(key)) throw Error("Key is required");
        if (!(0, $ceal2.isValidValueObject)(value)) throw Error("Value is required");
        const doc = this.get(key);
        await $e7afbe79a418d2e3$var$_classPrivateFieldGet(this, $e7afbe79a418d2e3$var$_database).put(key, {
            ...doc,
            ...value
        });
    }
} // eslint-disable-next-line import/prefer-default-export
const $e7afbe79a418d2e3$var$getDocStore = async function(address, indexBy) {
    let orbitdb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $ceal2.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.docs(address, indexBy);
    await database.load();
    return new $e7afbe79a418d2e3$var$DocumentDatabase(database);
};
module.exports.getDocStore = $e7afbe79a418d2e3$var$getDocStore;

});

parcelRequire.register("dA6Zl", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getEventLog = void 0;

var $9e340ee3d0a2be66$var$_database2 = $9e340ee3d0a2be66$var$_interopRequireDefault((parcelRequire("2qPuo")));
parcelRequire("ceal2");
function $9e340ee3d0a2be66$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $9e340ee3d0a2be66$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $9e340ee3d0a2be66$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $9e340ee3d0a2be66$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $9e340ee3d0a2be66$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $9e340ee3d0a2be66$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $9e340ee3d0a2be66$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $9e340ee3d0a2be66$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $9e340ee3d0a2be66$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $9e340ee3d0a2be66$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $9e340ee3d0a2be66$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $9e340ee3d0a2be66$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $9e340ee3d0a2be66$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $9e340ee3d0a2be66$var$_database = /*#__PURE__*/ new WeakMap();
class $9e340ee3d0a2be66$var$EventLogDatabase extends $9e340ee3d0a2be66$var$_database2.default {
    constructor(database){
        super(database);
        $9e340ee3d0a2be66$var$_classPrivateFieldInitSpec(this, $9e340ee3d0a2be66$var$_database, {
            writable: true,
            value: void 0
        });
        $9e340ee3d0a2be66$var$_classPrivateFieldSet(this, $9e340ee3d0a2be66$var$_database, database);
    }
    instance() {
        return $9e340ee3d0a2be66$var$_classPrivateFieldGet(this, $9e340ee3d0a2be66$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $9e340ee3d0a2be66$var$_classPrivateFieldGet(this, $9e340ee3d0a2be66$var$_database).get(key);
    }
    getAll() {
        return $9e340ee3d0a2be66$var$_classPrivateFieldGet(this, $9e340ee3d0a2be66$var$_database).all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $9e340ee3d0a2be66$var$_classPrivateFieldGet(this, $9e340ee3d0a2be66$var$_database).put(key, value);
    }
} // eslint-disable-next-line import/prefer-default-export
const $9e340ee3d0a2be66$var$getEventLog = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    throw Error("Not implemented"); //   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new EventLogDatabase(database);
};
module.exports.getEventLog = $9e340ee3d0a2be66$var$getEventLog;

});

parcelRequire.register("hyeFL", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getFeed = void 0;

var $cc70fe50062add5e$var$_database2 = $cc70fe50062add5e$var$_interopRequireDefault((parcelRequire("2qPuo")));
parcelRequire("ceal2");
function $cc70fe50062add5e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $cc70fe50062add5e$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $cc70fe50062add5e$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $cc70fe50062add5e$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $cc70fe50062add5e$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $cc70fe50062add5e$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $cc70fe50062add5e$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $cc70fe50062add5e$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $cc70fe50062add5e$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $cc70fe50062add5e$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $cc70fe50062add5e$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $cc70fe50062add5e$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $cc70fe50062add5e$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $cc70fe50062add5e$var$_database = /*#__PURE__*/ new WeakMap();
class $cc70fe50062add5e$var$FeedDatabase extends $cc70fe50062add5e$var$_database2.default {
    constructor(database){
        super(database);
        $cc70fe50062add5e$var$_classPrivateFieldInitSpec(this, $cc70fe50062add5e$var$_database, {
            writable: true,
            value: void 0
        });
        $cc70fe50062add5e$var$_classPrivateFieldSet(this, $cc70fe50062add5e$var$_database, database);
    }
    instance() {
        return $cc70fe50062add5e$var$_classPrivateFieldGet(this, $cc70fe50062add5e$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $cc70fe50062add5e$var$_classPrivateFieldGet(this, $cc70fe50062add5e$var$_database).get(key).map((e)=>e.payload.value);
    }
    add(value) {
        return $cc70fe50062add5e$var$_classPrivateFieldGet(this, $cc70fe50062add5e$var$_database).add(value);
    }
    getAll() {
        return $cc70fe50062add5e$var$_classPrivateFieldGet(this, $cc70fe50062add5e$var$_database).all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $cc70fe50062add5e$var$_classPrivateFieldGet(this, $cc70fe50062add5e$var$_database).put(key, value);
    }
} // eslint-disable-next-line import/prefer-default-export
const $cc70fe50062add5e$var$getFeed = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    throw Error("Not implemented"); //   if (!orbitdb) throw Error('OrbitDB is not initialized');
//   const isValid = await isValidDatabase(address);
//   if (!isValid) throw Error('Invalid database address');
//   const database = await orbitdb.log(address);
//   return new FeedDatabase(database);
};
module.exports.getFeed = $cc70fe50062add5e$var$getFeed;

});

parcelRequire.register("9HXIR", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getKeyValue = void 0;

var $711674e22308e687$var$_database2 = $711674e22308e687$var$_interopRequireDefault((parcelRequire("2qPuo")));

var $ceal2 = parcelRequire("ceal2");
function $711674e22308e687$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $711674e22308e687$var$_classPrivateFieldInitSpec(obj, privateMap, value) {
    $711674e22308e687$var$_checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function $711674e22308e687$var$_checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function $711674e22308e687$var$_classPrivateFieldGet(receiver, privateMap) {
    var descriptor = $711674e22308e687$var$_classExtractFieldDescriptor(receiver, privateMap, "get");
    return $711674e22308e687$var$_classApplyDescriptorGet(receiver, descriptor);
}
function $711674e22308e687$var$_classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function $711674e22308e687$var$_classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = $711674e22308e687$var$_classExtractFieldDescriptor(receiver, privateMap, "set");
    $711674e22308e687$var$_classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function $711674e22308e687$var$_classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function $711674e22308e687$var$_classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
var $711674e22308e687$var$_database = /*#__PURE__*/ new WeakMap();
class $711674e22308e687$var$KVDatabase extends $711674e22308e687$var$_database2.default {
    constructor(database){
        super(database);
        $711674e22308e687$var$_classPrivateFieldInitSpec(this, $711674e22308e687$var$_database, {
            writable: true,
            value: void 0
        });
        $711674e22308e687$var$_classPrivateFieldSet(this, $711674e22308e687$var$_database, database);
    }
    instance() {
        return $711674e22308e687$var$_classPrivateFieldGet(this, $711674e22308e687$var$_database);
    }
    get(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        return $711674e22308e687$var$_classPrivateFieldGet(this, $711674e22308e687$var$_database).get(key);
    }
    getAll() {
        return $711674e22308e687$var$_classPrivateFieldGet(this, $711674e22308e687$var$_database).all;
    }
    async set(key, value) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await $711674e22308e687$var$_classPrivateFieldGet(this, $711674e22308e687$var$_database).put(key, value);
    }
    async delete(key) {
        if (!(key && key instanceof String)) throw Error("Key is required");
        await $711674e22308e687$var$_classPrivateFieldGet(this, $711674e22308e687$var$_database).delete(key);
    }
} // eslint-disable-next-line import/prefer-default-export
const $711674e22308e687$var$getKeyValue = async function(address) {
    let orbitdb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis.orbitdb;
    if (!orbitdb) throw Error("OrbitDB is not initialized");
    const isValid = await (0, $ceal2.isValidDatabase)(address);
    if (!isValid) throw Error("Invalid database address");
    const database = await orbitdb.keyvalue(address);
    await database.load();
    return new $711674e22308e687$var$KVDatabase(database);
};
module.exports.getKeyValue = $711674e22308e687$var$getKeyValue;

});

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getCounter = $0641b9505be276f3$var$getCounter;
module.exports.getDocStore = $0641b9505be276f3$var$getDocStore;
module.exports.getEventLog = $0641b9505be276f3$var$getEventLog;
module.exports.getFeed = $0641b9505be276f3$var$getFeed;
module.exports.getKeyValue = $0641b9505be276f3$var$getKeyValue;
module.exports.timestamp = $0641b9505be276f3$var$timestamp;
var $4c7111c921e8619a$exports = {};
"use strict";
Object.defineProperty($4c7111c921e8619a$exports, "__esModule", {
    value: true
});
$4c7111c921e8619a$exports.KeyValue = $4c7111c921e8619a$exports.Feed = $4c7111c921e8619a$exports.EventLog = $4c7111c921e8619a$exports.DocStore = $4c7111c921e8619a$exports.Counter = void 0;

var $4c7111c921e8619a$var$Counter = $4c7111c921e8619a$var$_interopRequireWildcard((parcelRequire("jmlG4")));
$4c7111c921e8619a$exports.Counter = $4c7111c921e8619a$var$Counter;

var $4c7111c921e8619a$var$DocStore = $4c7111c921e8619a$var$_interopRequireWildcard((parcelRequire("jTgen")));
$4c7111c921e8619a$exports.DocStore = $4c7111c921e8619a$var$DocStore;

var $4c7111c921e8619a$var$EventLog = $4c7111c921e8619a$var$_interopRequireWildcard((parcelRequire("dA6Zl")));
$4c7111c921e8619a$exports.EventLog = $4c7111c921e8619a$var$EventLog;

var $4c7111c921e8619a$var$Feed = $4c7111c921e8619a$var$_interopRequireWildcard((parcelRequire("hyeFL")));
$4c7111c921e8619a$exports.Feed = $4c7111c921e8619a$var$Feed;

var $4c7111c921e8619a$var$KeyValue = $4c7111c921e8619a$var$_interopRequireWildcard((parcelRequire("9HXIR")));
$4c7111c921e8619a$exports.KeyValue = $4c7111c921e8619a$var$KeyValue;
function $4c7111c921e8619a$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($4c7111c921e8619a$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $4c7111c921e8619a$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $4c7111c921e8619a$var$_getRequireWildcardCache(nodeInterop);
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


const $0641b9505be276f3$var$peerDBServer = "https://pinning.three0dev.com/";
const $0641b9505be276f3$var$cacheMap = new Map();
async function $0641b9505be276f3$var$getDB(address, type) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let db = $0641b9505be276f3$var$cacheMap.get(address);
    if (db) return db;
    $0641b9505be276f3$var$cacheMap.set(address, db);
    try {
        switch(type){
            case "counter":
                db = await $4c7111c921e8619a$exports.Counter.getCounter(address);
                break;
            case "docstore":
                db = await $4c7111c921e8619a$exports.DocStore.getDocStore(address, options);
                break;
            case "eventlog":
                db = await $4c7111c921e8619a$exports.EventLog.getEventLog(address);
                break;
            case "feed":
                db = await $4c7111c921e8619a$exports.Feed.getFeed(address);
                break;
            case "keyvalue":
                db = await $4c7111c921e8619a$exports.KeyValue.getKeyValue(address);
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
            // include, *same-origin, omit
            redirect: "follow",
            referrerPolicy: "no-referrer"
        });
    } catch (e) {
        console.error(e);
    }
    return db;
}
async function $0641b9505be276f3$var$getCounter(address) {
    return $0641b9505be276f3$var$getDB(address, "counter");
}
async function $0641b9505be276f3$var$getDocStore(address) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        indexBy: "_id"
    };
    return $0641b9505be276f3$var$getDB(address, "docstore", options);
}
async function $0641b9505be276f3$var$getEventLog(address) {
    return $0641b9505be276f3$var$getDB(address, "eventlog");
}
async function $0641b9505be276f3$var$getFeed(address) {
    return $0641b9505be276f3$var$getDB(address, "feed");
}
async function $0641b9505be276f3$var$getKeyValue(address) {
    return $0641b9505be276f3$var$getDB(address, "keyvalue");
}
function $0641b9505be276f3$var$timestamp() {
    return Date.now();
}


//# sourceMappingURL=index.js.map
