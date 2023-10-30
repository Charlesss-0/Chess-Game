module.exports = {
    // Indicates which test environment to use.
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files.
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],

    // Ignore files or directories in test runs.
    testPathIgnorePatterns: ['/node_modules/'],

    // An array of file extensions your modules use.
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],

    // Module directories to be searched when resolving modules.
    moduleDirectories: ['node_modules'],

    // Transform files before running tests (e.g., Babel for ES6).
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },

    // Additional options for the transform key.
    transformOptions: {
        babel: {
            presets: ['@babel/preset-env', '@babel/preset-react']
        }
    },

    // An array of file names that should be used as setup files before running tests.
    setupFiles: ['<rootDir>/setupTests.js'],

    // Coverage reporting settings.
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],

    // Collect coverage from specific directories.
    coveragePathIgnorePatterns: ['node_modules', 'dist'],

    // Paths to directories that Jest should use to search for files.
    roots: ['<rootDir>'],

    // A map from regular expressions to module names that allow to stub out resources with a single module.
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy'
    }
}
