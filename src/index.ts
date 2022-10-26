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

const init = async (projectConfig: ProjectConfig) => {
	globalThis.projectConfig = projectConfig

	switch (projectConfig.chainType) {
		case 'NEAR_TESTNET':
			await NEAR.init()
			break
		default:
			throw Error(`Unconfigured chainType '${projectConfig.chainType}'`)
	}

	await initAuth()
	await initOrbitDB()
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

export {
	init,
	Auth,
	Database
}
