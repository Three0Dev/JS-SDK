import * as IPFS from 'ipfs-core';

let ipfs;

const IPFS_CONFIG = {
  start: true,
  EXPERIMENTAL: {
    pubsub: true,
  },
  preload: {
    enabled: false,
  },
  config: {
    Bootstrap: [
    ],
    Addresses: {
      Swarm: [
        '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
        '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/',
        '/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/',
      ],
    },
  },
};

const initIPFS = async () => {
  ipfs = ipfs || await IPFS.create(IPFS_CONFIG);
  return ipfs;
};

export default initIPFS;
