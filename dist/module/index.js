import {connect as $6qQe9$connect, keyStores as $6qQe9$keyStores, WalletConnection as $6qQe9$WalletConnection, Contract as $6qQe9$Contract} from "near-api-js";
import $6qQe9$orbitdb from "orbit-db";
import {create as $6qQe9$create} from "ipfs-core";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $282726261955a79a$exports = {};

$parcel$export($282726261955a79a$exports, "getNearConfig", function () { return $282726261955a79a$export$31eac9c8bd069ff7; });
$parcel$export($282726261955a79a$exports, "init", function () { return $282726261955a79a$export$2cd8252107eb640b; });

function $fe96ae9360f5c3a4$export$e72398d75d0174d8() {
    switch(globalThis.projectConfig.chainType){
        case "NEAR_TESTNET":
            return "testnet";
        default:
            throw Error(`Unconfigured chainType '${globalThis.projectConfig.chainType}'`);
    }
}
function $fe96ae9360f5c3a4$export$3422c7fe7588127d() {
    return globalThis.projectId;
}
function $fe96ae9360f5c3a4$export$e2de15bbd9edf9c6() {
    return new URLSearchParams(location.search);
}


function $282726261955a79a$export$31eac9c8bd069ff7() {
    const CONTRACT_NAME = globalThis.projectConfig.contractName;
    const chainType = (0, $fe96ae9360f5c3a4$export$e72398d75d0174d8)();
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
async function $282726261955a79a$export$2cd8252107eb640b() {
    const nearConfig = $282726261955a79a$export$31eac9c8bd069ff7();
    // Initialize connection to the NEAR testnet
    const near = await (0, $6qQe9$connect)({
        deps: {
            keyStore: new (0, $6qQe9$keyStores).BrowserLocalStorageKeyStore()
        },
        ...nearConfig
    });
    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    globalThis.walletConnection = new (0, $6qQe9$WalletConnection)(near);
    // Getting the Account ID. If still unauthorized, it's just empty string
    globalThis.accountId = globalThis.walletConnection.getAccountId();
    // Initializing our contract APIs by contract name and configuration
    globalThis.contract = new (0, $6qQe9$Contract)(globalThis.walletConnection.account(), nearConfig.contractName, {
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
                "/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/", 
            ]
        }
    }
};
const $81068f41e097c6e7$var$initIPFS = async ()=>{
    $81068f41e097c6e7$var$ipfs = $81068f41e097c6e7$var$ipfs || await $6qQe9$create($81068f41e097c6e7$var$IPFS_CONFIG);
    return $81068f41e097c6e7$var$ipfs;
};
var $81068f41e097c6e7$export$2e2bcd8739ae039 = $81068f41e097c6e7$var$initIPFS;


var $078e128063fe7ceb$exports = {};

$parcel$export($078e128063fe7ceb$exports, "isLoggedIn", function () { return $078e128063fe7ceb$export$256a5a3564694cfc; });
$parcel$export($078e128063fe7ceb$exports, "getAccountId", function () { return $078e128063fe7ceb$export$c1e0336bde96e2dc; });
$parcel$export($078e128063fe7ceb$exports, "logout", function () { return $078e128063fe7ceb$export$a0973bcfe11b05c9; });
$parcel$export($078e128063fe7ceb$exports, "login", function () { return $078e128063fe7ceb$export$596d806903d1f59e; });
function $078e128063fe7ceb$export$256a5a3564694cfc() {
    return globalThis.walletConnection.isSignedIn();
}
function $078e128063fe7ceb$export$c1e0336bde96e2dc() {
    return globalThis.walletConnection.getAccountId();
}
async function $078e128063fe7ceb$export$a0973bcfe11b05c9() {
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
async function $078e128063fe7ceb$export$596d806903d1f59e(appName = "My Three0 App", successUrL = window.location.href, failureUrL = window.location.href) {
    globalThis.walletConnection.requestSignIn(globalThis.projectConfig.contractName, appName, successUrL, failureUrL);
}


// Start OrbitDB
const $c4a8bb43f281ae17$var$initOrbitDB = async ()=>{
    if (globalThis.orbitdb) return;
    const ipfs = await (0, $81068f41e097c6e7$export$2e2bcd8739ae039)();
    const loggedIn = (0, $078e128063fe7ceb$export$256a5a3564694cfc)();
    if (loggedIn) {
        if (globalThis.projectConfig.chainType.includes("NEAR")) // IdentityProvider.addIdentityProvider(NearIdentityProvider);
        // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
        // const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
        globalThis.orbitdb = await (0, $6qQe9$orbitdb).createInstance(ipfs);
    } else globalThis.orbitdb = await (0, $6qQe9$orbitdb).createInstance(ipfs);
};
var $c4a8bb43f281ae17$export$2e2bcd8739ae039 = $c4a8bb43f281ae17$var$initOrbitDB;



async function $0b1c7bd34c4de420$export$2e2bcd8739ae039() {
    if ((0, $078e128063fe7ceb$export$256a5a3564694cfc)()) {
        let isLoggedIn = true;
        try {
            const userProfile = await globalThis.contract.get_user({
                account_id: (0, $078e128063fe7ceb$export$c1e0336bde96e2dc)()
            });
            isLoggedIn = userProfile.is_online;
        } catch (e) {
            isLoggedIn = false;
        }
        if (!isLoggedIn) await globalThis.contract.user_action({
            action: "LOGIN"
        });
    }
}


const $46fdc42491ccab8f$var$init = async (projectConfig)=>{
    globalThis.projectConfig = projectConfig;
    switch(projectConfig.chainType){
        case "NEAR_TESTNET":
            await (0, $282726261955a79a$exports).init();
            break;
        default:
            throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
    }
    await (0, $0b1c7bd34c4de420$export$2e2bcd8739ae039)();
    await (0, $c4a8bb43f281ae17$export$2e2bcd8739ae039)();
};
var $46fdc42491ccab8f$export$2e2bcd8739ae039 = $46fdc42491ccab8f$var$init;


export {$46fdc42491ccab8f$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
