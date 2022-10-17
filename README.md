# Three0 JS SDK
This is a JS SDK is intended for browser based applications that need to interact with the Three0 Service Suite. It is not intended yet for Node.js applications. The SDK is currently in alpha stage development and is not yet ready for production use.

## Initialization
```
npm i --save @three0dev/js-sdk
```
## Usage
1. Import Three0 and prepare configuration
```
import init from '@three0dev/js-sdk'

const config = {
  "contractName": "myTestContract",
  "projectId": "myTestProject",
  "chainType": "NEAR_TESTNET"
}
```
2. Initialize SDK
- - - -
### React
```
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

init(config).then(() => {
  const container = document.querySelector('#root')
  const root = createRoot(container)
  root.render(<App />)
}).catch(console.error)
```
### Vue
```
import { createApp } from 'vue';
import App from './App.vue';

init(config)
  .then(() => {
    const app = createApp(App);
    app.use(store);
    app.use(router);
    app.mount('#app');
}).catch(console.error)
```
### Angular
WIP

### Vanilla
WIP: Pending Bug Fixes and CDN Compatibility

## Services
### Auth
```
import { login, logout, isloggedIn, getAccountId } from '@three0dev/js-sdk/auth'
```
* `login():Promise<void>`
  * Logs into dApp using NEAR Wallet
  * Creates new user on NEAR blockchain if user doesn't exist
* `logout():Promise<void>`
  * Logs out of dApp
* `isLoggedIn():boolean`
  * Returns `true` if user is logged in
* `getAccountId():string`
  * Returns user account ID
### Database

#### **DocStore**: 
```
import { getDocStore } from '@three0dev/js-sdk/database'

const docstore = await getDocStore([address])
```
* `docstore.get(key:string):any`
  * Gets value from docstore
  * Returns `null` if key doesn't exist
* `docstore.where(callback: Function):any[]`
  * Returns array of values that match callback function
  * Ex: `docstore.where(doc => doc.key === 'value')`
* `docstore.set(key:string, value:Object):Promise<void>`
  * Sets value in docstore
* `docstore.add(value:Object):Promise<string>`
  * Adds value to docstore
  * Returns key of added value
* `docstore.update(key:string, value:Object):Promise<void>`
  * Updates value in docstore
* `docstore.delete(key:string):Promise<void>`
  * Deletes value from docstore
#### **KeyValue**:
```
import { getKeyValue } from '@three0dev/js-sdk/database'

const keyvalue = await getKeyValue([address])
```
* `keyvalue.get(key:string):any`
  * Gets value from database
  * Returns `null` if key doesn't exist
* `keyvalue.getAll():any[]`
  * Gets all values from database
* `keyvalue.set(key:string, value:any):Promise<void>`
  * Sets value in database
* `keyvalue.delete(key:string):Promise<void>`
  * Deletes value from database
#### **Counter**:
WARNING: EXPERIMENTAL
```
import { getCounter } from '@three0dev/js-sdk/database'

const counter = await getCounter([address])
```
* `counter.get():number`
  * Gets current value of counter
* `counter.increment(value:int):Promise<void>`
  * Increments counter by `value`
  * Value must be >= 1
#### **Eventlog**
WIP - Will be released during beta version
#### **Feed**
WIP - Will be released during beta version

#### **All Databases**
* `db.onChange(callback: Function)`
  * Listens to any changes in database and calls `callback` when changes are made

## License and Code of Conduct
This repository is distributed under the terms of both the the GPL License (Version 3.0). See [LICENSE](LICENSE).

See [Code of Conduct](CODE_OF_CONDUCT.md) for more information on contribution and ethical standards.

## Open Source References
* [Orbit DB](https://orbitdb.org/)
* [near-api-js](https://github.com/near/near-api-js)

## Popular Issues
Occasionally an error stating `npm ERR! Error No binary available for arch 'undefined'` will occur. To fix this:
1. Delete `node_modules` and `package-lock.json`
2. Run the following command:
```
export TARGET_ARCH=arm64
```
3. Reinstall dependencies