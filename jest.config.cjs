const nextJest = require(`next/jest`);

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: `./`,
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: [`node_modules`, `<rootDir>/`],
	testEnvironment: `jest-environment-jsdom`,
	moduleNameMapper: {
		'^@pages/(.*)$': `<rootDir>/src/components/pages/$1`,
		'^@ui/(.*)$': `<rootDir>/src/components/ui/$1`,
		'^@helpers/(.*)$': `<rootDir>/src/helpers/$1`,
		'@types': `<rootDir>/src/types`,
		'@enums': `<rootDir>/src/enums`,
		'@interfaces': `<rootDir>/src/interfaces`,
	},
	setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
	testPathIgnorePatterns: [`src/e2e`],
	resolver: `<rootDir>/jest.resolver.js`,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
