export const enum BlockchainNetwork {
	NEAR_TESTNET = 'NEAR_TESTNET',
}

export function getBlockchainType() {
	switch (globalThis.projectConfig.chainType) {
		case BlockchainNetwork.NEAR_TESTNET:
			return 'testnet'
		default:
			throw Error(
				`Unconfigured chainType '${globalThis.projectConfig.chainType}'`
			)
	}
}

export function getQueryParams() {
	// eslint-disable-next-line no-restricted-globals
	return new URLSearchParams(location.search)
}
