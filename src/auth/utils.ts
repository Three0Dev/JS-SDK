import { getBlockchainType } from '../utils'
import { isLoggedIn } from './session'

// eslint-disable-next-line import/prefer-default-export
export function isValidPassCall(username: string) {
	if (isLoggedIn()) {
		throw new Error('Already logged in')
	} else if (getBlockchainType() !== 'testnet') {
		throw new Error('Pass login is only supported on testnet')
	} else if (!username) {
		throw new Error('Username is required')
	}
}
