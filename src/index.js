import { NEAR } from './blockchain'
import initOrbitDB from './database/init'
import initAuth from './auth/init'

const init = async (projectConfig) => {
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

export default init
