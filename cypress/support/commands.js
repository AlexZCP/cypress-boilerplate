// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import "cypress-localstorage-commands";

Cypress.Commands.add("order_quote_request", () => {
  cy.request({
    method: 'POST',
    url: 'orders/quote',
    headers: {
      'Content-Type': 'application/json'
    },
    body: Cypress.env('cloudcore').order_quote_request_body
  }).as('orderQuoteRequest');
});
