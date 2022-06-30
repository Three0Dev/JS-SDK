/* eslint-disable import/prefer-default-export */

import {
  connect, Contract, keyStores, WalletConnection,
} from 'near-api-js';
import { getNearConfig } from './config';
import { getBlockchainType } from './utils';

// Initialize contract & set global variables
export async function initContract(projectConfig) {
  const nearConfig = getNearConfig(getBlockchainType(projectConfig.chainType));

  // Initialize connection to the NEAR testnet
  const near = await connect({
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
    ...nearConfig,
  });

  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = new Contract(window.walletConnection.account(), nearConfig.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['user_exists', 'get_user', 'valid_database'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['create_user', 'user_action'],
  });
}
