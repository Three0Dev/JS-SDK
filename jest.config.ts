import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testMatch: ['**/*.test.ts'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testTimeout: 200000,
	testEnvironment: 'node',
}

export default config
