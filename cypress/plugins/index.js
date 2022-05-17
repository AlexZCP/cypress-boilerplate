/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  require('cypress-mochawesome-reporter/plugin')(on);

  const readConfig = require('read-config')
  const configWithDotenv = require('dotenv').config();
  if (configWithDotenv.error) {
    throw configWithDotenv.error;
  }

  const envConfig = readConfig(`cypress/integration/${config.env.app_name}/config/env.${config.env.environment}.json`)

  config.env = {...config.env, ...envConfig}

  return config;
}