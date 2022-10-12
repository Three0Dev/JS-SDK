import {connect as $6qQe9$connect, keyStores as $6qQe9$keyStores, WalletConnection as $6qQe9$WalletConnection, Contract as $6qQe9$Contract} from "near-api-js";
import * as $6qQe9$orbitdb from "orbit-db";
import * as $6qQe9$ipfscore from "ipfs-core";

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
parcelRequire.register("3rJrX", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getNearConfig = $282726261955a79a$var$getNearConfig;
module.exports.init = $282726261955a79a$var$init;


var $lRaud = parcelRequire("lRaud");
function $282726261955a79a$var$getNearConfig() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $lRaud.getBlockchainType)();
    switch(chainType){
        case "production":
        case "mainnet":
            return {
                networkId: "mainnet",
                nodeUrl: "https://rpc.mainnet.near.org",
                contractName: CONTRACT_NAME,
                walletUrl: "https://wallet.near.org",
                helperUrl: "https://helper.mainnet.near.org",
                explorerUrl: "https://explorer.mainnet.near.org"
            };
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
                keyPath: `${"C:\\Users\\hersh"}/.near/validator_key.json`,
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
} // Initialize contract & set global variables
async function $282726261955a79a$var$init() {
    const nearConfig = $282726261955a79a$var$getNearConfig(); // Initialize connection to the NEAR testnet
    const near = await (0, $6qQe9$connect)({
        deps: {
            keyStore: new $6qQe9$keyStores.BrowserLocalStorageKeyStore()
        },
        ...nearConfig
    }); // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    globalThis.walletConnection = new $6qQe9$WalletConnection(near); // Getting the Account ID. If still unauthorized, it's just empty string
    globalThis.accountId = globalThis.walletConnection.getAccountId(); // Initializing our contract APIs by contract name and configuration
    globalThis.contract = new $6qQe9$Contract(globalThis.walletConnection.account(), nearConfig.contractName, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: [
            "user_exists",
            "get_user",
            "valid_database"
        ],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: [
            "create_user",
            "user_action"
        ]
    });
}

});
parcelRequire.register("lRaud", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getBlockchainType = $fe96ae9360f5c3a4$var$getBlockchainType;
module.exports.getPID = $fe96ae9360f5c3a4$var$getPID;
module.exports.getQueryParams = $fe96ae9360f5c3a4$var$getQueryParams;
function $fe96ae9360f5c3a4$var$getBlockchainType() {
    switch(globalThis.projectConfig.chainType){
        case "NEAR_TESTNET":
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $fe96ae9360f5c3a4$var$getPID() {
    return globalThis.projectId;
}
function $fe96ae9360f5c3a4$var$getQueryParams() {
    return new URLSearchParams(location.search);
}

});


parcelRequire.register("gSOkC", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $c4a8bb43f281ae17$var$_orbitDb = $c4a8bb43f281ae17$var$_interopRequireDefault($6qQe9$orbitdb);

var $c4a8bb43f281ae17$var$_ipfs = $c4a8bb43f281ae17$var$_interopRequireDefault((parcelRequire("b4NCB")));

var $Edkb7 = parcelRequire("Edkb7");
function $c4a8bb43f281ae17$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// import IdentityProvider from 'orbit-db-identity-provider';
// import NearIdentityProvider from './identities/NEAR';
// Start OrbitDB
const $c4a8bb43f281ae17$var$initOrbitDB = async ()=>{
    if (globalThis.orbitdb) return;
    const ipfs = await (0, $c4a8bb43f281ae17$var$_ipfs.default)();
    const loggedIn = (0, $Edkb7.isLoggedIn)();
    if (loggedIn) {
        if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
        // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
        // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
        globalThis.orbitdb = await $c4a8bb43f281ae17$var$_orbitDb.default.createInstance(ipfs);
    } else globalThis.orbitdb = await $c4a8bb43f281ae17$var$_orbitDb.default.createInstance(ipfs);
};
var $c4a8bb43f281ae17$var$_default = $c4a8bb43f281ae17$var$initOrbitDB;
module.exports.default = $c4a8bb43f281ae17$var$_default;

});
parcelRequire.register("b4NCB", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $81068f41e097c6e7$var$IPFS = $81068f41e097c6e7$var$_interopRequireWildcard($6qQe9$ipfscore);
function $81068f41e097c6e7$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($81068f41e097c6e7$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $81068f41e097c6e7$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $81068f41e097c6e7$var$_getRequireWildcardCache(nodeInterop);
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
let $81068f41e097c6e7$var$ipfs;
const $81068f41e097c6e7$var$IPFS_CONFIG = {
    start: true,
    EXPERIMENTAL: {
        pubsub: true
    },
    preload: {
        enabled: false
    },
    config: {
        Addresses: {
            Swarm: [
                "/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/"
            ]
        }
    }
};
const $81068f41e097c6e7$var$initIPFS = async ()=>{
    $81068f41e097c6e7$var$ipfs = $81068f41e097c6e7$var$ipfs || await $81068f41e097c6e7$var$IPFS.create($81068f41e097c6e7$var$IPFS_CONFIG);
    return $81068f41e097c6e7$var$ipfs;
};
var $81068f41e097c6e7$var$_default = $81068f41e097c6e7$var$initIPFS;
module.exports.default = $81068f41e097c6e7$var$_default;

});

parcelRequire.register("Edkb7", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.add = $078e128063fe7ceb$var$add;
module.exports.getAccountId = $078e128063fe7ceb$var$getAccountId;
module.exports.isLoggedIn = $078e128063fe7ceb$var$isLoggedIn;
module.exports.login = $078e128063fe7ceb$var$login;
module.exports.logout = $078e128063fe7ceb$var$logout;
function $078e128063fe7ceb$var$add(a, b) {
    return a + b;
}
function $078e128063fe7ceb$var$isLoggedIn() {
    return globalThis.walletConnection.isSignedIn();
}
function $078e128063fe7ceb$var$getAccountId() {
    return globalThis.walletConnection.getAccountId();
}
async function $078e128063fe7ceb$var$logout() {
    try {
        await globalThis.contract.user_action({
            action: "LOGOUT"
        });
        globalThis.walletConnection.signOut();
    } catch (e) {
        console.error(e);
        throw e;
    }
}
async function $078e128063fe7ceb$var$login() {
    let appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "My Three0 App";
    let successUrL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    let failureUrL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}

});


parcelRequire.register("X8Znv", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = $0b1c7bd34c4de420$var$initAuth;

var $Edkb7 = parcelRequire("Edkb7");
async function $0b1c7bd34c4de420$var$initAuth() {
    if ((0, $Edkb7.isLoggedIn)()) {
        let isLoggedIn = true;
        try {
            isLoggedIn = await globalThis.contract.get_user({
                account_id: (0, $Edkb7.getAccountId)()
            });
        } catch (e) {
            isLoggedIn = false;
        }
        if (!isLoggedIn) await globalThis.contract.user_action({
            action: "LOGIN"
        });
    }
}

});

var $46fdc42491ccab8f$exports = {};
"use strict";
Object.defineProperty($46fdc42491ccab8f$exports, "__esModule", {
    value: true
});
$46fdc42491ccab8f$exports.default = void 0;
var $63eb5f628a566d9d$exports = {};
"use strict";
Object.defineProperty($63eb5f628a566d9d$exports, "__esModule", {
    value: true
});
$63eb5f628a566d9d$exports.NEAR = void 0;

var $63eb5f628a566d9d$var$NEAR = $63eb5f628a566d9d$var$_interopRequireWildcard((parcelRequire("3rJrX")));
$63eb5f628a566d9d$exports.NEAR = $63eb5f628a566d9d$var$NEAR;
function $63eb5f628a566d9d$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($63eb5f628a566d9d$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $63eb5f628a566d9d$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $63eb5f628a566d9d$var$_getRequireWildcardCache(nodeInterop);
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



var $46fdc42491ccab8f$var$_init = $46fdc42491ccab8f$var$_interopRequireDefault((parcelRequire("gSOkC")));

var $46fdc42491ccab8f$var$_init2 = $46fdc42491ccab8f$var$_interopRequireDefault((parcelRequire("X8Znv")));
function $46fdc42491ccab8f$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $46fdc42491ccab8f$var$init = async (projectConfig)=>{
    globalThis.projectConfig = projectConfig;
    switch(projectConfig.chainType){
        case "NEAR_TESTNET":
            await $63eb5f628a566d9d$exports.NEAR.init();
            break;
        default:
            throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
    }
    await (0, $46fdc42491ccab8f$var$_init2.default)();
    await (0, $46fdc42491ccab8f$var$_init.default)();
};
var $46fdc42491ccab8f$var$_default = $46fdc42491ccab8f$var$init;
$46fdc42491ccab8f$exports.default = $46fdc42491ccab8f$var$_default;


export {$46fdc42491ccab8f$exports as default};
//# sourceMappingURL=index.js.map
