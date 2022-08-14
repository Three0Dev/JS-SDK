var $igjq5$nearapijs = require("near-api-js");
var $igjq5$orbitdb = require("orbit-db");
var $igjq5$ipfscore = require("ipfs-core");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $c7488ab7056fad17$export$2e2bcd8739ae039);
var $1c678e23f854c528$exports = {};

$parcel$export($1c678e23f854c528$exports, "getNearConfig", () => $1c678e23f854c528$export$31eac9c8bd069ff7);
$parcel$export($1c678e23f854c528$exports, "init", () => $1c678e23f854c528$export$2cd8252107eb640b);

function $1d4efdb23737060d$export$e72398d75d0174d8() {
    switch(globalThis.projectConfig.chainType){
        case "NEAR_TESTNET":
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $1d4efdb23737060d$export$3422c7fe7588127d() {
    return globalThis.projectId;
}
function $1d4efdb23737060d$export$e2de15bbd9edf9c6() {
    return new URLSearchParams(location.search);
}


function $1c678e23f854c528$export$31eac9c8bd069ff7() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $1d4efdb23737060d$export$e72398d75d0174d8)();
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
async function $1c678e23f854c528$export$2cd8252107eb640b() {
    const nearConfig = $1c678e23f854c528$export$31eac9c8bd069ff7();
    // Initialize connection to the NEAR testnet
    const near = await (0, $igjq5$nearapijs.connect)({
        deps: {
            keyStore: new (0, $igjq5$nearapijs.keyStores).BrowserLocalStorageKeyStore()
        },
        ...nearConfig
    });
    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    globalThis.walletConnection = new (0, $igjq5$nearapijs.WalletConnection)(near);
    // Getting the Account ID. If still unauthorized, it's just empty string
    globalThis.accountId = globalThis.walletConnection.getAccountId();
    // Initializing our contract APIs by contract name and configuration
    globalThis.contract = new (0, $igjq5$nearapijs.Contract)(globalThis.walletConnection.account(), nearConfig.contractName, {
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
                "/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/", 
            ]
        }
    }
};
const $d09c24f68af6a1cd$var$initIPFS = async ()=>{
    $d09c24f68af6a1cd$var$ipfs = $d09c24f68af6a1cd$var$ipfs || await $igjq5$ipfscore.create($d09c24f68af6a1cd$var$IPFS_CONFIG);
    return $d09c24f68af6a1cd$var$ipfs;
};
var $d09c24f68af6a1cd$export$2e2bcd8739ae039 = $d09c24f68af6a1cd$var$initIPFS;


var $fb5487c0bb6a0f3b$exports = {};

$parcel$export($fb5487c0bb6a0f3b$exports, "isLoggedIn", () => $fb5487c0bb6a0f3b$export$256a5a3564694cfc);
$parcel$export($fb5487c0bb6a0f3b$exports, "getAccountId", () => $fb5487c0bb6a0f3b$export$c1e0336bde96e2dc);
$parcel$export($fb5487c0bb6a0f3b$exports, "logout", () => $fb5487c0bb6a0f3b$export$a0973bcfe11b05c9);
$parcel$export($fb5487c0bb6a0f3b$exports, "login", () => $fb5487c0bb6a0f3b$export$596d806903d1f59e);
function $fb5487c0bb6a0f3b$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $fb5487c0bb6a0f3b$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}
async function $fb5487c0bb6a0f3b$export$a0973bcfe11b05c9() {
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
async function $fb5487c0bb6a0f3b$export$596d806903d1f59e(appName = "My Three0 App", successUrL = window.location.href, failureUrL = window.location.href) {
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


// Start OrbitDB
const $76da01013016d8c0$var$initOrbitDB = async ()=>{
    if (globalThis.orbitdb) return;
    const ipfs = await (0, $d09c24f68af6a1cd$export$2e2bcd8739ae039)();
    const loggedIn = (0, $fb5487c0bb6a0f3b$export$256a5a3564694cfc)();
    if (loggedIn) {
        if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
        // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
        // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
        globalThis.orbitdb = await (0, ($parcel$interopDefault($igjq5$orbitdb))).createInstance(ipfs);
    } else globalThis.orbitdb = await (0, ($parcel$interopDefault($igjq5$orbitdb))).createInstance(ipfs);
};
var $76da01013016d8c0$export$2e2bcd8739ae039 = $76da01013016d8c0$var$initOrbitDB;



async function $4ef501633b19f19e$export$2e2bcd8739ae039() {
    if ((0, $fb5487c0bb6a0f3b$export$256a5a3564694cfc)()) {
        let isLoggedIn = true;
        try {
            isLoggedIn = await globalThis.contract.get_user({
                account_id: (0, $fb5487c0bb6a0f3b$export$c1e0336bde96e2dc)()
            });
        } catch (e) {
            isLoggedIn = false;
        }
        if (!isLoggedIn) await globalThis.contract.user_action({
            action: "LOGIN"
        });
    }
}


const $c7488ab7056fad17$var$init = async (projectConfig)=>{
    globalThis.projectConfig = projectConfig;
    switch(projectConfig.chainType){
        case "NEAR_TESTNET":
            await (0, $1c678e23f854c528$exports).init();
            break;
        default:
            throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
    }
    await (0, $4ef501633b19f19e$export$2e2bcd8739ae039)();
    await (0, $76da01013016d8c0$export$2e2bcd8739ae039)();
};
var $c7488ab7056fad17$export$2e2bcd8739ae039 = $c7488ab7056fad17$var$init;


//# sourceMappingURL=index.js.map
