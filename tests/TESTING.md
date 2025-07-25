# Testing Setup

This project includes Jest tests for the `setgradient` function in `backgroundGenerator.ts`.

## Test Structure

Tests are organized in the `tests/` directory:
- `tests/backgroundGenerator.test.ts` - Tests for the background gradient generator function

## Running Tests

To run the tests:

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To run tests with coverage:

```bash
npm run test:coverage
```

For CI environments:

```bash
npm run test:ci
```

## GitHub Actions Integration

Tests automatically run on:
- **Every Pull Request** to `main`/`master` branches  
- **Every Push** to `main`/`master` branches

The GitHub Actions workflow:
- Tests against Node.js versions 18.x and 20.x
- Generates coverage reports
- Uploads test artifacts  
- Shows results in the PR/commit status

See `.github/workflows/test.yml` for the full configuration.

## Test Coverage

The tests cover:

1. **Basic functionality**: Verifying that the function generates the correct linear gradient CSS string
2. **DOM manipulation**: Testing that the function updates both the element's background style and the CSS text content
3. **Different color combinations**: Ensuring the function works with various color values
4. **Console logging**: Verifying that the first color value is logged to the console
5. **Error handling**: Testing that the function gracefully handles missing DOM elements
6. **CSS format validation**: Ensuring the generated CSS string has the exact expected format

## Test Approach

Since jsdom (the DOM environment used by Jest) doesn't support CSS gradients, the tests use a custom approach:

- Mock the `style.background` setter to capture the CSS string that would be set
- Verify the exact format of the generated gradient string
- Test the DOM element selection and conditional logic

This approach ensures that the function logic is thoroughly tested even though the actual CSS rendering cannot be tested in the jsdom environment.
