describe('Add order quote with invalid quantity', () => {

  const INVALID_ORDER_COUNT = 101
  let orderQuoteRequestBody = Cypress.env("order_quote_request_body")
  orderQuoteRequestBody.items[0].count = INVALID_ORDER_COUNT
  
beforeEach(() => {
  cy.request({
    method: 'POST',
    url: Cypress.env("url"),
    failOnStatusCode: false,
    headers: {
      'Content-Type': 'application/json'
    },
    body: orderQuoteRequestBody
  }).as('orderQuoteRequest');
});

  it('should get status 400 Bad request', () => {
    cy.get('@orderQuoteRequest').then(orderQuote => {
      expect(orderQuote.status).to.eq(400);
      })
  });
});
