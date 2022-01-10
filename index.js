import { initContract } from './utils'
import { setPID } from './config'
import { Database } from './database'
import { Auth } from './auth'

export class DESI {
    constructor(config_file){
        setPID(config_file)

        await initContract()

        this.DB = new Database()
        this.AUTH = new Auth()
    }
}