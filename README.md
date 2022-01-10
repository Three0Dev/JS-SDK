# DESI JS SDK
## Initialization
```
npm i --save desi-js-sdk
```
## Usage
1. Import DESI
```
import { DESI } from 'desi-js-sdk'
```
2. Initialize SDK
```
const configFile = `../path_to_config_file.json`
const DESI_CLIENT = new DESI(configFile)
```

The database client can be found `DESI_CLIENT.DB` and the authentication client can be found at `DESI_CLIENT.AUTH`

## API
### Auth
```
const auth = DESI_CLIENT.AUTH
```
* `auth.login()`
    * Logs into dApp using NEAR Wallet
    * Creates new user on NEAR blockchain if user doesn't exist
* `auth.logout([refresh]?)`
    * Logs out of dApp
    * Refreshes site after logout if `refresh` parameter is true (Default: `false`)
### Database

## License

## Open Source References