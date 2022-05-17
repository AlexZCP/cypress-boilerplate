describe('Add order quote', () => {
  
beforeEach(() => {
  cy.request({
    method: 'POST',
    url: Cypress.env("url"),
    headers: {
      'Content-Type': 'application/json'
    },
    body: Cypress.env("order_quote_request_body")
  }).as('orderQuoteRequest');
});

  it('should get status 200', () => {
    cy.get('@orderQuoteRequest').then(orderQuote => {
      expect(orderQuote.status).to.eq(200);
      })
  });

  it('should verify vat value', () => {
    cy.get('@orderQuoteRequest').then(orderQuote => {
        expect(orderQuote.body.vat).to.eq("0.0000");
      })
  });
});
