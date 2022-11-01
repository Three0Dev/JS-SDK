import { getCounter } from './counter'
import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs-core'
import { getKeyValue } from './keyvalue'
import { getDocStore } from './docstore'


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
let ipfs = null;

beforeAll(async () => {
	ipfs = await IPFS.create(IPFS_CONFIG)
	globalThis.orbitdb = await OrbitDB.createInstance(ipfs)

	const valid_database_mock = jest.fn();

	globalThis.contract = {
		valid_database: valid_database_mock
	}

	valid_database_mock.mockReturnValue(true)
});

describe('Counter Testing', () => {

    beforeAll(async () => {
        db = await globalThis.orbitdb.counter('counter-database-test')
    });

    afterAll(async () => {
        await db.drop()
        await globalThis.orbitdb.disconnect()
    })

    test("Initial Value 0", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let counterDB = await getCounter(db.address)
        const value = counterDB.get()
        expect(value).toEqual(0)
    })

    test("Increment with no Parameter", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let counterDB = await getCounter(db.address)
        await counterDB.inc()
        const value = counterDB.get()
        expect(value).toEqual(1)
    })

    test("Increment -1", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let counterDB = await getCounter(db.address)
        try{
            await counterDB.inc(-1)
        }catch(e){
            expect(e.message).toEqual("Valid amount is required")
        }
    })

    // // https://stackoverflow.com/questions/47144187/can-you-write-async-tests-that-expect-tothrow#:~:text=You%20can%20test%20your%20async,I%20should%20fail')%3B%20%7D)%3B
    test("Increment 0", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let counterDB = await getCounter(db.address)
        try{
            await counterDB.inc(0)
        }catch(e){
            expect(e.message).toEqual("Valid amount is required")
        }
    })

    test("Invalid Database Address", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        try{
            await getCounter("123abc")
        }catch(e){
            expect(e.message).toEqual("Invalid database address")
        }
    })

    test("Invalid OrbitDB", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        try{
            await getCounter("123abc", null)
        }catch(e){
            expect(e.message).toEqual("OrbitDB is not initialized")
        }
    })

  });

  describe('Keyvalue Testing', () => {

    beforeAll(async () => {
        db = await globalThis.orbitdb.keyvalue('keyvalue-database-test')
    });

    afterAll(async () => {
        await db.drop()
        await globalThis.orbitdb.disconnect()
    })
    
    test("Get Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        let key = "testKey"
        let value = "testValue"
        await keyvalueDB.set(key, value)
        let returnValue = keyvalueDB.get("testKey")
        expect(returnValue).toEqual(value)
    })

    test("Get Function with Null Key", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        try{
            await keyvalueDB.get(null)
        } catch (e){
            expect(e.message).toEqual("Key is required")
        }
    })

    test("Get All Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        await keyvalueDB.set("testKey", "testValue")
        const value = keyvalueDB.getAll()
        expect(value).toEqual({"testKey": "testValue"})
    })

    test("Set Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        keyvalueDB.set("testKey", "testValue")
     })

     test("Set Function with Null Key", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        try{
            await keyvalueDB.set(null, "testValue")
        }catch(e){
            expect(e.message).toEqual("Key is required")
        }
     })

    test("Delete Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        await keyvalueDB.set("testKey", "testValue")
        await keyvalueDB.delete("testKey")
        const value = keyvalueDB.get("testKey")
        expect(value).toEqual(undefined)
    })

    test("Delete Function with Null Key", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        try{
            await keyvalueDB.delete(null)
        }catch(e){
            expect(e.message).toEqual("Key is required")
        }
     })

    test("Instance Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        expect(keyvalueDB.instance()).not.toBeNull()
     })

     test("On Change Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let keyvalueDB = await getKeyValue(db.address)
        let isChanged = false
        keyvalueDB.set("testKey", "testValue")
        keyvalueDB.onChange(
            isChanged = true
        )
        expect(isChanged).toEqual(true)
     })

     test("Invalid Database Address", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        try{
            await getKeyValue("123abc")
        }catch(e){
            expect(e.message).toEqual("Invalid database address")
        }
    })

    test("Invalid OrbitDB", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        try{
            await getKeyValue("123abc", null)
        }catch(e){
            expect(e.message).toEqual("OrbitDB is not initialized")
        }
    })

  });

  describe('Docstore Testing', () => {

    beforeAll(async () => {
        db = await globalThis.orbitdb.docstore('docstore-database-test')
    });

    afterAll(async () => {
        await db.drop()
        await globalThis.orbitdb.disconnect()
    })

    test("Get Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        await docstoreDB.set("testKey", {"value": 'testValue'})
        const value = docstoreDB.get("testKey")
        var expectedDictionary = {}
        expectedDictionary = {"_id": "testKey", "value": "testValue"}
        expect(value).toEqual(expectedDictionary)
    })

    test("Get Function with Null Key", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        try{
            await docstoreDB.get(null)
        } catch (e){
            expect(e.message).toEqual("Key is required")
        }
    })

    test("Set Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        await docstoreDB.set("testKey", {"value": 'testValue'})
    })

    test("Delete Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        await docstoreDB.set("testKey", {"value": 'testValue'})
        await docstoreDB.delete("testKey")
        const value = docstoreDB.get("testKey")
        expect(value).toEqual(undefined)
    })

    test("Add Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        await docstoreDB.add({ _id: "testKey", testValue: "testValue" })
        const value = docstoreDB.get("testKey")
        expect(value).toEqual({ _id: "testKey", testValue: "testValue" })
    })

    test("where Function", async () => {
        globalThis.contract.valid_database.mockReturnValueOnce(true);
        let docstoreDB = await getDocStore(db.address)
        await docstoreDB.add({ _id: "testKey", testValue: "testValue" })
        const value = docstoreDB.where((doc) => doc.testValue === "testValue")
        expect(value).toEqual([{ _id: "testKey", testValue: "testValue" }])
    })
    
    // TODO: Fix the internal put function: "The provided document doesn't contain field '_id'"
    // test("Update Function", async () => {
    //     globalThis.contract.valid_database.mockReturnValueOnce(true);
    //     let docstoreDB = await getDocStore(db.address)
    //     await docstoreDB.set("testKey", {"value": 'testValue'})
    //     await docstoreDB.update("testKey", {"value": "testValue2"})
    //     const value = docstoreDB.get("testKey")
    //     var expectedDictionary = {}
    //     expectedDictionary = {"_id": "testKey", "value": "testValue2"}
    //     expect(value).toEqual(expectedDictionary)
    // })
 });