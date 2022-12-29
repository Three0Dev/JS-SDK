import OrbitDB from 'orbit-db'

let orbitdbInstance: OrbitDB

export function getOrbitDBInstance(): OrbitDB {
	return orbitdbInstance
}

export function setOrbitDBInstance(orbitdb: OrbitDB) {
	orbitdbInstance = orbitdb
}
