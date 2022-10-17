// import {isLoggedIn, add} from './index'
import * as nearApi from 'near-api-js'
import {isLoggedIn} from './index'


const url = require('url');
const localStorage = require('localstorage-memory');
// const BN = require('bn.js');


let lastRedirectUrl;
let lastTransaction;

global.window = {
  localStorage
}

global.document = {
  title: "documentTitle"
}

let history;
let nearFake;
let walletConnection;
let keyStore = new nearApi.keyStores.InMemoryKeyStore();



beforeEach(() => {
  keyStore.clear();
  nearFake = {
    config: {
        networkId: 'networkId',
        contractName: 'contractId',
        walletUrl: 'http://example.com/wallet',
    },
    connection: {
        networkId: 'networkId',
        signer: new nearApi.InMemorySigner(keyStore)
    },
    account() {
        return {
            state() {}
        };
    }
  };
  lastRedirectUrl = null;
  history = [];
  Object.assign(global.window, {
      location: {
          href: 'http://example.com/location',
          assign(url) {
              lastRedirectUrl = url;
          }
      },
      history: {
          replaceState: (state, title, url) => history.push([state, title, url])
      }
  });
  walletConnection = new nearApi.WalletConnection(nearFake);
  globalThis.walletConnection = walletConnection
});

// it('not signed in by default', () => {
//   expect(walletConnection.isSignedIn()).not.toBeTruthy();
// });


it('not signed in by default', () => {
  expect(isLoggedIn()).not.toBeTruthy();
});