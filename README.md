# Noah Jenkins – Personal Portfolio

[![Build Status](https://github.com/noahjenkins/about-me-site/actions/workflows/test.yml/badge.svg)](https://github.com/noahjenkins/about-me-site/actions)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A personal portfolio website showcasing Noah Jenkins' work in voice acting and web development. Features include an interactive CSS background generator, audio demos, and full Progressive Web App (PWA) support.

**[Live Demo](https://noahjenkins.com/)**

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [PWA Support](#pwa-support)
- [Development and Testing](#development-and-testing)
- [How to Use](#how-to-use)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Project Structure

- **index.html**: Main HTML file for the website.
- **assets/css/**: CSS files for styling.
- **assets/js/**: JavaScript and TypeScript files for functionality.
- **assets/audio/**: Demo reels for voice acting.
- **assets/webfonts/**: FontAwesome webfonts.
- **images/**: Icons and images for the site and PWA.
- **tests/**: Jest test files for TypeScript.
- **.github/workflows/**: GitHub Actions workflows for CI/CD.
- **manifest.json**: Web App Manifest for PWA.
- **sw.js**: Service Worker for offline support.
- **offline.html**: Offline fallback page.

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

## PWA Support

This site is a full Progressive Web App (PWA):

- **Installable**: Add to your device home screen.
- **Offline Support**: Works offline via service worker and offline fallback page.
- **App-like Experience**: Standalone display mode and custom icons.
- **Fast Loading**: Assets are cached for performance.
- **Install Prompt**: Smart install button appears when appropriate.
- **Connection Status**: Shows online/offline notifications.

See [`PWA-README.md`](PWA-README.md) for setup, testing, and customization details.

## Development and Testing

### TypeScript

TypeScript is used for type safety and maintainability. Source files are in `assets/js/` and configured via `tsconfig.json`.

### Testing with Jest

- **Framework**: Jest with TypeScript (ts-jest)
- **Environment**: jsdom for DOM testing
- **Coverage**: HTML and LCOV reports in `coverage/`
- **Scripts**:
  - `npm test`: Run tests once
  - `npm run test:watch`: Watch mode
  - `npm run test:coverage`: Coverage reporting
  - `npm run test:ci`: CI-friendly test run

### GitHub Actions CI/CD

- **Testing**: Runs on push/PR to main/master, Node.js 18.x/20.x, uploads coverage.
- **Deployment**: Deploys to GitHub Pages on push to main.

## How to Use

1. Clone the repository.
2. Install dependencies: `npm install`
3. Open `index.html` in a browser.
4. Explore the site using navigation links.
5. Try the CSS Background Generator by picking two colors.

### Development

- Run tests: `npm test`
- Coverage: `npm run test:coverage`
- Watch mode: `npm run test:watch`

## Contribution

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

The "Astral" theme and design elements are © [HTML5 UP](http://html5up.net) and used under their license. See [html5up.net/license](http://html5up.net/license) for details.

## Acknowledgements

- Design by [HTML5 UP](http://html5up.net)
- "Astral" theme, modified for this site.
