import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'
import getConfig from './config'

export const NEAR_CONFIG = getConfig(process.env.NODE_ENV || 'development')

// Initialize contract & set global variables
export async function initContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, NEAR_CONFIG))

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = await new Contract(window.walletConnection.account(), NEAR_CONFIG.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['getDatabaseAddress', 'userExists'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['createUser'],
  })
}