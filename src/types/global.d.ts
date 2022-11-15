/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import { WalletConnection } from 'near-api-js'
import OrbitDB from 'orbit-db'
import { ProjectConfig } from './config'

// TODO: Account for Contract Object
declare global {
	var projectConfig: ProjectConfig
	var orbitdb: OrbitDB
	var walletConnection: WalletConnection
	var accountId: string
	var contract: any
	var storageContract: any
	var web3StorageClient: any
	var tokenContract: any
}

export {}
