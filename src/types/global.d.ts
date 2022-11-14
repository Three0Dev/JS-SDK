/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { WalletConnection } from 'near-api-js'
import OrbitDB from 'orbit-db'
import { ProjectConfig } from './config'
import { Three0Contract } from '../blockchain/NEAR'

// TODO: Account for Contract Object
declare global {
	var projectConfig: ProjectConfig
	var orbitdb: OrbitDB
	var walletConnection: WalletConnection
	var accountId: string
	var contract: any
	var storageContract: StorageContract
}

export {}
