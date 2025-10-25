<!---BADGE_TESTED-WITH-CYPRESS-->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!--BADGE_CYPRESS-WORKFLOW-OUTCOME-->
![outcome](https://img.shields.io/badge/test-cancelled-yellow)

## Getting Started

This repository demonstrates a Next.js project with end-to-end tests powered by Cypress.

### Requirements
- Node.js >= 16
- npm or yarn
- Git

### Install
1. Clone the repo:
    git clone <repo-url>
2. Install dependencies:
    npm install
    # or
    yarn install

### Available Scripts
- npm run dev — Start Next.js dev server (http://localhost:3000)
- npm run build — Build production bundle
- npm run start — Start production server
- npm run test:e2e — Open Cypress Test Runner
- npm run test:e2e:run — Run Cypress tests headlessly

Add these scripts to package.json if missing:
```json
{
  "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "test:e2e": "cypress open",
     "test:e2e:run": "cypress run"
  }
}
```

### Running Cypress
1. Start the app in a terminal:
    npm run dev
2. In another terminal, open Cypress:
    npm run test:e2e
3. To run headless in CI:
    npm run test:e2e:run

### Writing Tests
Place tests under cypress/e2e/*.cy.js. Example checks:
- Page loads
- Navigation works
- Forms submit correctly

### CI Tips
- Start the app (npm run build && npm run start) before running cypress run
- Use --record and projectId for Cypress Dashboard integration

### Contributing
Contributions welcome. Open issues or PRs with clear descriptions and test cases.

### License
Specify your license in LICENSE file (e.g., MIT).