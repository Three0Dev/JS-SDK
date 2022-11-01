import * as IPFS from 'ipfs-core'
import { IPFSOptions } from 'ipfs-core/src/components/network'

let ipfs: IPFS.IPFS

const IPFS_CONFIG: IPFSOptions = {
	start: true,
	EXPERIMENTAL: {
		ipnsPubsub: true,
	},
	preload: {
		enabled: false,
	},
	config: {
		Addresses: {
			Swarm: [
				'/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/',
				// '/dns4/p2p-circuit-constellation.herokuapp.com/tcp/443/wss/p2p/QmY8XpuX6VnaUVDz4uA14vpjv3CZYLif3wLPqCkgU2KLSB',
			],
		},
	},
}

const initIPFS = async (): Promise<IPFS.IPFS> => {
	ipfs = ipfs || (await IPFS.create(IPFS_CONFIG))
	return ipfs
}

export default initIPFS
