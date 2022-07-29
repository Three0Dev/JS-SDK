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
        '/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/',
        '/dns4/three0wsnode.herokuapp.com/tcp/443/wss/p2p/QmdC5icumrvSy6N3jPezA3YXGugbmFrfJePY8miv18Ar9x',
      ],
    },
  },
};

const initIPFS = async () => {
  ipfs = ipfs || await IPFS.create(IPFS_CONFIG);
  return ipfs;
};

export default initIPFS;
