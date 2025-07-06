# GitHub Actions Workflows

## Test Workflow (`test.yml`)

This workflow automatically runs tests on every:
- **Pull Request** to `main` or `master` branches
- **Push** to `main` or `master` branches

### What it does:
1. **Multi-Node Testing** - Tests against Node.js versions 18.x and 20.x
2. **Dependency Installation** - Uses `npm ci` for faster, reliable installs
3. **Test Execution** - Runs the full test suite with coverage
4. **Artifact Upload** - Saves test coverage reports for review

### Test Commands Available:
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode (for development)
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ci` - Run tests for CI (with coverage, no watch mode)

### Coverage Reports:
Coverage reports are generated in the `coverage/` directory and include:
- HTML report (`coverage/lcov-report/index.html`)
- LCOV format for CI tools
- Text summary in console

The workflow will show test results and coverage information directly in the GitHub Actions summary.
