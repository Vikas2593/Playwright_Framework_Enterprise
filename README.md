# Playwright Framework for OrangeHRM

## Overview
This is an enterprise-level Playwright framework for testing the [OrangeHRM](https://opensource-demo.orangehrmlive.com/) website. It includes:

- TypeScript support
- Custom reporting
- CI/CD integration (GitHub Actions)
- Docker support
- Accessibility and performance testing
- Logging and error handling
- Default reporting and Parallelism

## Getting Started

### Prerequisites
- Node.js (v18+)
- Docker
- GitHub account

### Installation
1. Clone the repository
2. Run `npm install`
3. Run `npm test` to execute tests

### Running Tests
- `npm test` - Run all tests
- `npm test:ui` - Run tests in UI mode
- `npm test:report` - Generate test report
- `npm test:docker` - Run tests in Docker container

## Configuration

- `testConfig.ts` - Contains test environment configuration
- `playwright.config.ts` - Playwright configuration
- `CustomReporterConfig.ts` - Custom logging configuration

## Reporting
- Allure reports are generated in the `reports/allure` directory
- Ortoni reports are generated in the `reports/ortoni` directory

## Contributing
Contributions are welcome! Please open an issue or pull request for any changes or improvements.
