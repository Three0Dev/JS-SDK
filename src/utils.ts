import { getProjectConfig } from './core'

export const enum BlockchainNetwork {
	NEAR_TESTNET = 'NEAR_TESTNET',
}

export function getBlockchainType() {
	switch (getProjectConfig().chainType) {
		case BlockchainNetwork.NEAR_TESTNET:
			return 'testnet'
		default:
			throw Error(`Unconfigured chainType '${getProjectConfig().chainType}'`)
	}
}

export function getQueryParams() {
	// eslint-disable-next-line no-restricted-globals
	return new URLSearchParams(location.search)
}
