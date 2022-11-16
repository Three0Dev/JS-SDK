var $dSCMW$nearapijs = require("near-api-js");
var $dSCMW$orbitdb = require("orbit-db");
var $dSCMW$ipfscore = require("ipfs-core");
var $dSCMW$uuid = require("uuid");
var $dSCMW$shortuuid = require("short-uuid");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "init", function () { return $020eab0e4dd81a46$export$2cd8252107eb640b; }, function (v) { return $020eab0e4dd81a46$export$2cd8252107eb640b = v; });
$parcel$export(module.exports, "Auth", function () { return $020eab0e4dd81a46$export$334c29725a78c21d; }, function (v) { return $020eab0e4dd81a46$export$334c29725a78c21d = v; });
$parcel$export(module.exports, "Database", function () { return $020eab0e4dd81a46$export$6feb5ea51a7b0b47; }, function (v) { return $020eab0e4dd81a46$export$6feb5ea51a7b0b47 = v; });
$parcel$export(module.exports, "Storage", function () { return $020eab0e4dd81a46$export$bf2a15d34f3c441c; }, function (v) { return $020eab0e4dd81a46$export$bf2a15d34f3c441c = v; });
$parcel$export(module.exports, "Token", function () { return $020eab0e4dd81a46$export$50792b0e93539fde; }, function (v) { return $020eab0e4dd81a46$export$50792b0e93539fde = v; });
var $d3ed99f02d86c501$exports = {};

$parcel$export($d3ed99f02d86c501$exports, "UserActionType", function () { return $d3ed99f02d86c501$export$4d85d82e4ea34f7c; }, function (v) { return $d3ed99f02d86c501$export$4d85d82e4ea34f7c = v; });
$parcel$export($d3ed99f02d86c501$exports, "getNearConfig", function () { return $d3ed99f02d86c501$export$31eac9c8bd069ff7; }, function (v) { return $d3ed99f02d86c501$export$31eac9c8bd069ff7 = v; });
$parcel$export($d3ed99f02d86c501$exports, "init", function () { return $d3ed99f02d86c501$export$2cd8252107eb640b; }, function (v) { return $d3ed99f02d86c501$export$2cd8252107eb640b = v; });

var $44dda2c9f6001bf5$export$11617b6a00cf0054;
(function(BlockchainNetwork) {
    BlockchainNetwork["NEAR_TESTNET"] = "NEAR_TESTNET";
})($44dda2c9f6001bf5$export$11617b6a00cf0054 || ($44dda2c9f6001bf5$export$11617b6a00cf0054 = {}));
function $44dda2c9f6001bf5$export$e72398d75d0174d8() {
    switch(globalThis.projectConfig.chainType){
        case $44dda2c9f6001bf5$export$11617b6a00cf0054.NEAR_TESTNET:
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
        // case 'local':
        // 	return {
        // 		networkId: 'local',
        // 		nodeUrl: 'http://localhost:3030',
        // 		keyPath: `${process.env.HOME}/.near/validator_key.json`,
        // 		walletUrl: 'http://localhost:4000/wallet',
        // 		contractName: CONTRACT_NAME,
        // 	}
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
        const near = yield (0, $dSCMW$nearapijs.connect)(Object.assign({
            keyStore: new (0, $dSCMW$nearapijs.keyStores).BrowserLocalStorageKeyStore()
        }, nearConfig));
        // Initializing Wallet based Account. It can work with NEAR testnet wallet that
        // is hosted at https://wallet.testnet.near.org
        globalThis.walletConnection = new (0, $dSCMW$nearapijs.WalletConnection)(near, null);
        // Initializing our contract APIs by contract name and configuration
        globalThis.contract = new (0, $dSCMW$nearapijs.Contract)(globalThis.walletConnection.account(), nearConfig.contractName, {
            // View methods are read only. They don't modify the state, but usually return some value.
            viewMethods: [
                "get_user",
                "valid_database",
                "get_storage",
                "get_tokenization", 
            ],
            // Change methods can modify the state. But you don't receive the returned value when called.
            changeMethods: [
                "user_action",
                "set_nonce"
            ]
        });
    });
}




var $6cad23d4edb5a464$exports = {};

$parcel$export($6cad23d4edb5a464$exports, "default", function () { return $6cad23d4edb5a464$export$2e2bcd8739ae039; }, function (v) { return $6cad23d4edb5a464$export$2e2bcd8739ae039 = v; });

function $eec81c2cfd9b1b42$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $eec81c2cfd9b1b42$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}


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
        if (!(0, $eec81c2cfd9b1b42$export$256a5a3564694cfc)()) return;
        let isLoggedIn = true;
        try {
            const user = yield globalThis.contract.get_user({
                account_id: (0, $eec81c2cfd9b1b42$export$c1e0336bde96e2dc)()
            });
            isLoggedIn = user.is_online;
        } catch (e) {
            isLoggedIn = false;
        }
        if (!isLoggedIn) yield globalThis.contract.user_action({
            action: (0, $d3ed99f02d86c501$exports.UserActionType).LOGIN
        });
    });
}


var $065c946acbad5f50$exports = {};

$parcel$export($065c946acbad5f50$exports, "default", function () { return $065c946acbad5f50$export$2e2bcd8739ae039; }, function (v) { return $065c946acbad5f50$export$2e2bcd8739ae039 = v; });

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
        yield globalThis.contract.user_action({
            action: (0, $d3ed99f02d86c501$exports.UserActionType).LOGOUT
        });
        globalThis.walletConnection.signOut();
    });
}
function $36a1a38c5f443c85$export$596d806903d1f59e(successUrl, failureUrl) {
    return $36a1a38c5f443c85$var$__awaiter(this, void 0, void 0, function*() {
        globalThis.walletConnection.requestSignIn({
            contractId: globalThis.projectConfig.contractName,
            successUrl: successUrl,
            failureUrl: failureUrl
        });
    });
}





var $065c946acbad5f50$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $065c946acbad5f50$var$initOrbitDB = ()=>$065c946acbad5f50$var$__awaiter(void 0, void 0, void 0, function*() {
        if (globalThis.orbitdb) return;
        const ipfs = yield (0, $46137cfcfeb0552d$exports.default)();
        const loggedIn = (0, $eec81c2cfd9b1b42$export$256a5a3564694cfc)();
        if (loggedIn) {
            if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
            // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
            // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
            globalThis.orbitdb = yield (0, ($parcel$interopDefault($dSCMW$orbitdb))).createInstance(ipfs);
        } else globalThis.orbitdb = yield (0, ($parcel$interopDefault($dSCMW$orbitdb))).createInstance(ipfs);
    });
var $065c946acbad5f50$export$2e2bcd8739ae039 = $065c946acbad5f50$var$initOrbitDB;


var $e8d2b956588f388c$exports = {};

$parcel$export($e8d2b956588f388c$exports, "default", function () { return $e8d2b956588f388c$export$2e2bcd8739ae039; }, function (v) { return $e8d2b956588f388c$export$2e2bcd8739ae039 = v; });

var $e8d2b956588f388c$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $e8d2b956588f388c$export$2e2bcd8739ae039() {
    return $e8d2b956588f388c$var$__awaiter(this, void 0, void 0, function*() {
        try {
            const storageAccount = yield globalThis.contract.get_storage();
            if (!storageAccount) return;
            globalThis.storageContract = new (0, $dSCMW$nearapijs.Contract)(globalThis.walletConnection.account(), (yield globalThis.contract.get_storage()), {
                // View methods are read only. They don't modify the state, but usually return some value.
                viewMethods: [
                    "list_files",
                    "get_file"
                ],
                // Change methods can modify the state. But you don't receive the returned value when called.
                changeMethods: [
                    "nft_mint"
                ]
            });
        } catch (e) {
        // TODO
        }
    });
}


var $6ee01793a3ef9b7c$exports = {};

$parcel$export($6ee01793a3ef9b7c$exports, "default", function () { return $6ee01793a3ef9b7c$export$2e2bcd8739ae039; }, function (v) { return $6ee01793a3ef9b7c$export$2e2bcd8739ae039 = v; });

var $6ee01793a3ef9b7c$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $6ee01793a3ef9b7c$export$2e2bcd8739ae039() {
    return $6ee01793a3ef9b7c$var$__awaiter(this, void 0, void 0, function*() {
        try {
            const tokenAccount = yield globalThis.contract.get_tokenization();
            globalThis.tokenContract = new (0, $dSCMW$nearapijs.Contract)(globalThis.walletConnection.account(), tokenAccount, {
                // View methods are read only. They don't modify the state, but usually return some value.
                viewMethods: [
                    "ft_metadata",
                    "ft_balance_of",
                    "storage_balance_of"
                ],
                // Change methods can modify the state. But you don't receive the returned value when called.
                changeMethods: [
                    "storage_deposit",
                    "ft_transfer",
                    "ft_mint"
                ]
            });
        } catch (e) {
            console.log("Error starting tokens:", e);
        }
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
class $85f300b8af2e137a$export$2e2bcd8739ae039 {
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
class $088689cdba66f326$export$b62cdc4dda4dc10d extends (0, $85f300b8af2e137a$export$2e2bcd8739ae039) {
    get() {
        return this.database.value;
    }
    inc(amt = 1) {
        return $088689cdba66f326$var$__awaiter(this, void 0, void 0, function*() {
            if (amt < 1) throw Error("Valid amount is required");
            yield this.database.inc(amt);
        });
    }
}
const $088689cdba66f326$var$getCounter = (address)=>$088689cdba66f326$var$__awaiter(void 0, void 0, void 0, function*() {
        const database = yield globalThis.orbitdb.counter(address);
        yield database.load();
        return new $088689cdba66f326$export$b62cdc4dda4dc10d(database);
    });
var $088689cdba66f326$export$2e2bcd8739ae039 = $088689cdba66f326$var$getCounter;


var $ecfd62e1e5921b75$exports = {};

$parcel$export($ecfd62e1e5921b75$exports, "DocumentDatabase", function () { return $ecfd62e1e5921b75$export$cc7289d1409c61ee; }, function (v) { return $ecfd62e1e5921b75$export$cc7289d1409c61ee = v; });
$parcel$export($ecfd62e1e5921b75$exports, "default", function () { return $ecfd62e1e5921b75$export$2e2bcd8739ae039; }, function (v) { return $ecfd62e1e5921b75$export$2e2bcd8739ae039 = v; });


var $1133891dffb598a6$exports = {};

$parcel$export($1133891dffb598a6$exports, "isValidDatabase", function () { return $1133891dffb598a6$export$d8658f5af792a7a4; }, function (v) { return $1133891dffb598a6$export$d8658f5af792a7a4 = v; });
$parcel$export($1133891dffb598a6$exports, "isValidKey", function () { return $1133891dffb598a6$export$47865c7da002be09; }, function (v) { return $1133891dffb598a6$export$47865c7da002be09 = v; });

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
        try {
            const isProjectDatabase = yield globalThis.contract.valid_database({
                address: address
            });
            return isProjectDatabase;
        } catch (e) {
            return false;
        }
    });
function $1133891dffb598a6$export$47865c7da002be09(key) {
    return !!key;
}


var $ecfd62e1e5921b75$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
class $ecfd62e1e5921b75$export$cc7289d1409c61ee extends (0, $85f300b8af2e137a$export$2e2bcd8739ae039) {
    get(key) {
        return key ? this.database.get(key)[0] : this.database.get("");
    }
    where(callbackfn) {
        return this.database.query(callbackfn);
    }
    set(key, value) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            if (!(0, $1133891dffb598a6$exports.isValidKey)(key)) throw Error("Key is required");
            yield this.database.put(Object.assign({
                _id: key
            }, value));
        });
    }
    add(value) {
        return $ecfd62e1e5921b75$var$__awaiter(this, void 0, void 0, function*() {
            const id = (0, $dSCMW$uuid.v4)();
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
            const doc = this.get(key);
            yield this.set(key, Object.assign(Object.assign({}, doc), value));
        });
    }
}
const $ecfd62e1e5921b75$var$getDocStore = (address, indexBy)=>$ecfd62e1e5921b75$var$__awaiter(void 0, void 0, void 0, function*() {
        const database = yield globalThis.orbitdb.docs(address, indexBy);
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
class $610eccb30f15c968$export$a4a6104bef1ea4da extends (0, $85f300b8af2e137a$export$2e2bcd8739ae039) {
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
const $610eccb30f15c968$var$getEventLog = (address)=>$610eccb30f15c968$var$__awaiter(void 0, void 0, void 0, function*() {
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
class $9f42f73f36b591e2$export$c4331506dfaaa28a extends (0, $85f300b8af2e137a$export$2e2bcd8739ae039) {
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
const $9f42f73f36b591e2$var$getFeed = (address)=>$9f42f73f36b591e2$var$__awaiter(void 0, void 0, void 0, function*() {
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
class $fd768f09317d5eed$export$f0160e6bce89ab9 extends (0, $85f300b8af2e137a$export$2e2bcd8739ae039) {
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
const $fd768f09317d5eed$var$getKeyValue = (address)=>$fd768f09317d5eed$var$__awaiter(void 0, void 0, void 0, function*() {
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
    DatabaseType["CounterDB"] = "counter";
    DatabaseType["DocStoreDB"] = "docstore";
    DatabaseType["EventLogDB"] = "eventlog";
    DatabaseType["FeedDB"] = "feed";
    DatabaseType["KeyValueDB"] = "keyvalue";
})($c519e5c2d701af31$var$DatabaseType || ($c519e5c2d701af31$var$DatabaseType = {}));
function $c519e5c2d701af31$var$getDB(address, type, options = {}) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        let db = null;
        if (!globalThis.orbitdb) throw Error("OrbitDB is not initialized");
        const isValid = yield (0, $1133891dffb598a6$exports.isValidDatabase)(address);
        if (!isValid) throw Error("Invalid database address");
        if ($c519e5c2d701af31$var$cacheMap.has(address)) return $c519e5c2d701af31$var$cacheMap.get(address);
        switch(type){
            case $c519e5c2d701af31$var$DatabaseType.CounterDB:
                db = yield (0, $088689cdba66f326$exports.default)(address);
                break;
            case $c519e5c2d701af31$var$DatabaseType.DocStoreDB:
                db = yield (0, $ecfd62e1e5921b75$exports.default)(address, options);
                break;
            case $c519e5c2d701af31$var$DatabaseType.EventLogDB:
                db = yield (0, $610eccb30f15c968$exports.default)(address);
                break;
            case $c519e5c2d701af31$var$DatabaseType.FeedDB:
                db = yield (0, $9f42f73f36b591e2$exports.default)(address);
                break;
            case $c519e5c2d701af31$var$DatabaseType.KeyValueDB:
                db = yield (0, $fd768f09317d5eed$exports.default)(address);
                break;
            default:
                throw new Error(`Unknown database type: ${type}`);
        }
        $c519e5c2d701af31$var$cacheMap.set(address, db);
        if (!db) throw new Error("Database not found");
        return db;
    });
}
function $c519e5c2d701af31$export$1b74141c5fe63a28(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.CounterDB);
        return db;
    });
}
function $c519e5c2d701af31$export$ae6e3da9bde8af08(address, options = {
    indexBy: "_id"
}) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.DocStoreDB, options);
        return db;
    });
}
function $c519e5c2d701af31$export$f8203d08df5cd081(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.EventLogDB);
        return db;
    });
}
function $c519e5c2d701af31$export$833919a382305440(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.FeedDB);
        return db;
    });
}
function $c519e5c2d701af31$export$12b3cc2522c3bba5(address) {
    return $c519e5c2d701af31$var$__awaiter(this, void 0, void 0, function*() {
        const db = yield $c519e5c2d701af31$var$getDB(address, $c519e5c2d701af31$var$DatabaseType.KeyValueDB);
        return db;
    });
}
function $c519e5c2d701af31$export$fc00ee57782020aa() {
    return Date.now();
}


var $ed3b8ded4dcf360c$exports = {};

$parcel$export($ed3b8ded4dcf360c$exports, "uploadFile", function () { return $ed3b8ded4dcf360c$export$a5575dbeeffdad98; }, function (v) { return $ed3b8ded4dcf360c$export$a5575dbeeffdad98 = v; });
$parcel$export($ed3b8ded4dcf360c$exports, "openFile", function () { return $ed3b8ded4dcf360c$export$c47c8b06a9966d9f; }, function (v) { return $ed3b8ded4dcf360c$export$c47c8b06a9966d9f = v; });
$parcel$export($ed3b8ded4dcf360c$exports, "getFileList", function () { return $ed3b8ded4dcf360c$export$23006a4c24fbadd0; }, function (v) { return $ed3b8ded4dcf360c$export$23006a4c24fbadd0 = v; });

var $9301199aacf5ac42$exports = {};

$parcel$export($9301199aacf5ac42$exports, "web3StorageGateway", function () { return $9301199aacf5ac42$export$594d9ee163818c02; }, function (v) { return $9301199aacf5ac42$export$594d9ee163818c02 = v; });
$parcel$export($9301199aacf5ac42$exports, "default", function () { return $9301199aacf5ac42$export$2e2bcd8739ae039; }, function (v) { return $9301199aacf5ac42$export$2e2bcd8739ae039 = v; });
var $9301199aacf5ac42$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $9301199aacf5ac42$var$url = "https://three0-storage-proxy.onrender.com";
function $9301199aacf5ac42$var$web3StorageClientAuth() {
    return $9301199aacf5ac42$var$__awaiter(this, void 0, void 0, function*() {
        function getCookie(cname) {
            const name = `${cname}=`;
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(";");
            for(let i = 0; i < ca.length; i += 1){
                let c = ca[i];
                while(c.charAt(0) === " ")c = c.substring(1);
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return "";
        }
        function setCookie(name, value, days) {
            const expires = new Date(Date.now() + days * 864e5).toUTCString();
            document.cookie += `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
        }
        const token = getCookie("three0storage");
        if (token) return token;
        const nonce = yield globalThis.contract.set_nonce();
        const res = yield fetch(`${$9301199aacf5ac42$var$url}/generateToken`, {
            method: "POST",
            // credentials: 'include',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nonce: nonce,
                accountId: globalThis.contract.account.accountId,
                pid: globalThis.projectConfig.contractName
            })
        }).then((resp)=>resp.json());
        setCookie("three0storage", res.token, 1);
        return res.token;
    });
}
function $9301199aacf5ac42$var$uploadWeb3Files(files) {
    return $9301199aacf5ac42$var$__awaiter(this, void 0, void 0, function*() {
        const token = yield $9301199aacf5ac42$var$web3StorageClientAuth();
        const fd = new FormData();
        files.forEach((file)=>{
            fd.append("file", file);
        });
        const output = yield fetch(`${$9301199aacf5ac42$var$url}/upload`, {
            // credentials: 'include',
            mode: "cors",
            headers: {
                Authorization: `${token}`
            },
            method: "POST",
            body: fd
        }).then((res)=>res.json());
        if (output.status) return output.cid;
        throw new Error(output.message);
    });
}
const $9301199aacf5ac42$export$594d9ee163818c02 = "https://w3s.link/ipfs";
var $9301199aacf5ac42$export$2e2bcd8739ae039 = $9301199aacf5ac42$var$uploadWeb3Files;


var $ed3b8ded4dcf360c$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $ed3b8ded4dcf360c$export$a5575dbeeffdad98(file, path = "", description = "") {
    return $ed3b8ded4dcf360c$var$__awaiter(this, void 0, void 0, function*() {
        const filepath = path === "" ? file.name : `${path.slice(1)}/${file.name}`;
        const cid = yield (0, $9301199aacf5ac42$exports.default)([
            file
        ]);
        const fileMetadata = {
            title: file.name,
            description: description,
            media: `${(0, $9301199aacf5ac42$exports.web3StorageGateway)}/${cid}/${file.name}`,
            media_hash: btoa(cid),
            file_type: file.type,
            issued_at: Date.now()
        };
        return globalThis.storageContract.nft_mint({
            token_id: $dSCMW$shortuuid.generate().toLowerCase(),
            metadata: fileMetadata,
            path: filepath,
            receiver_id: window.walletConnection.account().accountId
        }, "300000000000000", "100000000000000000000000" // attached deposit in yoctoNEAR (optional)
        );
    });
}
function $ed3b8ded4dcf360c$export$c47c8b06a9966d9f(path) {
    return $ed3b8ded4dcf360c$var$__awaiter(this, void 0, void 0, function*() {
        const tokenMetaData = yield globalThis.storageContract.get_file({
            file_path: path
        });
        return tokenMetaData;
    });
}
function $ed3b8ded4dcf360c$export$23006a4c24fbadd0(path) {
    return $ed3b8ded4dcf360c$var$__awaiter(this, void 0, void 0, function*() {
        // add slash to end of path if not present
        const folder = path.slice(-1) === "/" ? path : `${path}/`;
        const list = yield globalThis.storageContract.list_files({
            path: folder
        });
        return list;
    });
}


var $689b6ca880f810d1$exports = {};

$parcel$export($689b6ca880f810d1$exports, "isUserRegistered", function () { return $689b6ca880f810d1$export$295eb11480dc9713; }, function (v) { return $689b6ca880f810d1$export$295eb11480dc9713 = v; });
$parcel$export($689b6ca880f810d1$exports, "registerUser", function () { return $689b6ca880f810d1$export$16015adca85344a; }, function (v) { return $689b6ca880f810d1$export$16015adca85344a = v; });
$parcel$export($689b6ca880f810d1$exports, "getBalance", function () { return $689b6ca880f810d1$export$df96cd8d56be0ab1; }, function (v) { return $689b6ca880f810d1$export$df96cd8d56be0ab1 = v; });
$parcel$export($689b6ca880f810d1$exports, "transferTokens", function () { return $689b6ca880f810d1$export$9e27f52bc305dd99; }, function (v) { return $689b6ca880f810d1$export$9e27f52bc305dd99 = v; });

var $689b6ca880f810d1$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
function $689b6ca880f810d1$export$8548546c0aa631e6() {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        const metadata = yield globalThis.tokenContract.ft_metadata();
        return metadata;
    });
}
function $689b6ca880f810d1$export$295eb11480dc9713() {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        const balance = yield globalThis.tokenContract.storage_balance_of({
            account_id: globalThis.walletConnection.getAccountId()
        });
        return balance > 0.00125;
    });
}
function $689b6ca880f810d1$export$16015adca85344a() {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        yield globalThis.tokenContract.storage_deposit({
            args: {
                account_id: globalThis.walletConnection.getAccountId()
            },
            amount: (0, $dSCMW$nearapijs.utils).format.parseNearAmount("0.00125")
        });
    });
}
function $689b6ca880f810d1$export$df96cd8d56be0ab1() {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        const { decimals: decimals  } = yield $689b6ca880f810d1$export$8548546c0aa631e6();
        const balance = (yield globalThis.tokenContract.ft_balance_of({
            account_id: globalThis.walletConnection.getAccountId()
        })) / Math.pow(10, decimals);
        return balance;
    });
}
function $689b6ca880f810d1$export$9e27f52bc305dd99(receiver, amount) {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        yield globalThis.tokenContract.ft_transfer({
            args: {
                receiver_id: receiver,
                amount: `${amount}`
            },
            amount: "1"
        });
    });
}
function $689b6ca880f810d1$export$174447ba4073ebd9(amount) {
    return $689b6ca880f810d1$var$__awaiter(this, void 0, void 0, function*() {
        yield globalThis.tokenContract.ft_mint({
            amount: `${amount / Math.pow(10, (yield $689b6ca880f810d1$export$8548546c0aa631e6()).exchange_rate)}`
        });
    });
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
const $020eab0e4dd81a46$export$2cd8252107eb640b = (projectConfig)=>$020eab0e4dd81a46$var$__awaiter(void 0, void 0, void 0, function*() {
        globalThis.projectConfig = projectConfig;
        switch(projectConfig.chainType){
            case (0, $44dda2c9f6001bf5$export$11617b6a00cf0054).NEAR_TESTNET:
                yield (0, $d3ed99f02d86c501$exports).init();
                break;
            default:
                throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
        }
        yield (0, $6cad23d4edb5a464$exports.default)();
        yield (0, $065c946acbad5f50$exports.default)();
        yield (0, $e8d2b956588f388c$exports.default)();
        yield (0, $6ee01793a3ef9b7c$exports.default)();
    });
const $020eab0e4dd81a46$export$334c29725a78c21d = {
    getAccountId: $eec81c2cfd9b1b42$export$c1e0336bde96e2dc,
    login: $36a1a38c5f443c85$exports.login,
    logout: $36a1a38c5f443c85$exports.logout,
    isLoggedIn: $eec81c2cfd9b1b42$export$256a5a3564694cfc
};
const $020eab0e4dd81a46$export$6feb5ea51a7b0b47 = {
    timestamp: $c519e5c2d701af31$exports.timestamp,
    Counter: $c519e5c2d701af31$exports.Counter,
    KeyValue: $c519e5c2d701af31$exports.KeyValue,
    DocStore: $c519e5c2d701af31$exports.DocStore,
    Feed: $c519e5c2d701af31$exports.Feed,
    EventLog: $c519e5c2d701af31$exports.EventLog
};
const $020eab0e4dd81a46$export$bf2a15d34f3c441c = {
    uploadFile: $ed3b8ded4dcf360c$exports.uploadFile,
    openFile: $ed3b8ded4dcf360c$exports.openFile,
    getFileList: $ed3b8ded4dcf360c$exports.getFileList
};
const $020eab0e4dd81a46$export$50792b0e93539fde = {
    isUserRegistered: $689b6ca880f810d1$exports.isUserRegistered,
    registerUser: $689b6ca880f810d1$exports.registerUser,
    getBalance: $689b6ca880f810d1$exports.getBalance,
    transferTokens: $689b6ca880f810d1$exports.transferTokens
};


//# sourceMappingURL=index.js.map
