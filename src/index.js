import { NEAR } from './blockchain';
import * as DB from './database';
import * as AUTH from './auth';


const init = async (projectConfig) => {
  globalThis.projectConfig = projectConfig;

  switch (projectConfig.chainType) {
    case 'NEAR_TESTNET':
      await NEAR.init();
      break;
    default:
      throw Error(`Unconfigured chainType '${projectConfig.chainType}'`);
  }

  await AUTH.initAuth();
  await DB.initOrbitDB();
};

export {init};
export * from './database';
export * from './auth';