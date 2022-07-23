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
        '/dns4/p2p-circuit-constellation.herokuapp.com/tcp/443/wss/p2p/QmY8XpuX6VnaUVDz4uA14vpjv3CZYLif3wLPqCkgU2KLSB',
      ],
    },
  },
};

const initIPFS = async () => {
  ipfs = ipfs || await IPFS.create(IPFS_CONFIG);
  return ipfs;
};

export default initIPFS;
