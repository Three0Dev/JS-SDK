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
			Swarm: ['/dns4/signal-rtc.three0dev.com/tcp/443/wss/p2p-webrtc-star/'],
		},
	},
}

const initIPFS = async (): Promise<IPFS.IPFS> => {
	ipfs = ipfs || (await IPFS.create(IPFS_CONFIG))
	return ipfs
}

export default initIPFS
