import { getKeyValue } from './keyvalue'
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

let db = null;

beforeAll(async () => {
	const ipfs = await IPFS.create(IPFS_CONFIG)
	globalThis.orbitdb = await OrbitDB.createInstance(ipfs)

	const valid_database_mock = jest.fn();

	globalThis.contract = {
		valid_database: valid_database_mock
	}

	valid_database_mock.mockReturnValue(true)
	db = await globalThis.orbitdb.keyvalue('keyvalue-database-test')
});

afterAll(async () => {
    await db.drop()
	await globalThis.orbitdb.disconnect()
})

test("Set Function", async () => {
	globalThis.contract.valid_database.mockReturnValueOnce(true);
	let keyvalueDB = await getKeyValue(db.address)
    keyvalueDB.set("testKey", "testValue")
  })
