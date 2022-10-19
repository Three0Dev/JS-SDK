var $igjq5$nearapijs = require("near-api-js");
var $igjq5$orbitdb = require("orbit-db");
var $igjq5$ipfscore = require("ipfs-core");

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
parcelRequire.register("2rcby", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getNearConfig = $1c678e23f854c528$var$getNearConfig;
module.exports.init = $1c678e23f854c528$var$init;


var $2w0xI = parcelRequire("2w0xI");
function $1c678e23f854c528$var$getNearConfig() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $2w0xI.getBlockchainType)();
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
                keyPath: `${process.env.HOME}/.near/validator_key.json`,
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
// Initialize contract & set global variables
async function $1c678e23f854c528$var$init() {
    const nearConfig = $1c678e23f854c528$var$getNearConfig();
    // Initialize connection to the NEAR testnet
    const near = await (0, $igjq5$nearapijs.connect)({
        deps: {
            keyStore: new $igjq5$nearapijs.keyStores.BrowserLocalStorageKeyStore()
        },
        ...nearConfig
    });
    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    globalThis.walletConnection = new $igjq5$nearapijs.WalletConnection(near);
    // Getting the Account ID. If still unauthorized, it's just empty string
    globalThis.accountId = globalThis.walletConnection.getAccountId();
    // Initializing our contract APIs by contract name and configuration
    globalThis.contract = new $igjq5$nearapijs.Contract(globalThis.walletConnection.account(), nearConfig.contractName, {
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
parcelRequire.register("2w0xI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getBlockchainType = $1d4efdb23737060d$var$getBlockchainType;
module.exports.getPID = $1d4efdb23737060d$var$getPID;
module.exports.getQueryParams = $1d4efdb23737060d$var$getQueryParams;
function $1d4efdb23737060d$var$getBlockchainType() {
    switch(globalThis.projectConfig.chainType){
        case "NEAR_TESTNET":
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $1d4efdb23737060d$var$getPID() {
    return globalThis.projectId;
}
function $1d4efdb23737060d$var$getQueryParams() {
    return new URLSearchParams(location.search);
}

});


parcelRequire.register("acDW9", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $76da01013016d8c0$var$_orbitDb = $76da01013016d8c0$var$_interopRequireDefault($igjq5$orbitdb);

var $76da01013016d8c0$var$_ipfs = $76da01013016d8c0$var$_interopRequireDefault((parcelRequire("hUqoO")));

var $lzP8i = parcelRequire("lzP8i");
function $76da01013016d8c0$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// import IdentityProvider from 'orbit-db-identity-provider';
// import NearIdentityProvider from './identities/NEAR';
// Start OrbitDB
const $76da01013016d8c0$var$initOrbitDB = async ()=>{
    if (globalThis.orbitdb) return;
    const ipfs = await (0, $76da01013016d8c0$var$_ipfs.default)();
    const loggedIn = (0, $lzP8i.isLoggedIn)();
    if (loggedIn) {
        if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
        // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
        // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
        globalThis.orbitdb = await $76da01013016d8c0$var$_orbitDb.default.createInstance(ipfs);
    } else globalThis.orbitdb = await $76da01013016d8c0$var$_orbitDb.default.createInstance(ipfs);
};
var $76da01013016d8c0$var$_default = $76da01013016d8c0$var$initOrbitDB;
module.exports.default = $76da01013016d8c0$var$_default;

});
parcelRequire.register("hUqoO", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;

var $d09c24f68af6a1cd$var$IPFS = $d09c24f68af6a1cd$var$_interopRequireWildcard($igjq5$ipfscore);
function $d09c24f68af6a1cd$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($d09c24f68af6a1cd$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $d09c24f68af6a1cd$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $d09c24f68af6a1cd$var$_getRequireWildcardCache(nodeInterop);
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
let $d09c24f68af6a1cd$var$ipfs;
const $d09c24f68af6a1cd$var$IPFS_CONFIG = {
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
const $d09c24f68af6a1cd$var$initIPFS = async ()=>{
    $d09c24f68af6a1cd$var$ipfs = $d09c24f68af6a1cd$var$ipfs || await $d09c24f68af6a1cd$var$IPFS.create($d09c24f68af6a1cd$var$IPFS_CONFIG);
    return $d09c24f68af6a1cd$var$ipfs;
};
var $d09c24f68af6a1cd$var$_default = $d09c24f68af6a1cd$var$initIPFS;
module.exports.default = $d09c24f68af6a1cd$var$_default;

});

parcelRequire.register("lzP8i", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.add = $fb5487c0bb6a0f3b$var$add;
module.exports.getAccountId = $fb5487c0bb6a0f3b$var$getAccountId;
module.exports.isLoggedIn = $fb5487c0bb6a0f3b$var$isLoggedIn;
module.exports.login = $fb5487c0bb6a0f3b$var$login;
module.exports.logout = $fb5487c0bb6a0f3b$var$logout;
function $fb5487c0bb6a0f3b$var$add(a, b) {
    return a + b;
}
function $fb5487c0bb6a0f3b$var$isLoggedIn() {
    return globalThis.walletConnection.isSignedIn();
}
function $fb5487c0bb6a0f3b$var$getAccountId() {
    return globalThis.walletConnection.getAccountId();
}
async function $fb5487c0bb6a0f3b$var$logout() {
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
async function $fb5487c0bb6a0f3b$var$login() {
    let appName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "My Three0 App";
    let successUrL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    let failureUrL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location.href;
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}

});


parcelRequire.register("6MhLr", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = $4ef501633b19f19e$var$initAuth;

var $lzP8i = parcelRequire("lzP8i");
async function $4ef501633b19f19e$var$initAuth() {
    if ((0, $lzP8i.isLoggedIn)()) {
        let isLoggedIn = true;
        try {
            isLoggedIn = await globalThis.contract.get_user({
                account_id: (0, $lzP8i.getAccountId)()
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

"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
var $4bc0d4344d10a7f2$exports = {};
"use strict";
Object.defineProperty($4bc0d4344d10a7f2$exports, "__esModule", {
    value: true
});
$4bc0d4344d10a7f2$exports.NEAR = void 0;

var $4bc0d4344d10a7f2$var$NEAR = $4bc0d4344d10a7f2$var$_interopRequireWildcard((parcelRequire("2rcby")));
$4bc0d4344d10a7f2$exports.NEAR = $4bc0d4344d10a7f2$var$NEAR;
function $4bc0d4344d10a7f2$var$_getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($4bc0d4344d10a7f2$var$_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function $4bc0d4344d10a7f2$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $4bc0d4344d10a7f2$var$_getRequireWildcardCache(nodeInterop);
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



var $c7488ab7056fad17$var$_init = $c7488ab7056fad17$var$_interopRequireDefault((parcelRequire("acDW9")));

var $c7488ab7056fad17$var$_init2 = $c7488ab7056fad17$var$_interopRequireDefault((parcelRequire("6MhLr")));
function $c7488ab7056fad17$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const $c7488ab7056fad17$var$init = async (projectConfig)=>{
    globalThis.projectConfig = projectConfig;
    switch(projectConfig.chainType){
        case "NEAR_TESTNET":
            await $4bc0d4344d10a7f2$exports.NEAR.init();
            break;
        default:
            throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
    }
    await (0, $c7488ab7056fad17$var$_init2.default)();
    await (0, $c7488ab7056fad17$var$_init.default)();
};
var $c7488ab7056fad17$var$_default = $c7488ab7056fad17$var$init;
module.exports.default = $c7488ab7056fad17$var$_default;


//# sourceMappingURL=index.js.map
