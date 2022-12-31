// import IdentityProvider from 'orbit-db-identity-provider';
import OrbitDB from 'orbit-db'
import initIPFS from './ipfs'
// import NearIdentityProvider from './identities/NEAR';
import { isLoggedIn } from '../auth'
import { getProjectConfig } from '../core'
import { getOrbitDBInstance, setOrbitDBInstance } from './instance'

const initDB = async () => {
	if (getOrbitDBInstance()) return

	const ipfs = await initIPFS()
	const loggedIn = await isLoggedIn()

	if (loggedIn) {
		if (getProjectConfig().chainType.includes('NEAR')) {
			// IdentityProvider.addIdentityProvider(NearIdentityProvider);
			// const identity = await IdentityProvider.createIdentity({ type: 'NearIdentity' });
			// const orbitdb = await OrbitDB.createInstance(ipfs, {identity});
			setOrbitDBInstance(await OrbitDB.createInstance(ipfs))
		}
	} else {
		setOrbitDBInstance(await OrbitDB.createInstance(ipfs))
	}
}

export default initDB
