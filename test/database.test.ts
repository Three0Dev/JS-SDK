/* eslint-disable no-underscore-dangle */
import OrbitDB from 'orbit-db'
import * as IPFS from 'ipfs-core'
import { IPFSOptions } from 'ipfs-core/src/components/network'
import Store from 'orbit-db-store'
import { Counter, DocStore, KeyValue, timestamp } from '../src/database'

const IPFS_CONFIG: IPFSOptions = {
	start: true,
	EXPERIMENTAL: {
		ipnsPubsub: true,
	},
	preload: {
		enabled: false,
	},
	config: {
		Addresses: {
			Swarm: [],
		},
	},
}

let db: Store
let ipfs: IPFS.IPFS

beforeAll(async () => {
	ipfs = await IPFS.create(IPFS_CONFIG)
	globalThis.orbitdb = await OrbitDB.createInstance(ipfs)

	const invalidDatabaseMock = jest.fn()
	invalidDatabaseMock.mockReturnValue(Promise.resolve(true))
	globalThis.contract = {
		valid_database: invalidDatabaseMock,
	}
})

afterAll(async () => {
	await globalThis.orbitdb.stop()

	setTimeout(async () => {
		await ipfs.stop()
	}, 0)
})

describe('Counter Testing', () => {
	beforeAll(async () => {
		db = await globalThis.orbitdb.counter('counter-database-test')
	})

	afterAll(async () => {
		await db.drop()
	})

	test('Invalid Database from Contract', async () => {
		globalThis.contract.valid_database.mockReturnValueOnce(
			Promise.resolve(false)
		)

		await expect(Counter(db.address.toString())).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Invalid OrbitDB', async () => {
		const { orbitdb } = globalThis
		globalThis.orbitdb = null as unknown as OrbitDB

		await expect(Counter(db.address.toString())).rejects.toThrow(
			'OrbitDB is not initialized'
		)

		globalThis.orbitdb = orbitdb
	})

	test('Invalid Database Address', async () => {
		await expect(Counter('invalid-address')).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Initial Value 0', async () => {
		const counterDB = await Counter(db.address.toString())
		const value = counterDB.get()
		expect(value).toEqual(0)
	})

	test('Increment with no Parameter', async () => {
		const counterDB = await Counter(db.address.toString())
		await counterDB.inc()
		const value = counterDB.get()
		expect(value).toEqual(1)
	})

	test('Increment -1', async () => {
		const counterDB = await Counter(db.address.toString())
		try {
			await counterDB.inc(-1)
		} catch (e) {
			expect(e).toEqual(Error('Valid amount is required'))
		}
	})

	test('Increment 10', async () => {
		const counterDB = await Counter(db.address.toString())
		await counterDB.inc(10)
		const value = counterDB.get()
		expect(value).toEqual(11)
	})
})

describe('Keyvalue Testing', () => {
	beforeAll(async () => {
		db = await globalThis.orbitdb.keyvalue('keyvalue-database-test')
	})

	afterAll(async () => {
		await db.drop()
	})

	test('Invalid Database from Contract', async () => {
		globalThis.contract.valid_database.mockReturnValueOnce(
			Promise.resolve(false)
		)

		await expect(KeyValue(db.address.toString())).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Invalid OrbitDB', async () => {
		const { orbitdb } = globalThis
		globalThis.orbitdb = null as unknown as OrbitDB

		await expect(KeyValue(db.address.toString())).rejects.toThrow(
			'OrbitDB is not initialized'
		)

		globalThis.orbitdb = orbitdb
	})

	test('Invalid Database Address', async () => {
		await expect(KeyValue('invalid-address')).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Get with empty key', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		try {
			await keyvalueDB.get('')
		} catch (e) {
			expect(e).toEqual(Error('Key is required'))
		}
	})

	test('Get & Set Function', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		const key = 'testKey'
		const value = 'testValue'
		await keyvalueDB.set(key, value)
		const returnValue = keyvalueDB.get('testKey')
		expect(returnValue).toEqual(value)
	})

	test('Get All Function', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		await keyvalueDB.set('testKey2', 'testValue2')
		const value = keyvalueDB.getAll()
		expect(value).toEqual({ testKey: 'testValue', testKey2: 'testValue2' })
	})

	test('Set Function', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		keyvalueDB.set('testKey', 'testValue')
	})

	test('Set with empty key', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		try {
			await keyvalueDB.set('', 'value')
		} catch (e) {
			expect(e).toEqual(Error('Key is required'))
		}
	})

	test('Delete Function', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		await keyvalueDB.set('testKey', 'testValue')
		await keyvalueDB.delete('testKey')
		const value = keyvalueDB.get('testKey')
		expect(value).toEqual(undefined)
	})

	test('Delete with empty key', async () => {
		const keyvalueDB = await KeyValue(db.address.toString())
		try {
			await keyvalueDB.delete('')
		} catch (e) {
			expect(e).toEqual(Error('Key is required'))
		}
	})
})

describe('Docstore Testing', () => {
	beforeAll(async () => {
		db = await globalThis.orbitdb.docstore('docstore-database-test')
	})

	afterAll(async () => {
		await db.drop()
	})

	test('Invalid Database from Contract', async () => {
		globalThis.contract.valid_database.mockReturnValueOnce(
			Promise.resolve(false)
		)

		await expect(DocStore(db.address.toString())).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Invalid OrbitDB', async () => {
		const { orbitdb } = globalThis
		globalThis.orbitdb = null as unknown as OrbitDB

		await expect(DocStore(db.address.toString())).rejects.toThrow(
			'OrbitDB is not initialized'
		)

		globalThis.orbitdb = orbitdb
	})

	test('Invalid Database Address', async () => {
		await expect(DocStore('invalid-address')).rejects.toThrow(
			'Invalid database address'
		)
	})

	test('Delete Function', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.delete(expectedDictionary._id)
		const value = docstoreDB.get(expectedDictionary._id)
		expect(value).toEqual(undefined)
	})

	test('Empty where function', async () => {
		const docstoreDB = await DocStore(db.address.toString())
		const value = docstoreDB.where(() => true)

		expect(value).toEqual([])
	})

	test('Get & Set Function', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		const value = docstoreDB.get(expectedDictionary._id)
		expect(value).toEqual(expectedDictionary)
	})

	test('Get Function with No Key', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const expectedDictionary2 = { _id: 'testKey2', value: 'testValue2' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.set(expectedDictionary2._id, {
			value: expectedDictionary2.value,
		})
		const value = docstoreDB.get()
		expect(value).toEqual([expectedDictionary, expectedDictionary2])
	})

	test('Delete Function with No Key', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})

		try {
			await docstoreDB.delete('')
		} catch (e) {
			expect(e).toEqual(Error('Key is required'))
		}
	})

	test('where Function', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const expectedDictionary2 = { _id: 'testKey2', value: 'testValue2' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.set(expectedDictionary2._id, {
			value: expectedDictionary2.value,
		})

		const value = docstoreDB.where((doc: any) => doc.value === 'testValue')
		expect(value).toEqual([{ _id: 'testKey', value: 'testValue' }])
	})

	test('where Function with Invalid Function', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const expectedDictionary2 = { _id: 'testKey2', value: 'testValue2' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.set(expectedDictionary2._id, {
			otherValue: expectedDictionary2.value,
		})

		const value = docstoreDB.where(
			(doc: any) => doc.value === expectedDictionary.value
		)
		expect(value).toEqual([{ _id: 'testKey', value: 'testValue' }])

		const value2 = docstoreDB.where(
			(doc: any) => doc.otherValue === expectedDictionary.value
		)
		expect(value2).toEqual([])
	})

	test('Update Function', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const expectedDictionary2 = { _id: 'testKey2', value: 'testValue2' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.set(expectedDictionary2._id, {
			value: expectedDictionary2.value,
		})

		await docstoreDB.update(expectedDictionary._id, {
			value: expectedDictionary2.value,
		})
		const value = docstoreDB.get(expectedDictionary._id)
		expect(value).toEqual({
			_id: expectedDictionary._id,
			value: expectedDictionary2.value,
		})

		const value2 = docstoreDB.get(expectedDictionary2._id)
		expect(value2).toEqual(expectedDictionary2)
	})

	test('Update Function with No Key', async () => {
		const expectedDictionary = { _id: 'testKey', value: 'testValue' }
		const expectedDictionary2 = { _id: 'testKey', value: 'testValue2' }

		const docstoreDB = await DocStore(db.address.toString())
		await docstoreDB.set(expectedDictionary._id, {
			value: expectedDictionary.value,
		})
		await docstoreDB.set(expectedDictionary2._id, {
			value: expectedDictionary2.value,
		})

		try {
			await docstoreDB.update('', {
				value: expectedDictionary2.value,
			})
		} catch (e) {
			expect(e).toEqual(Error('Key is required'))
		}
	})

	test('Add Function', async () => {
		const expectedDictionary = { value: 'testValue' }
		const docstoreDB = await DocStore(db.address.toString())
		const id = await docstoreDB.add(expectedDictionary)
		const value = docstoreDB.get(id)
		expect(value).toEqual({ _id: id, ...expectedDictionary })
	})
})

test('timestamp', async () => {
	const newSystemTime = new Date('2020-01-01T00:00:00.000Z')
	jest.useFakeTimers().setSystemTime(newSystemTime)
	const time = timestamp()
	expect(time).toEqual(newSystemTime.getTime())
})
