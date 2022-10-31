// import { getCounter } from './counter'
// import OrbitDB from 'orbit-db'
// import * as IPFS from 'ipfs-core'
// // import { isValidDatabase } from globalThis
// import initIPFS from '../ipfs'

// const IPFS_CONFIG = {
// 	start: true,
// 	EXPERIMENTAL: {
// 		pubsub: true,
// 	},
// 	preload: {
// 		enabled: false,
// 	},
// 	config: {
// 		Addresses: {
// 			Swarm: [
// 			],
// 		},
// 	},
// }

// let db = null;
// let ipfs = null;

// beforeAll(async () => {
// 	ipfs = await initIPFS()
// 	globalThis.orbitdb = await OrbitDB.createInstance(ipfs)

// 	const valid_database_mock = jest.fn();

// 	globalThis.contract = {
// 		valid_database: valid_database_mock
// 	}

// 	valid_database_mock.mockReturnValue(true)
// 	db = await globalThis.orbitdb.counter('counter-database-test')
// });

// afterAll(async () => {
//     await db.drop()
// 	await globalThis.orbitdb.disconnect()
// })

// test("Initial Value 0", async () => {
// 	globalThis.contract.valid_database.mockReturnValueOnce(true);
// 	let counterDB = await getCounter(db.address)
// 	const value = counterDB.get()
// 	expect(value).toEqual(0)
//   })

// test("Increment counter by 2", async () => {
// 	globalThis.contract.valid_database.mockReturnValueOnce(true);
// 	let counterDB = await getCounter(db.address)
// 	await counterDB.inc(2)
// 	const value = counterDB.get()
// 	expect(value).toEqual(2)
// })

// // https://stackoverflow.com/questions/47144187/can-you-write-async-tests-that-expect-tothrow#:~:text=You%20can%20test%20your%20async,I%20should%20fail')%3B%20%7D)%3B
// test("Increment 0", async () => {
// 	globalThis.contract.valid_database.mockReturnValueOnce(true);
// 	let counterDB = await getCounter(db.address)
// 	await expect(counterDB.inc(0))
// 	.rejects
// 	.toThrow("Valid amount is required")
//   })

//   test("Increment -1", async () => {
// 	globalThis.contract.valid_database.mockReturnValueOnce(true);
// 	let counterDB = await getCounter(db.address)
// 	await expect(counterDB.inc(-1))
// 	.rejects
// 	.toThrow("Valid amount is required")
//   })



// //   TODO
// //   test("Increment string", async () => {
// // 	globalThis.contract.valid_database.mockReturnValueOnce(true);
// // 	let counterDB = await getCounter(db.address)
// // 	await expect(counterDB.inc("stringType"))
// // 	.rejects
// // 	.toThrow("Valid amount is required")
// //   })