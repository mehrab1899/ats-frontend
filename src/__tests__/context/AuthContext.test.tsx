// jest.config.ts
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup/jest.setup.ts'],
    testMatch: ['<rootDir>/src/__tests__/**/*.test.ts?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
