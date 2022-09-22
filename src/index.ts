import { NEAR } from './blockchain';
import initOrbitDB from './database/init';
import initAuth from './auth/init';

import { getAccountId, login, logout } from './auth';
import { timestamp, getCounter, getKeyValue, getDocStore, getFeed, getEventLog } from './database';

const init = async (projectConfig) => {
  globalThis.projectConfig = projectConfig;

  switch (projectConfig.chainType) {
    case 'NEAR_TESTNET':
      await NEAR.init();
      break;
    default:
      throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
  }

  await initAuth();
  await initOrbitDB();
};

export default init;

export {
  getAccountId,
  login,
  logout,
  timestamp,
  getCounter,
  getKeyValue,
  getDocStore,
  getFeed,
  getEventLog,
}
