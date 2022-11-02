import { NEAR } from './blockchain'
import initOrbitDB from './database/Init'
import initAuth from './auth/Init'
import { getAccountId, login, logout, isLoggedIn } from './auth'
import {
	timestamp,
	Counter,
	KeyValue,
	DocStore,
	Feed,
	EventLog,
} from './database'
import { ProjectConfig } from './types/config'
import initStorage from './storage/init'
import { uploadFile, openFile, getFileList } from './storage'
import { BlockchainNetwork } from './utils'

const init = async (projectConfig: ProjectConfig) => {
	globalThis.projectConfig = projectConfig

	switch (projectConfig.chainType) {
		case BlockchainNetwork.NEAR_TESTNET:
			await NEAR.init()
			break
		default:
			throw Error(`Unconfigured chainType '${projectConfig.chainType}'`)
	}

	await initAuth()
	await initOrbitDB()
	await initStorage()
}

const Auth = {
	getAccountId,
	login,
	logout,
	isLoggedIn,
}

const Database = {
	timestamp,
	Counter,
	KeyValue,
	DocStore,
	Feed,
	EventLog,
}

const Storage = {
	uploadFile,
	openFile,
	getFileList,
}

export { init, Auth, Database, Storage }
