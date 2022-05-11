describe('Add order quote', () => {
  
  beforeEach(() => {
    cy.order_quote_request()
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