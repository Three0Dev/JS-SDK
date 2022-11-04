import {connect as $7uxh1$connect, keyStores as $7uxh1$keyStores, WalletConnection as $7uxh1$WalletConnection, Contract as $7uxh1$Contract} from "near-api-js";
import $7uxh1$orbitdb from "orbit-db";
import {create as $7uxh1$create} from "ipfs-core";
import {v4 as $7uxh1$v4} from "uuid";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5b16728422d4a076$exports = {};

$parcel$export($5b16728422d4a076$exports, "init", function () { return $5b16728422d4a076$export$2cd8252107eb640b; }, function (v) { return $5b16728422d4a076$export$2cd8252107eb640b = v; });
$parcel$export($5b16728422d4a076$exports, "Auth", function () { return $5b16728422d4a076$export$334c29725a78c21d; }, function (v) { return $5b16728422d4a076$export$334c29725a78c21d = v; });
$parcel$export($5b16728422d4a076$exports, "Database", function () { return $5b16728422d4a076$export$6feb5ea51a7b0b47; }, function (v) { return $5b16728422d4a076$export$6feb5ea51a7b0b47 = v; });
var $bc09daf3d6fd99a8$exports = {};

$parcel$export($bc09daf3d6fd99a8$exports, "UserActionType", function () { return $bc09daf3d6fd99a8$export$4d85d82e4ea34f7c; }, function (v) { return $bc09daf3d6fd99a8$export$4d85d82e4ea34f7c = v; });
$parcel$export($bc09daf3d6fd99a8$exports, "getNearConfig", function () { return $bc09daf3d6fd99a8$export$31eac9c8bd069ff7; }, function (v) { return $bc09daf3d6fd99a8$export$31eac9c8bd069ff7 = v; });
$parcel$export($bc09daf3d6fd99a8$exports, "init", function () { return $bc09daf3d6fd99a8$export$2cd8252107eb640b; }, function (v) { return $bc09daf3d6fd99a8$export$2cd8252107eb640b = v; });

var $8f6052a2b1cc37fc$export$11617b6a00cf0054;
(function(BlockchainNetwork) {
    BlockchainNetwork["NEAR_TESTNET"] = "NEAR_TESTNET";
})($8f6052a2b1cc37fc$export$11617b6a00cf0054 || ($8f6052a2b1cc37fc$export$11617b6a00cf0054 = {}));
function $8f6052a2b1cc37fc$export$e72398d75d0174d8() {
    switch(globalThis.projectConfig.chainType){
        case $8f6052a2b1cc37fc$export$11617b6a00cf0054.NEAR_TESTNET:
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $8f6052a2b1cc37fc$export$e2de15bbd9edf9c6() {
    // eslint-disable-next-line no-restricted-globals
    return new URLSearchParams(location.search);
}


var $bc09daf3d6fd99a8$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
var $bc09daf3d6fd99a8$export$4d85d82e4ea34f7c;
(function(UserActionType) {
    UserActionType["LOGIN"] = "LOGIN";
    UserActionType["LOGOUT"] = "LOGOUT";
})($bc09daf3d6fd99a8$export$4d85d82e4ea34f7c || ($bc09daf3d6fd99a8$export$4d85d82e4ea34f7c = {}));
function $bc09daf3d6fd99a8$export$31eac9c8bd069ff7() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $8f6052a2b1cc37fc$export$e72398d75d0174d8)();
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
function $bc09daf3d6fd99a8$export$2cd8252107eb640b() {
    return $bc09daf3d6fd99a8$var$__awaiter(this, void 0, void 0, function*() {
        const nearConfig = $bc09daf3d6fd99a8$export$31eac9c8bd069ff7();
        // Initialize connection to the NEAR testnet
        const near = yield (0, $7uxh1$connect)(Object.assign(Object.assign({
            keyStore: new (0, $7uxh1$keyStores).BrowserLocalStorageKeyStore()
        }, nearConfig), {
            headers: {}
        }));
        // Initializing Wallet based Account. It can work with NEAR testnet wallet that
        // is hosted at https://wallet.testnet.near.org
        globalThis.walletConnection = new (0, $7uxh1$WalletConnection)(near, null);
        // Initializing our contract APIs by contract name and configuration
        globalThis.contract = new (0, $7uxh1$Contract)(globalThis.walletConnection.account(), nearConfig.contractName, {
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




var $31f2ee8310cb2ee4$exports = {};

$parcel$export($31f2ee8310cb2ee4$exports, "default", function () { return $31f2ee8310cb2ee4$export$2e2bcd8739ae039; }, function (v) { return $31f2ee8310cb2ee4$export$2e2bcd8739ae039 = v; });

var $f1f4ca456620baa2$exports = {};

$parcel$export($f1f4ca456620baa2$exports, "default", function () { return $f1f4ca456620baa2$export$2e2bcd8739ae039; }, function (v) { return $f1f4ca456620baa2$export$2e2bcd8739ae039 = v; });

var $f1f4ca456620baa2$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
let $f1f4ca456620baa2$var$ipfs;
const $f1f4ca456620baa2$var$IPFS_CONFIG = {
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
const $f1f4ca456620baa2$var$initIPFS = ()=>$f1f4ca456620baa2$var$__awaiter(void 0, void 0, void 0, function*() {
        $f1f4ca456620baa2$var$ipfs = $f1f4ca456620baa2$var$ipfs || (yield $7uxh1$create($f1f4ca456620baa2$var$IPFS_CONFIG));
        return $f1f4ca456620baa2$var$ipfs;
    });
var $f1f4ca456620baa2$export$2e2bcd8739ae039 = $f1f4ca456620baa2$var$initIPFS;


var $29671cfde807e590$exports = {};

$parcel$export($29671cfde807e590$exports, "logout", function () { return $29671cfde807e590$export$a0973bcfe11b05c9; }, function (v) { return $29671cfde807e590$export$a0973bcfe11b05c9 = v; });
$parcel$export($29671cfde807e590$exports, "login", function () { return $29671cfde807e590$export$596d806903d1f59e; }, function (v) { return $29671cfde807e590$export$596d806903d1f59e = v; });

var $29671cfde807e590$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $29671cfde807e590$export$a0973bcfe11b05c9() {
    return $29671cfde807e590$var$__awaiter(this, void 0, void 0, function*() {
        yield globalThis.contract.user_action({
            action: (0, $bc09daf3d6fd99a8$exports.UserActionType).LOGOUT
        });
        globalThis.walletConnection.signOut();
    });
}
function $29671cfde807e590$export$596d806903d1f59e(successUrl, failureUrl) {
    return $29671cfde807e590$var$__awaiter(this, void 0, void 0, function*() {
        globalThis.walletConnection.requestSignIn({
            contractId: globalThis.projectConfig.contractName,
            successUrl: successUrl,
            failureUrl: failureUrl
        });
    });
}


function $701110f03c3de876$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $701110f03c3de876$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}




var $31f2ee8310cb2ee4$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $31f2ee8310cb2ee4$var$initOrbitDB = ()=>$31f2ee8310cb2ee4$var$__awaiter(void 0, void 0, void 0, function*() {
        if (globalThis.orbitdb) return;
        const ipfs = yield (0, $f1f4ca456620baa2$exports.default)();
        const loggedIn = (0, $701110f03c3de876$export$256a5a3564694cfc)();
        if (loggedIn) {
            if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
            // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
            // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
            globalThis.orbitdb = yield (0, $7uxh1$orbitdb).createInstance(ipfs);
        } else globalThis.orbitdb = yield (0, $7uxh1$orbitdb).createInstance(ipfs);
    });
var $31f2ee8310cb2ee4$export$2e2bcd8739ae039 = $31f2ee8310cb2ee4$var$initOrbitDB;


var $129e7bb7b84cbd88$exports = {};

$parcel$export($129e7bb7b84cbd88$exports, "default", function () { return $129e7bb7b84cbd88$export$2e2bcd8739ae039; }, function (v) { return $129e7bb7b84cbd88$export$2e2bcd8739ae039 = v; });


var $129e7bb7b84cbd88$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $129e7bb7b84cbd88$export$2e2bcd8739ae039() {
    return $129e7bb7b84cbd88$var$__awaiter(this, void 0, void 0, function*() {
        if (!(0, $701110f03c3de876$export$256a5a3564694cfc)()) return;
        let isLoggedIn = true;
        try {
            const user = yield globalThis.contract.get_user({
                account_id: (0, $701110f03c3de876$export$c1e0336bde96e2dc)()
            });
            isLoggedIn = user.is_online;
        } catch (e) {
            isLoggedIn = false;
            throw e;
        }
        if (!isLoggedIn) yield globalThis.contract.user_action({
            action: (0, $bc09daf3d6fd99a8$exports.UserActionType).LOGIN
        });
    });
}



var $654c4db4d93f05ad$exports = {};

$parcel$export($654c4db4d93f05ad$exports, "Counter", function () { return $654c4db4d93f05ad$export$1b74141c5fe63a28; }, function (v) { return $654c4db4d93f05ad$export$1b74141c5fe63a28 = v; });
$parcel$export($654c4db4d93f05ad$exports, "DocStore", function () { return $654c4db4d93f05ad$export$ae6e3da9bde8af08; }, function (v) { return $654c4db4d93f05ad$export$ae6e3da9bde8af08 = v; });
$parcel$export($654c4db4d93f05ad$exports, "EventLog", function () { return $654c4db4d93f05ad$export$f8203d08df5cd081; }, function (v) { return $654c4db4d93f05ad$export$f8203d08df5cd081 = v; });
$parcel$export($654c4db4d93f05ad$exports, "Feed", function () { return $654c4db4d93f05ad$export$833919a382305440; }, function (v) { return $654c4db4d93f05ad$export$833919a382305440 = v; });
$parcel$export($654c4db4d93f05ad$exports, "KeyValue", function () { return $654c4db4d93f05ad$export$12b3cc2522c3bba5; }, function (v) { return $654c4db4d93f05ad$export$12b3cc2522c3bba5 = v; });
$parcel$export($654c4db4d93f05ad$exports, "timestamp", function () { return $654c4db4d93f05ad$export$fc00ee57782020aa; }, function (v) { return $654c4db4d93f05ad$export$fc00ee57782020aa = v; });
var $8ef4373c29a8ef17$exports = {};

$parcel$export($8ef4373c29a8ef17$exports, "CounterDatabase", function () { return $8ef4373c29a8ef17$export$b62cdc4dda4dc10d; }, function (v) { return $8ef4373c29a8ef17$export$b62cdc4dda4dc10d = v; });
$parcel$export($8ef4373c29a8ef17$exports, "default", function () { return $8ef4373c29a8ef17$export$2e2bcd8739ae039; }, function (v) { return $8ef4373c29a8ef17$export$2e2bcd8739ae039 = v; });
class $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039 {
    onChange(callbackfn) {
        this.database.events.on("replicated", ()=>callbackfn());
    }
    constructor(database){
        this.database = database;
    }
}


var $8ef4373c29a8ef17$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $8ef4373c29a8ef17$export$b62cdc4dda4dc10d extends (0, $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039) {
    get() {
        return this.database.value;
    }
    inc(amt = 1) {
        return $8ef4373c29a8ef17$var$__awaiter(this, void 0, void 0, function*() {
            if (amt < 1) throw Error("Valid amount is required");
            yield this.database.inc(amt);
        });
    }
}
const $8ef4373c29a8ef17$var$getCounter = (address)=>$8ef4373c29a8ef17$var$__awaiter(void 0, void 0, void 0, function*() {
        const database = yield globalThis.orbitdb.counter(address);
        yield database.load();
        return new $8ef4373c29a8ef17$export$b62cdc4dda4dc10d(database);
    });
var $8ef4373c29a8ef17$export$2e2bcd8739ae039 = $8ef4373c29a8ef17$var$getCounter;


var $739a37eae7f01d37$exports = {};

$parcel$export($739a37eae7f01d37$exports, "DocumentDatabase", function () { return $739a37eae7f01d37$export$cc7289d1409c61ee; }, function (v) { return $739a37eae7f01d37$export$cc7289d1409c61ee = v; });
$parcel$export($739a37eae7f01d37$exports, "default", function () { return $739a37eae7f01d37$export$2e2bcd8739ae039; }, function (v) { return $739a37eae7f01d37$export$2e2bcd8739ae039 = v; });


var $400fea999f1b0043$exports = {};

$parcel$export($400fea999f1b0043$exports, "isValidDatabase", function () { return $400fea999f1b0043$export$d8658f5af792a7a4; }, function (v) { return $400fea999f1b0043$export$d8658f5af792a7a4 = v; });
$parcel$export($400fea999f1b0043$exports, "isValidKey", function () { return $400fea999f1b0043$export$47865c7da002be09; }, function (v) { return $400fea999f1b0043$export$47865c7da002be09 = v; });

var $400fea999f1b0043$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $400fea999f1b0043$export$d8658f5af792a7a4 = (address)=>$400fea999f1b0043$var$__awaiter(void 0, void 0, void 0, function*() {
        if (!(0, $7uxh1$orbitdb).isValidAddress(address)) return false;
        try {
            const isProjectDatabase = yield globalThis.contract.valid_database({
                address: address
            });
            return isProjectDatabase;
        } catch (e) {
            return false;
        }
    });
function $400fea999f1b0043$export$47865c7da002be09(key) {
    return !!key;
}


var $739a37eae7f01d37$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $739a37eae7f01d37$export$cc7289d1409c61ee extends (0, $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039) {
    get(key) {
        return key ? this.database.get(key)[0] : this.database.get("");
    }
    where(callbackfn) {
        return this.database.query(callbackfn);
    }
    set(key, value) {
        return $739a37eae7f01d37$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $400fea999f1b0043$exports.isValidKey)(key)) throw Error("Key is required");
            yield this.database.put(Object.assign({
                _id: key
            }, value));
        });
    }
    add(value) {
        return $739a37eae7f01d37$var$__awaiter(this, void 0, void 0, function*() {
            const id = (0, $7uxh1$v4)();
            yield this.set(id, value);
            return id;
        });
    }
    delete(key) {
        return $739a37eae7f01d37$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $400fea999f1b0043$exports.isValidKey)(key)) throw Error("Key is required");
            yield this.database.del(key);
        });
    }
    update(key, value) {
        return $739a37eae7f01d37$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $400fea999f1b0043$exports.isValidKey)(key)) throw Error("Key is required");
            const doc = this.get(key);
            yield this.set(key, Object.assign(Object.assign({}, doc), value));
        });
    }
}
const $739a37eae7f01d37$var$getDocStore = (address, indexBy)=>$739a37eae7f01d37$var$__awaiter(void 0, void 0, void 0, function*() {
        const database = yield globalThis.orbitdb.docs(address, indexBy);
        yield database.load();
        return new $739a37eae7f01d37$export$cc7289d1409c61ee(database);
    });
var $739a37eae7f01d37$export$2e2bcd8739ae039 = $739a37eae7f01d37$var$getDocStore;


var $7f01ca951b4d6c7e$exports = {};

$parcel$export($7f01ca951b4d6c7e$exports, "EventLogDatabase", function () { return $7f01ca951b4d6c7e$export$a4a6104bef1ea4da; }, function (v) { return $7f01ca951b4d6c7e$export$a4a6104bef1ea4da = v; });
$parcel$export($7f01ca951b4d6c7e$exports, "default", function () { return $7f01ca951b4d6c7e$export$2e2bcd8739ae039; }, function (v) { return $7f01ca951b4d6c7e$export$2e2bcd8739ae039 = v; });

var $7f01ca951b4d6c7e$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $7f01ca951b4d6c7e$export$a4a6104bef1ea4da extends (0, $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039) {
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
        return $7f01ca951b4d6c7e$var$__awaiter(this, void 0, void 0, function*() {
            return this.database.add(value);
        });
    }
}
const $7f01ca951b4d6c7e$var$getEventLog = (address)=>$7f01ca951b4d6c7e$var$__awaiter(void 0, void 0, void 0, function*() {
        throw Error("Not implemented");
    });
var $7f01ca951b4d6c7e$export$2e2bcd8739ae039 = $7f01ca951b4d6c7e$var$getEventLog;


var $75daf015ee5b198c$exports = {};

$parcel$export($75daf015ee5b198c$exports, "FeedDatabase", function () { return $75daf015ee5b198c$export$c4331506dfaaa28a; }, function (v) { return $75daf015ee5b198c$export$c4331506dfaaa28a = v; });
$parcel$export($75daf015ee5b198c$exports, "default", function () { return $75daf015ee5b198c$export$2e2bcd8739ae039; }, function (v) { return $75daf015ee5b198c$export$2e2bcd8739ae039 = v; });


var $75daf015ee5b198c$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $75daf015ee5b198c$export$c4331506dfaaa28a extends (0, $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039) {
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
        return $75daf015ee5b198c$var$__awaiter(this, void 0, void 0, function*() {
            return this.database.add(value);
        });
    }
}
const $75daf015ee5b198c$var$getFeed = (address)=>$75daf015ee5b198c$var$__awaiter(void 0, void 0, void 0, function*() {
        throw Error("Not implemented");
    });
var $75daf015ee5b198c$export$2e2bcd8739ae039 = $75daf015ee5b198c$var$getFeed;


var $5933033ace426ad7$exports = {};

$parcel$export($5933033ace426ad7$exports, "KVDatabase", function () { return $5933033ace426ad7$export$f0160e6bce89ab9; }, function (v) { return $5933033ace426ad7$export$f0160e6bce89ab9 = v; });
$parcel$export($5933033ace426ad7$exports, "default", function () { return $5933033ace426ad7$export$2e2bcd8739ae039; }, function (v) { return $5933033ace426ad7$export$2e2bcd8739ae039 = v; });

var $5933033ace426ad7$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $5933033ace426ad7$export$f0160e6bce89ab9 extends (0, $d1b5d3ae4b75a4c6$export$2e2bcd8739ae039) {
    get(key) {
        if (!key) throw Error("Key is required");
        return this.database.get(key);
    }
    getAll() {
        return this.database.all;
    }
    set(key, value) {
        return $5933033ace426ad7$var$__awaiter(this, void 0, void 0, function*() {
            if (!key) throw Error("Key is required");
            yield this.database.put(key, value);
        });
    }
    delete(key) {
        return $5933033ace426ad7$var$__awaiter(this, void 0, void 0, function*() {
            if (!key) throw Error("Key is required");
            yield this.database.del(key);
        });
    }
}
const $5933033ace426ad7$var$getKeyValue = (address)=>$5933033ace426ad7$var$__awaiter(void 0, void 0, void 0, function*() {
        const database = yield orbitdb.keyvalue(address);
        yield database.load();
        return new $5933033ace426ad7$export$f0160e6bce89ab9(database);
    });
var $5933033ace426ad7$export$2e2bcd8739ae039 = $5933033ace426ad7$var$getKeyValue;





var $654c4db4d93f05ad$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $654c4db4d93f05ad$var$cacheMap = new Map();
var $654c4db4d93f05ad$var$DatabaseType;
(function(DatabaseType) {
    DatabaseType["CounterDB"] = "counter";
    DatabaseType["DocStoreDB"] = "docstore";
    DatabaseType["EventLogDB"] = "eventlog";
    DatabaseType["FeedDB"] = "feed";
    DatabaseType["KeyValueDB"] = "keyvalue";
})($654c4db4d93f05ad$var$DatabaseType || ($654c4db4d93f05ad$var$DatabaseType = {}));
function $654c4db4d93f05ad$var$getDB(address, type, options = {}) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        let db = null;
        if (!globalThis.orbitdb) throw Error("OrbitDB is not initialized");
        const isValid = yield (0, $400fea999f1b0043$exports.isValidDatabase)(address);
        if (!isValid) throw Error("Invalid database address");
        if ($654c4db4d93f05ad$var$cacheMap.has(address)) return $654c4db4d93f05ad$var$cacheMap.get(address);
        switch(type){
            case $654c4db4d93f05ad$var$DatabaseType.CounterDB:
                db = yield (0, $8ef4373c29a8ef17$exports.default)(address);
                break;
            case $654c4db4d93f05ad$var$DatabaseType.DocStoreDB:
                db = yield (0, $739a37eae7f01d37$exports.default)(address, options);
                break;
            case $654c4db4d93f05ad$var$DatabaseType.EventLogDB:
                db = yield (0, $7f01ca951b4d6c7e$exports.default)(address);
                break;
            case $654c4db4d93f05ad$var$DatabaseType.FeedDB:
                db = yield (0, $75daf015ee5b198c$exports.default)(address);
                break;
            case $654c4db4d93f05ad$var$DatabaseType.KeyValueDB:
                db = yield (0, $5933033ace426ad7$exports.default)(address);
                break;
            default:
                throw new Error(`Unknown database type: ${type}`);
        }
        $654c4db4d93f05ad$var$cacheMap.set(address, db);
        if (!db) throw new Error("Database not found");
        return db;
    });
}
function $654c4db4d93f05ad$export$1b74141c5fe63a28(address) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $654c4db4d93f05ad$var$getDB(address, $654c4db4d93f05ad$var$DatabaseType.CounterDB);
        return db;
    });
}
function $654c4db4d93f05ad$export$ae6e3da9bde8af08(address, options = {
    indexBy: "_id"
}) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $654c4db4d93f05ad$var$getDB(address, $654c4db4d93f05ad$var$DatabaseType.DocStoreDB, options);
        return db;
    });
}
function $654c4db4d93f05ad$export$f8203d08df5cd081(address) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $654c4db4d93f05ad$var$getDB(address, $654c4db4d93f05ad$var$DatabaseType.EventLogDB);
        return db;
    });
}
function $654c4db4d93f05ad$export$833919a382305440(address) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $654c4db4d93f05ad$var$getDB(address, $654c4db4d93f05ad$var$DatabaseType.FeedDB);
        return db;
    });
}
function $654c4db4d93f05ad$export$12b3cc2522c3bba5(address) {
    return $654c4db4d93f05ad$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $654c4db4d93f05ad$var$getDB(address, $654c4db4d93f05ad$var$DatabaseType.KeyValueDB);
        return db;
    });
}
function $654c4db4d93f05ad$export$fc00ee57782020aa() {
    return Date.now();
}



var $5b16728422d4a076$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $5b16728422d4a076$export$2cd8252107eb640b = (projectConfig)=>$5b16728422d4a076$var$__awaiter(void 0, void 0, void 0, function*() {
        globalThis.projectConfig = projectConfig;
        switch(projectConfig.chainType){
            case (0, $8f6052a2b1cc37fc$export$11617b6a00cf0054).NEAR_TESTNET:
                yield (0, $bc09daf3d6fd99a8$exports).init();
                break;
            default:
                throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
        }
        yield (0, $129e7bb7b84cbd88$exports.default)();
        yield (0, $31f2ee8310cb2ee4$exports.default)();
    });
const $5b16728422d4a076$export$334c29725a78c21d = {
    getAccountId: $701110f03c3de876$export$c1e0336bde96e2dc,
    login: $29671cfde807e590$exports.login,
    logout: $29671cfde807e590$exports.logout,
    isLoggedIn: $701110f03c3de876$export$256a5a3564694cfc
};
const $5b16728422d4a076$export$6feb5ea51a7b0b47 = {
    timestamp: $654c4db4d93f05ad$exports.timestamp,
    Counter: $654c4db4d93f05ad$exports.Counter,
    KeyValue: $654c4db4d93f05ad$exports.KeyValue,
    DocStore: $654c4db4d93f05ad$exports.DocStore,
    Feed: $654c4db4d93f05ad$exports.Feed,
    EventLog: $654c4db4d93f05ad$exports.EventLog
};


export {$5b16728422d4a076$export$2cd8252107eb640b as init, $5b16728422d4a076$export$334c29725a78c21d as Auth, $5b16728422d4a076$export$6feb5ea51a7b0b47 as Database, $5b16728422d4a076$exports as default};
//# sourceMappingURL=index.js.map
