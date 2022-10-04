import { getCounter } from './counter'
import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs-core'

const IPFS_CONFIG = {
	start: true,
	EXPERIMENTAL: {
		pubsub: true,
	},
	preload: {
		enabled: false,
	},
	config: {
		Addresses: {
			Swarm: [
			],
		},
	},
}


let ipfs;
let orbitdb;

const initIPFS = async () => {
	ipfs = ipfs || (await IPFS.create(IPFS_CONFIG))
	return ipfs
}

const initOrbitDB = async () => {
    orbitdb = await OrbitDB.createInstance(ipfs)
}


beforeAll(async () => {
    initIPFS();
    initOrbitDB();
});

afterAll(async () => {
    orbitdb.close();
})

test("counter database", async () => {
    // const ipfs = await initIPFS()
    const db = await orbitdb.counter('counter-database-test')
// db created & opened
// window.alert(db.address)
    let counterDB = await getCounter(db.address, db)
    await counterDB.inc(2)
    expect(counterDB.get().toBe(2))
})

// test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await counterDB.get();
//     } catch (e) {
//       expect(e).toBe(2);
//     }
//   });