#!/usr/bin/env node

const messages = {
  'lint-start': '🔍 Linting code...',
  'lint-success': '✅ Linting passed - code looks great!',
  'build-start': '🏗️  Building Skaflo...',
  'build-success': '✅ Build completed successfully!',
  'build-clean-start': '🧹 Cleaning build directory...',
  'test-start': '🧪 Running tests...',
  'test-success': '✅ All tests passed!',
  'test-coverage-start': '📊 Running tests with coverage...',
  'test-coverage-success': '✅ Tests completed with coverage report!',
  'test-watch-start': '👀 Starting test watch mode...',
  'typecheck-start': '🔍 Type checking...',
  'typecheck-success': '✅ Type checking passed - no type errors!',
  'format-start': '💅 Formatting code...',
  'format-success': '✅ Code formatted successfully!',
  'format-check-start': '👀 Checking code formatting...',
  'format-check-success': '✅ Code formatting is correct!',
  'lint-fix-start': '🔧 Fixing linting issues...',
  'lint-fix-success': '✅ Linting fixes applied!',
  'quality-start': '🚀 Running quality checks...',
  'quality-success': '🎉 All quality checks passed!',
  'dev-start': '👀 Starting development mode...'
};

const messageKey = process.argv[2];
const message = messages[messageKey];

if (message) {
  console.log(message);
} else {
  console.log(`Unknown message key: ${messageKey}`);
  process.exit(1);
}