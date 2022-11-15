import { NEAR } from './blockchain'
import initAuth from './auth/Init'
import initOrbitDB from './database/Init'
import initStorage from './storage/init'
import initToken from './token/init'
import { getAccountId, login, logout, isLoggedIn } from './auth'
import {
	timestamp,
	Counter,
	KeyValue,
	DocStore,
	Feed,
	EventLog,
} from './database'
import { uploadFile, openFile, getFileList } from './storage'
import {
	isUserRegistered,
	registerUser,
	getBalance,
	transferTokens,
} from './token'
import { ProjectConfig } from './types/config'
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
	await initToken()
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

const Token = {
	isUserRegistered,
	registerUser,
	getBalance,
	transferTokens,
}

export { init, Auth, Database, Storage, Token }
