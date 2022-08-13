// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	injectGlobals: true,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
