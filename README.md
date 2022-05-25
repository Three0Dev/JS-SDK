# Three0 JS SDK
## Initialization
```
npm i --save three0-js-sdk
```
## Usage
1. Import Three0
```
import { DESI } from 'desi-js-sdk'
```
2. Initialize SDK
- - - -
### React
```
const configFile = `../path_to_config_file.json`

```
### Angular
```
const configFile = `../path_to_config_file.json`
const DESI_CLIENT = new DESI(configFile)
```
### Vue
```
import Vue from "vue"
import App from "./App.vue"

import { initContract } from "./utils"

Vue.config.productionTip = false

const configFile = `../path_to_config_file.json`

initContract(configFile)
  .then(() => {

    new Vue({
      render: h => h(App),
    }).$mount("#app")

  })
```
### Vanilla
```
const configFile = `../path_to_config_file.json`
const DESI_CLIENT = new DESI(configFile)
```

## Services
### Auth
```
const auth = DESI_CLIENT.AUTH
```
* `auth.login():void`
    * Logs into dApp using NEAR Wallet
    * Creates new user on NEAR blockchain if user doesn't exist
* `auth.logout([refresh]:bool):void`
    * Logs out of dApp
    * Refreshes site after logout if `refresh` parameter is true (Default: `false`)
### Database

## License

## Open Source References