// import { isLoggedIn } from '../../src/auth/index.js'; 
// const auth = require('../../src/auth')
// const sum = require('../../src/auth')

import {isLoggedIn, sum} from './index'
import {WalletConnection} from 'near-api-js'

const a = globalThis.walletConnection
const b = globalThis.walletConnection

test('tests isLoggedIn', () => {
  expect(isLoggedIn).toBe(true);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });