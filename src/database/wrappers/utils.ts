import OrbitDB from 'orbit-db';

// eslint-disable-next-line import/prefer-default-export
export const isValidDatabase = async (address: string) => {
  if (!OrbitDB.isValidAddress(address)) {
    return false;
  }

  const isProjectDatabase = await globalThis.contract.valid_database({ address });
  return isProjectDatabase;
};

export function isValidKey(key:string) {
  return key && typeof key === "string"
}

export function isValidValueObject(value:Object) {
  return value && value instanceof Object
}
