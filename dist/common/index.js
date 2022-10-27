var $dSCMW$nearapijs = require("near-api-js");
var $dSCMW$orbitdb = require("orbit-db");
var $dSCMW$ipfscore = require("ipfs-core");
var $dSCMW$uuid = require("uuid");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "init", function () { return $020eab0e4dd81a46$export$2cd8252107eb640b; }, function (v) { return $020eab0e4dd81a46$export$2cd8252107eb640b = v; });
$parcel$export(module.exports, "Auth", function () { return $020eab0e4dd81a46$export$334c29725a78c21d; }, function (v) { return $020eab0e4dd81a46$export$334c29725a78c21d = v; });
$parcel$export(module.exports, "Database", function () { return $020eab0e4dd81a46$export$6feb5ea51a7b0b47; }, function (v) { return $020eab0e4dd81a46$export$6feb5ea51a7b0b47 = v; });
var $d3ed99f02d86c501$exports = {};

$parcel$export($d3ed99f02d86c501$exports, "UserActionType", function () { return $d3ed99f02d86c501$export$4d85d82e4ea34f7c; }, function (v) { return $d3ed99f02d86c501$export$4d85d82e4ea34f7c = v; });
$parcel$export($d3ed99f02d86c501$exports, "getNearConfig", function () { return $d3ed99f02d86c501$export$31eac9c8bd069ff7; }, function (v) { return $d3ed99f02d86c501$export$31eac9c8bd069ff7 = v; });
$parcel$export($d3ed99f02d86c501$exports, "init", function () { return $d3ed99f02d86c501$export$2cd8252107eb640b; }, function (v) { return $d3ed99f02d86c501$export$2cd8252107eb640b = v; });

function $44dda2c9f6001bf5$export$e72398d75d0174d8() {
    switch(globalThis.projectConfig.chainType){
        case "NEAR_TESTNET":
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $44dda2c9f6001bf5$export$e2de15bbd9edf9c6() {
    // eslint-disable-next-line no-restricted-globals
    return new URLSearchParams(location.search);
}


var $d3ed99f02d86c501$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $d3ed99f02d86c501$export$4d85d82e4ea34f7c;
(function(UserActionType) {
    UserActionType["LOGIN"] = "LOGIN";
    UserActionType["LOGOUT"] = "LOGOUT";
})($d3ed99f02d86c501$export$4d85d82e4ea34f7c || ($d3ed99f02d86c501$export$4d85d82e4ea34f7c = {}));
function $d3ed99f02d86c501$export$31eac9c8bd069ff7() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $44dda2c9f6001bf5$export$e72398d75d0174d8)();
    switch(chainType){
        case "mainnet":
            return {
                networkId: "mainnet",
                nodeUrl: "https://rpc.mainnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.near.org",
                helperUrl: "https://helper.mainnet.near.org",
                explorerUrl: "https://explorer.mainnet.near.org"
            };
        case "production":
        case "development":
        case "testnet":
            return {
                networkId: "testnet",
                nodeUrl: "https://rpc.testnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.testnet.near.org",
                helperUrl: "https://helper.testnet.near.org",
                explorerUrl: "https://explorer.testnet.near.org"
            };
        case "betanet":
            return {
                networkId: "betanet",
                nodeUrl: "https://rpc.betanet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.betanet.near.org",
                helperUrl: "https://helper.betanet.near.org",
                explorerUrl: "https://explorer.betanet.near.org"
            };
        case "local":
            return {
                networkId: "local",
                nodeUrl: "http://localhost:3030",
                keyPath: `${"/Users/sreegrandhe"}/.near/validator_key.json`,
                walletUrl: "http://localhost:4000/wallet",
                contractName: CONTRACT_NAME
            };
        case "test":
        case "ci":
            return {
                networkId: "shared-test",
                nodeUrl: "https://rpc.ci-testnet.near.org",
                contractName: CONTRACT_NAME,
                masterAccount: "test.near"
            };
        case "ci-betanet":
            return {
                networkId: "shared-test-staging",
                nodeUrl: "https://rpc.ci-betanet.near.org",
                contractName: CONTRACT_NAME,
                masterAccount: "test.near"
            };
        default:
            throw Error(`Unconfigured environment '${chainType}'. Can be configured in src/config.js.`);
    }
}
function $d3ed99f02d86c501$export$2cd8252107eb640b() {
    return $d3ed99f02d86c501$var$__awaiter(this, void 0, void 0, function*() {
        const nearConfig = $d3ed99f02d86c501$export$31eac9c8bd069ff7();
        // Initialize connection to the NEAR testnet
        const near = yield (0, $dSCMW$nearapijs.connect)(Object.assign(Object.assign({
            deps: {
                keyStore: new (0, $dSCMW$nearapijs.keyStores).BrowserLocalStorageKeyStore()
            }
        }, nearConfig), {
            headers: {}
        }));
        // Initializing Wallet based Account. It can work with NEAR testnet wallet that
        // is hosted at https://wallet.testnet.near.org
        globalThis.walletConnection = new (0, $dSCMW$nearapijs.WalletConnection)(near, null);
        // Initializing our contract APIs by contract name and configuration
        globalThis.contract = new (0, $dSCMW$nearapijs.Contract)(globalThis.walletConnection.account(), nearConfig.contractName, {
            // View methods are read only. They don't modify the state, but usually return some value.
            viewMethods: [
                "get_user",
                "valid_database"
            ],
            // Change methods can modify the state. But you don't receive the returned value when called.
            changeMethods: [
                "user_action"
            ]
        });
    });
}




var $c4225dfc37430fda$exports = {};

$parcel$export($c4225dfc37430fda$exports, "default", function () { return $c4225dfc37430fda$export$2e2bcd8739ae039; }, function (v) { return $c4225dfc37430fda$export$2e2bcd8739ae039 = v; });

var $46137cfcfeb0552d$exports = {};

$parcel$export($46137cfcfeb0552d$exports, "default", function () { return $46137cfcfeb0552d$export$2e2bcd8739ae039; }, function (v) { return $46137cfcfeb0552d$export$2e2bcd8739ae039 = v; });

var $46137cfcfeb0552d$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let $46137cfcfeb0552d$var$ipfs;
const $46137cfcfeb0552d$var$IPFS_CONFIG = {
    start: true,
    EXPERIMENTAL: {
        ipnsPubsub: true
    },
    preload: {
        enabled: false
    },
    config: {
        Addresses: {
            Swarm: [
                "/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/", 
            ]
        }
    }
};
const $46137cfcfeb0552d$var$initIPFS = ()=>$46137cfcfeb0552d$var$__awaiter(void 0, void 0, void 0, function*() {
        $46137cfcfeb0552d$var$ipfs = $46137cfcfeb0552d$var$ipfs || (yield $dSCMW$ipfscore.create($46137cfcfeb0552d$var$IPFS_CONFIG));
        return $46137cfcfeb0552d$var$ipfs;
    });
var $46137cfcfeb0552d$export$2e2bcd8739ae039 = $46137cfcfeb0552d$var$initIPFS;


var $36a1a38c5f443c85$exports = {};

$parcel$export($36a1a38c5f443c85$exports, "logout", function () { return $36a1a38c5f443c85$export$a0973bcfe11b05c9; }, function (v) { return $36a1a38c5f443c85$export$a0973bcfe11b05c9 = v; });
$parcel$export($36a1a38c5f443c85$exports, "login", function () { return $36a1a38c5f443c85$export$596d806903d1f59e; }, function (v) { return $36a1a38c5f443c85$export$596d806903d1f59e = v; });

var $36a1a38c5f443c85$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function $36a1a38c5f443c85$export$a0973bcfe11b05c9() {
    return $36a1a38c5f443c85$var$__awaiter(this, void 0, void 0, function*() {
        try {
            yield globalThis.contract.user_action({
                action: (0, $d3ed99f02d86c501$exports.UserActionType).LOGOUT
            });
            globalThis.walletConnection.signOut();
        } catch (e) {
            console.error(e);
            throw e;
        }
    });
}
function $36a1a38c5f443c85$export$596d806903d1f59e(appName = "My Three0 App", successUrL = window.location.href, failureUrL = window.location.href) {
    return $36a1a38c5f443c85$var$__awaiter(this, void 0, void 0, function*() {
        globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
    });
}


function $268f5174a8123bd7$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $268f5174a8123bd7$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}




var $c4225dfc37430fda$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Start OrbitDB
const $c4225dfc37430fda$var$initOrbitDB = ()=>$c4225dfc37430fda$var$__awaiter(void 0, void 0, void 0, function*() {
        if (globalThis.orbitdb) return;
        const ipfs = yield (0, $46137cfcfeb0552d$exports.default)();
        const loggedIn = (0, $268f5174a8123bd7$export$256a5a3564694cfc)();
        if (loggedIn) {
            if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
            // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
            // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
            globalThis.orbitdb = yield (0, ($parcel$interopDefault($dSCMW$orbitdb))).createInstance(ipfs);
        } else globalThis.orbitdb = yield (0, ($parcel$interopDefault($dSCMW$orbitdb))).createInstance(ipfs);
    });
var $c4225dfc37430fda$export$2e2bcd8739ae039 = $c4225dfc37430fda$var$initOrbitDB;


var $6cad23d4edb5a464$exports = {};

$parcel$export($6cad23d4edb5a464$exports, "default", function () { return $6cad23d4edb5a464$export$2e2bcd8739ae039; }, function (v) { return $6cad23d4edb5a464$export$2e2bcd8739ae039 = v; });


var $6cad23d4edb5a464$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function $6cad23d4edb5a464$export$2e2bcd8739ae039() {
    return $6cad23d4edb5a464$var$__awaiter(this, void 0, void 0, function*() {
        if (!(0, $268f5174a8123bd7$export$256a5a3564694cfc)()) return;
        let isLoggedIn = true;
        try {
            const user = yield globalThis.contract.get_user({
                account_id: (0, $268f5174a8123bd7$export$c1e0336bde96e2dc)()
            });
            isLoggedIn = user.is_online;
        } catch (e) {
            console.error(e);
            isLoggedIn = false;
        }
        if (!isLoggedIn) yield globalThis.contract.user_action({
            action: (0, $d3ed99f02d86c501$exports.UserActionType).LOGIN
        });
    });
}



var $c519e5c2d701af31$exports = {};

$parcel$export($c519e5c2d701af31$exports, "Counter", function () { return $c519e5c2d701af31$export$1b74141c5fe63a28; }, function (v) { return $c519e5c2d701af31$export$1b74141c5fe63a28 = v; });
$parcel$export($c519e5c2d701af31$exports, "DocStore", function () { return $c519e5c2d701af31$export$ae6e3da9bde8af08; }, function (v) { return $c519e5c2d701af31$export$ae6e3da9bde8af08 = v; });
$parcel$export($c519e5c2d701af31$exports, "EventLog", function () { return $c519e5c2d701af31$export$f8203d08df5cd081; }, function (v) { return $c519e5c2d701af31$export$f8203d08df5cd081 = v; });
$parcel$export($c519e5c2d701af31$exports, "Feed", function () { return $c519e5c2d701af31$export$833919a382305440; }, function (v) { return $c519e5c2d701af31$export$833919a382305440 = v; });
$parcel$export($c519e5c2d701af31$exports, "KeyValue", function () { return $c519e5c2d701af31$export$12b3cc2522c3bba5; }, function (v) { return $c519e5c2d701af31$export$12b3cc2522c3bba5 = v; });
$parcel$export($c519e5c2d701af31$exports, "timestamp", function () { return $c519e5c2d701af31$export$fc00ee57782020aa; }, function (v) { return $c519e5c2d701af31$export$fc00ee57782020aa = v; });
var $088689cdba66f326$exports = {};

$parcel$export($088689cdba66f326$exports, "CounterDatabase", function () { return $088689cdba66f326$export$b62cdc4dda4dc10d; }, function (v) { return $088689cdba66f326$export$b62cdc4dda4dc10d = v; });
$parcel$export($088689cdba66f326$exports, "default", function () { return $088689cdba66f326$export$2e2bcd8739ae039; }, function (v) { return $088689cdba66f326$export$2e2bcd8739ae039 = v; });
var $1133891dffb598a6$exports = {};

$parcel$export($1133891dffb598a6$exports, "isValidDatabase", function () { return $1133891dffb598a6$export$d8658f5af792a7a4; }, function (v) { return $1133891dffb598a6$export$d8658f5af792a7a4 = v; });
$parcel$export($1133891dffb598a6$exports, "isValidKey", function () { return $1133891dffb598a6$export$47865c7da002be09; }, function (v) { return $1133891dffb598a6$export$47865c7da002be09 = v; });
$parcel$export($1133891dffb598a6$exports, "isValidValueObject", function () { return $1133891dffb598a6$export$fc456c96b38a4d8; }, function (v) { return $1133891dffb598a6$export$fc456c96b38a4d8 = v; });

var $1133891dffb598a6$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $1133891dffb598a6$export$d8658f5af792a7a4 = (address)=>$1133891dffb598a6$var$__awaiter(void 0, void 0, void 0, function*() {
        if (!(0, ($parcel$interopDefault($dSCMW$orbitdb))).isValidAddress(address)) return false;
        const isProjectDatabase = yield globalThis.contract.valid_database({
            address: address
        });
        return isProjectDatabase;
    });
function $1133891dffb598a6$export$47865c7da002be09(key) {
    return !!key;
}
function $1133891dffb598a6$export$fc456c96b38a4d8(value) {
    return !!value;
}


class $1c05c1fe683ce4de$export$2e2bcd8739ae039 {
    onChange(callbackfn) {
        this.database.events.on("replicated", ()=>callbackfn());
    }
    constructor(database){
        this.database = database;
    }
}


var $088689cdba66f326$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $088689cdba66f326$export$b62cdc4dda4dc10d extends (0, $1c05c1fe683ce4de$export$2e2bcd8739ae039) {
    get() {
        return this.database.value;
    }
    inc(amt = 1) {
        return $088689cdba66f326$var$__awaiter(this, void 0, void 0, function*() {
            if (amt >= 1) throw Error("Valid amount is required");
            const incrementPromises = [];
            for(let i = 0; i < amt; i += 1)yield this.database.inc();
        });
    }
}
const $088689cdba66f326$var$getCounter = (address, orbitdb = globalThis.orbitdb)=>$088689cdba66f326$var$__awaiter(void 0, void 0, void 0, function*() {
        if (!orbitdb) throw Error("OrbitDB is not initialized");
        const isValid = yield (0, $1133891dffb598a6$exports.isValidDatabase)(address);
        if (!isValid) throw Error("Invalid database address");
        const database = yield orbitdb.counter(address);
        yield database.load();
        return new $088689cdba66f326$export$b62cdc4dda4dc10d(database);
    });
var $088689cdba66f326$export$2e2bcd8739ae039 = $088689cdba66f326$var$getCounter;


var $ecfd62e1e5921b75$exports = {};

$parcel$export($ecfd62e1e5921b75$exports, "DocumentDatabase", function () { return $ecfd62e1e5921b75$export$cc7289d1409c61ee; }, function (v) { return $ecfd62e1e5921b75$export$cc7289d1409c61ee = v; });
$parcel$export($ecfd62e1e5921b75$exports, "default", function () { return $ecfd62e1e5921b75$export$2e2bcd8739ae039; }, function (v) { return $ecfd62e1e5921b75$export$2e2bcd8739ae039 = v; });



/**
 * @module Docstore
 */ var $ecfd62e1e5921b75$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $ecfd62e1e5921b75$export$cc7289d1409c61ee extends (0, $1c05c1fe683ce4de$export$2e2bcd8739ae039) {
    get(key) {
        return key ? this.database.get(key)[0] : this.where((e)=>e !== null);
    }
    where(callbackfn) {
        return this.database.query(callbackfn);
    }
    set(key, value) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $1133891dffb598a6$exports.isValidKey)(key)) throw Error("Key is required");
            if (!(0, $1133891dffb598a6$exports.isValidValueObject)(value)) throw Error("Value is required");
            yield this.database.put(Object.assign({
                _id: key
            }, value));
        });
    }
    add(value) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            const id = (0, $dSCMW$uuid.v4)();
            if (!(0, $1133891dffb598a6$exports.isValidValueObject)(value)) throw Error("Value is required");
            yield this.set(id, value);
            return id;
        });
    }
    delete(key) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $1133891dffb598a6$exports.isValidKey)(key)) throw Error("Key is required");
            yield this.database.del(key);
        });
    }
    update(key, value) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $1133891dffb598a6$exports.isValidKey)(key)) throw Error("Key is required");
            if (!(0, $1133891dffb598a6$exports.isValidValueObject)(value)) throw Error("Value is required");
            const doc = this.get(key);
            yield this.set(key, Object.assign(Object.assign({}, doc), value));
        });
    }
}
const $ecfd62e1e5921b75$var$getDocStore = (address, indexBy, orbitdb = globalThis.orbitdb)=>$ecfd62e1e5921b75$var$__awaiter(void 0, void 0, void 0, function*() {
        if (!orbitdb) throw Error("OrbitDB is not initialized");
        const isValid = yield (0, $1133891dffb598a6$exports.isValidDatabase)(address);
        if (!isValid) throw Error("Invalid database address");
        const database = yield orbitdb.docs(address, indexBy);
        yield database.load();
        return new $ecfd62e1e5921b75$export$cc7289d1409c61ee(database);
    });
var $ecfd62e1e5921b75$export$2e2bcd8739ae039 = $ecfd62e1e5921b75$var$getDocStore;


var $610eccb30f15c968$exports = {};

$parcel$export($610eccb30f15c968$exports, "EventLogDatabase", function () { return $610eccb30f15c968$export$a4a6104bef1ea4da; }, function (v) { return $610eccb30f15c968$export$a4a6104bef1ea4da = v; });
$parcel$export($610eccb30f15c968$exports, "default", function () { return $610eccb30f15c968$export$2e2bcd8739ae039; }, function (v) { return $610eccb30f15c968$export$2e2bcd8739ae039 = v; });


var $610eccb30f15c968$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $610eccb30f15c968$export$a4a6104bef1ea4da extends (0, $1c05c1fe683ce4de$export$2e2bcd8739ae039) {
    instance() {
        return this.database;
    }
    get(key) {
        if (!key) throw Error("Key is required");
        return this.database.get(key);
    }
    // TODO Should we implement this?
    getAll() {
        return this.database.all;
    }
    set(value) {
        return $610eccb30f15c968$var$__awaiter(this, void 0, void 0, function*() {
            return this.database.add(value);
        });
    }
}
const $610eccb30f15c968$var$getEventLog = (address, orbitdb = globalThis.orbitdb)=>$610eccb30f15c968$var$__awaiter(void 0, void 0, void 0, function*() {
        throw Error("Not implemented");
    });
var $610eccb30f15c968$export$2e2bcd8739ae039 = $610eccb30f15c968$var$getEventLog;


var $9f42f73f36b591e2$exports = {};

$parcel$export($9f42f73f36b591e2$exports, "FeedDatabase", function () { return $9f42f73f36b591e2$export$c4331506dfaaa28a; }, function (v) { return $9f42f73f36b591e2$export$c4331506dfaaa28a = v; });
$parcel$export($9f42f73f36b591e2$exports, "default", function () { return $9f42f73f36b591e2$export$2e2bcd8739ae039; }, function (v) { return $9f42f73f36b591e2$export$2e2bcd8739ae039 = v; });


var $9f42f73f36b591e2$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $9f42f73f36b591e2$export$c4331506dfaaa28a extends (0, $1c05c1fe683ce4de$export$2e2bcd8739ae039) {
    instance() {
        return this.database;
    }
    get(key) {
        if (!key) throw Error("Key is required");
        return this.database.get(key).payload.value;
    }
    add(value) {
        return this.database.add(value);
    }
    // TODO Should we implement this?
    getAll() {
        return this.database.all;
    }
    set(value) {
        return $9f42f73f36b591e2$var$__awaiter(this, void 0, void 0, function*() {
            return this.database.add(value);
        });
    }
}
const $9f42f73f36b591e2$var$getFeed = (address, orbitdb = globalThis.orbitdb)=>$9f42f73f36b591e2$var$__awaiter(void 0, void 0, void 0, function*() {
        throw Error("Not implemented");
    });
var $9f42f73f36b591e2$export$2e2bcd8739ae039 = $9f42f73f36b591e2$var$getFeed;


var $fd768f09317d5eed$exports = {};

$parcel$export($fd768f09317d5eed$exports, "KVDatabase", function () { return $fd768f09317d5eed$export$f0160e6bce89ab9; }, function (v) { return $fd768f09317d5eed$export$f0160e6bce89ab9 = v; });
$parcel$export($fd768f09317d5eed$exports, "default", function () { return $fd768f09317d5eed$export$2e2bcd8739ae039; }, function (v) { return $fd768f09317d5eed$export$2e2bcd8739ae039 = v; });


var $fd768f09317d5eed$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class $fd768f09317d5eed$export$f0160e6bce89ab9 extends (0, $1c05c1fe683ce4de$export$2e2bcd8739ae039) {
    instance() {
        return this.database;
    }
    get(key) {
        if (!key) throw Error("Key is required");
        return this.database.get(key);
    }
    getAll() {
        return this.database.all;
    }
    set(key, value) {
        return $fd768f09317d5eed$var$__awaiter(this, void 0, void 0, function*() {
            if (!key) throw Error("Key is required");
            yield this.database.put(key, value);
        });
    }
    delete(key) {
        return $fd768f09317d5eed$var$__awaiter(this, void 0, void 0, function*() {
            if (!key) throw Error("Key is required");
            yield this.database.del(key);
        });
    }
}
const $fd768f09317d5eed$var$getKeyValue = (address, orbitdb = globalThis.orbitdb)=>$fd768f09317d5eed$var$__awaiter(void 0, void 0, void 0, function*() {
        if (!orbitdb) throw Error("OrbitDB is not initialized");
        const isValid = yield (0, $1133891dffb598a6$exports.isValidDatabase)(address);
        if (!isValid) throw Error("Invalid database address");
        const database = yield orbitdb.keyvalue(address);
        yield database.load();
        return new $fd768f09317d5eed$export$f0160e6bce89ab9(database);
    });
var $fd768f09317d5eed$export$2e2bcd8739ae039 = $fd768f09317d5eed$var$getKeyValue;




var $c519e5c2d701af31$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $c519e5c2d701af31$var$cacheMap = new Map();
var $c519e5c2d701af31$var$DatabaseType;
(function(DatabaseType) {
    DatabaseType["Counter"] = "counter";
    DatabaseType["DocStore"] = "docstore";
    DatabaseType["EventLog"] = "eventlog";
    DatabaseType["Feed"] = "feed";
    DatabaseType["KeyValue"] = "keyvalue";
})($c519e5c2d701af31$var$DatabaseType || ($c519e5c2d701af31$var$DatabaseType = {}));
function $c519e5c2d701af31$var$getDB(address, type, options = {}) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        let db = null;
        if ($c519e5c2d701af31$var$cacheMap.has(address)) return $c519e5c2d701af31$var$cacheMap.get(address);
        try {
            switch(type){
                case $c519e5c2d701af31$var$DatabaseType.Counter:
                    db = yield (0, $088689cdba66f326$exports.default)(address);
                    break;
                case $c519e5c2d701af31$var$DatabaseType.DocStore:
                    db = yield (0, $ecfd62e1e5921b75$exports.default)(address, options);
                    break;
                case $c519e5c2d701af31$var$DatabaseType.EventLog:
                    db = yield (0, $610eccb30f15c968$exports.default)(address);
                    break;
                case $c519e5c2d701af31$var$DatabaseType.Feed:
                    db = yield (0, $9f42f73f36b591e2$exports.default)(address);
                    break;
                case $c519e5c2d701af31$var$DatabaseType.KeyValue:
                    db = yield (0, $fd768f09317d5eed$exports.default)(address);
                    break;
                default:
                    throw new Error(`Unknown database type: ${type}`);
            }
            $c519e5c2d701af31$var$cacheMap.set(address, db);
        } catch (e) {
            console.error(e);
        }
        if (!db) throw new Error("Database not found");
        return db;
    });
}
function $c519e5c2d701af31$export$1b74141c5fe63a28(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.Counter);
        return db;
    });
}
function $c519e5c2d701af31$export$ae6e3da9bde8af08(address, options = {
    indexBy: "_id"
}) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.DocStore, options);
        return db;
    });
}
function $c519e5c2d701af31$export$f8203d08df5cd081(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.EventLog);
        return db;
    });
}
function $c519e5c2d701af31$export$833919a382305440(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.Feed);
        return db;
    });
}
function $c519e5c2d701af31$export$12b3cc2522c3bba5(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.KeyValue);
        return db;
    });
}
function $c519e5c2d701af31$export$fc00ee57782020aa() {
    return Date.now();
}


var $020eab0e4dd81a46$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $020eab0e4dd81a46$var$BlockchainNetwork;
(function(BlockchainNetwork) {
    BlockchainNetwork["NEAR_TESTNET"] = "NEAR_TESTNET";
})($020eab0e4dd81a46$var$BlockchainNetwork || ($020eab0e4dd81a46$var$BlockchainNetwork = {}));
const $020eab0e4dd81a46$export$2cd8252107eb640b = (projectConfig)=>$020eab0e4dd81a46$var$__awaiter(void 0, void 0, void 0, function*() {
        globalThis.projectConfig = projectConfig;
        switch(projectConfig.chainType){
            case $020eab0e4dd81a46$var$BlockchainNetwork.NEAR_TESTNET:
                yield (0, $d3ed99f02d86c501$exports).init();
                break;
            default:
                throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
        }
        yield (0, $6cad23d4edb5a464$exports.default)();
        yield (0, $c4225dfc37430fda$exports.default)();
    });
const $020eab0e4dd81a46$export$334c29725a78c21d = {
    getAccountId: $268f5174a8123bd7$export$c1e0336bde96e2dc,
    login: $36a1a38c5f443c85$exports.login,
    logout: $36a1a38c5f443c85$exports.logout,
    isLoggedIn: $268f5174a8123bd7$export$256a5a3564694cfc
};
const $020eab0e4dd81a46$export$6feb5ea51a7b0b47 = {
    timestamp: $c519e5c2d701af31$exports.timestamp,
    Counter: $c519e5c2d701af31$exports.Counter,
    KeyValue: $c519e5c2d701af31$exports.KeyValue,
    DocStore: $c519e5c2d701af31$exports.DocStore,
    Feed: $c519e5c2d701af31$exports.Feed,
    EventLog: $c519e5c2d701af31$exports.EventLog
};


//# sourceMappingURL=index.js.map
