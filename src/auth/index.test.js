// import {isLoggedIn, add} from './index'
import * as nearApi from 'near-api-js'
import {getAccountId, isLoggedIn, login, logout} from './index'


const url = require('url');
const localStorage = require('localstorage-memory');

global.window = {
  localStorage
}

global.document = {
  title: "documentTitle"
}

let history;
let nearFake;
let walletConnection;
let lastRedirectUrl;
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
  globalThis.projectConfig = {
    contractName: 'signInContract'
  }
});

it('not signed in by default', () => {
  expect(isLoggedIn()).not.toBeTruthy();
});

it('Empty account ID', () => {
  expect(getAccountId()).toBe("");
});


describe('can request sign in', () => {
  beforeEach(() => keyStore.clear());
  
  it('testing login', () => {
    
      return login(
          'Three0',
          'http://example.com/success', 
          'http://example.com/fail'
      );
  });

  afterEach(async () => {
      let accounts = await keyStore.getAccounts('networkId');
      expect(accounts).toHaveLength(1);
      expect(accounts[0]).toMatch(/^pending_key.+/);
      expect(url.parse(lastRedirectUrl, true)).toMatchObject({
          protocol: 'http:',
          host: 'example.com',
          query: {
              contract_id: 'signInContract',
              success_url: 'http://example.com/success',
              failure_url: 'http://example.com/fail',
              public_key: (await keyStore.getKey('networkId', accounts[0])).publicKey.toString()
          }
      });
  });
});

// TODO Mock contract function call successfully
// it("testing logout", () => {
//   const contractCallMock = jest.fn()
//   globalThis.contract.userAction = contractCallMock

//   logout()
//   expect(isLoggedIn()).not.toBeTruthy();
// });