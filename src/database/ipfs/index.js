import * as IPFS from 'ipfs-core';
import WebRTCDirect from 'libp2p-webrtc-direct';
import WebRTCStar from 'libp2p-webrtc-star';
import WebSockets from 'libp2p-websockets';
import wrtc from 'wrtc';

let ipfs;

const IPFS_CONFIG = {
  start: true,
  EXPERIMENTAL: {
    pubsub: true,
  },
  preload: {
    enabled: false,
  },
  libp2p: {
    modules: {
      transport: [WebRTCStar, WebSockets, WebRTCDirect],
    },
    config: {
      peerDiscovery: {
        webRTCStar: {
          // <- note the lower-case w - see https://github.com/libp2p/js-libp2p/issues/576
          enabled: true,
        },
      },
      transport: {
        WebRTCStar: {
          // <- note the upper-case w- see https://github.com/libp2p/js-libp2p/issues/576
          wrtc,
        },
      },
    },
    transportManager: { faultTolerance: 1 },
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/three0-rtc-node.herokuapp.com/tcp/443/wss/p2p-webrtc-star/',
      ],
    },
  },
};

const initIPFS = async () => {
  ipfs = ipfs || await IPFS.create(IPFS_CONFIG);
  return ipfs;
};

export default initIPFS;
