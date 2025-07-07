## Project Structure

- **index.html**: The main HTML file containing the structure of the website.
- **assets/css**: Directory containing CSS files for styling the website.
- **assets/js**: Directory containing JavaScript and TypeScript files for additional functionality.
- **tests/**: Directory containing Jest test files for testing TypeScript functionality.
- **.github/workflows/**: Directory containing GitHub Actions workflows for CI/CD.

## Features

### About Me
- Detailed information about myself, including skills, certifications, and exams.

### Voice Acting 
- Features my character and commercial demo reel for voice acting. 

### CSS Background Generator
- An interactive tool to generate CSS gradients by selecting two colors. The generated CSS is displayed and applied to the background in real-time.

#### How It Works
1. The user selects two colors using color input fields.
2. TypeScript captures the selected colors and generates a CSS linear gradient.
3. The generated CSS gradient is displayed in a `<code>` element.
4. The background of the section is updated in real-time to reflect the selected gradient.

### Contact
- Contact information including email and LinkedIn profile link.

## Development and Testing

### TypeScript
This project uses TypeScript for enhanced type safety and better development experience. TypeScript files are located in the `assets/js/` directory and are configured with a `tsconfig.json` file for compilation settings.

### Testing with Jest
The project includes comprehensive testing using Jest with the following features:
- **Test Framework**: Jest with TypeScript support via ts-jest
- **Test Environment**: jsdom for DOM testing
- **Coverage Reports**: HTML and LCOV coverage reports generated in the `coverage/` directory
- **Test Scripts**:
  - `npm test`: Run tests once
  - `npm run test:watch`: Run tests in watch mode
  - `npm run test:coverage`: Run tests with coverage reporting
  - `npm run test:ci`: Run tests suitable for CI environments

### GitHub Actions CI/CD
The project uses GitHub Actions for automated testing and deployment:

#### Testing Workflow (`.github/workflows/test.yml`)
- Runs on every push and pull request to main/master branches
- Tests against Node.js versions 18.x and 20.x
- Automatically installs dependencies and runs the test suite
- Uploads test coverage artifacts for review

#### Deployment Workflow (`.github/workflows/static.yml`)
- Automatically deploys the site to GitHub Pages on pushes to the main branch
- Can also be triggered manually from the Actions tab
- Uploads the entire repository as a static site artifact

## How to Use

1. Clone the repository to your local machine.
2. Install dependencies: `npm install`
3. Open `index.html` in a web browser to view the website.
4. Use the navigation links to explore different sections of the site.
5. In the CSS Background Generator section, pick two colors to see the gradient effect and the corresponding CSS code.

### Development
- Run tests: `npm test`
- Run tests with coverage: `npm run test:coverage`
- Run tests in watch mode during development: `npm run test:watch`

## License

This project is licensed under the Creative Commons Attribution 3.0 License. For more details, see [html5up.net/license](http://html5up.net/license).

## Acknowledgements

- Design by [HTML5 UP](http://html5up.net)
- This site uses the "Astral" theme by HTML5 UP, which has been modified to fit my needs.

