// import {isLoggedIn, add} from './index'
import * as nearApi from 'near-api-js'


const url = require('url');
const localStorage = require('localstorage-memory');
// const BN = require('bn.js');

global.window = {
  localStorage
}

let history
let nearFake;
let walletConnection;
let keyStore = new nearApi.keyStores.InMemoryKeyStore();


beforeAll(() => {
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
});

globalThis.walletConnection= new nearApi.WalletConnection(nearFake)

// const a = globalThis.walletConnection
// const b = globalThis.walletConnection

// test('tests isLoggedIn', () => {
//   expect(isLoggedIn()).toBe(true);
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(add(1,2)).toBe(3);
// });

beforeAll(async () => {
	const ipfs = await IPFS.create(IPFS_CONFIG)
	globalThis.orbitdb = await OrbitDB.createInstance(ipfs)

	const valid_database_mock = jest.fn();

	globalThis.contract = {
		valid_database: valid_database_mock
	}

  const isSignedInMock = jest.fn()

  globalThis.walletConnection = {
    isSignedIn: isSignedInMock
  }

	valid_database_mock.mockReturnValue(true)
	db = await globalThis.orbitdb.counter('counter-database-test')
});

test('not signed in by default', () => {
  let returnValue = globalThis.walletConnection.isSignedIn.mockReturnValue(true)
  expect(returnValue).toEqual(true)
});