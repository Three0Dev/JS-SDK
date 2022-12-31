import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	verbose: true,
	testMatch: ['**/*.test.ts'],
	testTimeout: 200000,
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
}

export default config
