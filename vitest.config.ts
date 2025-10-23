import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use Node environment for these library tests
    environment: 'node',
    // Provide globals like describe/it/expect without importing in each test
    globals: true,
    // Co-located tests
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov', 'text', 'text-summary'],
      reportsDirectory: 'coverage',
      // Limit coverage scope to sources
      all: true,
      include: ['src/**/*.{ts,tsx}'],
    },
  },
});
