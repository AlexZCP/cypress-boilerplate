# Cypress test suite

This repo contains the suite of tests for Cloudprinter products written in Cypress.

Additionally this example app is configured to run tests in Circle CI and Travis CI.

The [tests are heavily commented] to ease you into the Cypress API.

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.
**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Clone this repo
You can fork this repo in `Github` or jus clone it, running these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/cloudprintercom/qa-cypress.git

### 3. Install dependencies

## cd into the cloned repo
cd qa-cypres

## install the node_modules
npm install

### 4. Run Cypress UI

## start the local webserver
npm run test
```

### 4. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/getting-started/installing-cypress#Installing)

### 5. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)

## Cypress IntelliSense

If you use modern IDE that supports TypeScript (like VSCode), you can benefit
from Cypress type declarations included with the `cypress` NPM module. Just
add `@ts-check` to the spec file and configure "dummy"
[tsconfig.json](tsconfig.json) file and see IntelliSense over `cy.<something>`
commands.


## Docker Containers
- Cypress API tests

## Init the environment
sh init.sh

## Build the container
sh build.sh

## Run the container and API tests
sh run.sh

## Docker compose commands
docker-compose build
docker-compose up --build
