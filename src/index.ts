import { ProjectConfig } from './types/config'
import { NEAR } from './blockchain'
import initAuth from './auth/Init'
import initDB from './database/Init'
import initStorage from './storage/init'
import initToken from './token/init'
import {
	getAccountId,
	loginWithPass,
	loginWithWallet,
	signUpWithPass,
	logout,
	isLoggedIn,
} from './auth'
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
import { BlockchainNetwork } from './utils'
import { setProjectConfig } from './core'

const init = async (projectConfig: ProjectConfig) => {
	setProjectConfig(projectConfig)

	switch (projectConfig.chainType) {
		case BlockchainNetwork.NEAR_TESTNET:
			await NEAR.init()
			break
		default:
			throw Error(`Unconfigured chainType '${projectConfig.chainType}'`)
	}

	await initAuth()
	await initDB()
	await initStorage()
	await initToken()
}

const Auth = {
	getAccountId,
	loginWithWallet,
	signUpWithPass,
	loginWithPass,
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
