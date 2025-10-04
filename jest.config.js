module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(chalk|ora|inquirer|@inquirer|ansi-styles|ansi-regex|strip-ansi|cli-cursor|restore-cursor|cli-spinners|figures|log-symbols|is-unicode-supported|string-width|emoji-regex|is-fullwidth-code-point|wrap-ansi|ansi-colors|ansi-escapes)/)',
  ],
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/index.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
