// import IdentityProvider from 'orbit-db-identity-provider';
import OrbitDB from 'orbit-db';
import initIPFS from './ipfs';
// import NearIdentityProvider from './identities/NEAR';
import { isLoggedIn } from '../auth';

// Start OrbitDB
const initOrbitDB = async () => {
  if (globalThis.orbitdb) return;

  const ipfs = await initIPFS();
  const loggedIn = isLoggedIn();

  if (loggedIn) {
    if (globalThis.projectConfig.chainType.includes('NEAR')) {
      // IdentityProvider.addIdentityProvider(NearIdentityProvider);
      // const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
      globalThis.orbitdb = await OrbitDB.createInstance(ipfs);
    }
  } else {
    globalThis.orbitdb = await OrbitDB.createInstance(ipfs);
  }
};

export default initOrbitDB;
