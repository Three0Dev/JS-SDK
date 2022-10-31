// import { getDocStore } from './docstore'
// import OrbitDB from 'orbit-db'
// import * as IPFS from 'ipfs-core'

// // afterEach(() => {
// //     jest.userRealTimers();
// // })

// const IPFS_CONFIG = {
//     start: true,
//     EXPERIMENTAL: {
//         pubsub: true,
//     },
//     preload: {
//         enabled: false,
//     },
//     config: {
//         Addresses: {
//             Swarm: [
//             ],
//         },
//     },
// }

// let db = null;
// beforeAll(async () => {
//     // jest.setTimeout(100000);
//     const ipfs = await IPFS.create(IPFS_CONFIG)
//     globalThis.orbitdb = await OrbitDB.createInstance(ipfs)
//     const valid_database_mock = jest.fn();
//     globalThis.contract = {
//         valid_database: valid_database_mock
//     }
//     valid_database_mock.mockReturnValue(true)
//     db = await globalThis.orbitdb.docstore('docstore-database-test')
// });

// afterAll(async () => {
//     await db.drop()
//     await globalThis.orbitdb.disconnect()
// })

// // jest.useRealTimers();
// // jest.useFakeTimers('legacy');

// test("Get Function", async () => {
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.put({ _id: "testKey", testValue: "testValue" })
//     const value = docstoreDB.get("testKey")
//     expect(value).toEqual({ _id: "testKey", testValue: "testValue" })
// })

// test("where Function", async () => {
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.put({ _id: "testKey", testValue: "testValue" })
//     const value = docstoreDB.where((doc) => doc.testValue === "testValue")
//     expect(value).toEqual([{ _id: "testKey", testValue: "testValue" }])
// })

// test("Set Function", async () => {
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.set("testKey", "testValue")
// })

// test("Delete Function", async () => {
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.set("testKey", "testValue")
//     docstoreDB.del("testKey")
//     const value = docstoreDB.get("testKey")
//     expect(value).toEqual(undefined)
// })

// test("Update Function", async () => {
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.put({ _id: "testKey", testValue: "testValue" })
//     docstoreDB.update({ _id: "testKey", testValue: "testValue2" })
//     const value = docstoreDB.get("testKey")
//     expect(value).toEqual({ _id: "testKey", testValue: "testValue2" })
// })

// test("Add Function", async () => {
//     // jest.setTimeout(10000);
//     // await longProcess();
//     globalThis.contract.valid_database.mockReturnValueOnce(true);
//     let docstoreDB = await getDocStore(db.address)
//     docstoreDB.add({ _id: "testKey", testValue: "testValue" })
//     const value = docstoreDB.get("testKey")
//     expect(value).toEqual({ _id: "testKey", testValue: "testValue" })
// })