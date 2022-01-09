import {initContract, nearConfig} from './utils'
import { Database } from './database'
import { Auth } from './auth'

export class DESI {
    constructor(config_file){
        this.#config = {
            contractName: nearConfig.contractName,
            pid: require(config_file).pid
        }

        await initContract()

        this.DB = new Database()
        this.AUTH = new Auth(this.config)
    }
}