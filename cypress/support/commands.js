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

const orderQuoteRequest = {
  "apikey": "0739d2965f2368d08bd79044c9f44164",
  "country": "MY",
  "state": "West",
  "items": [
      {
        "reference": "1",
        "product": "photobook_cw_a4_l_fc",
        "count": "1",
        "options": [
          {
            "type": "pageblock_200mcg",
            "count": "1"
          },
          {
            "type": "cover_130mcg",
            "count": "1"
          },
          {
            "type": "cover_finish_matte",
            "count": 1
          },
          {
            "type": "total_pages",
            "count": 119
          },
          {
            "type": "pageblock_finish_none",
            "count": 1
          }
        ]
      }]      
  }

Cypress.Commands.add("order_quote_request", () => {
  cy.request({
    method: 'POST',
    url: 'orders/quote',
    headers: {
      'Content-Type': 'application/json'
    },
    body: orderQuoteRequest
  }).as('orderQuoteRequest');
});
