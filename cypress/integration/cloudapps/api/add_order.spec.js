describe('Add order', () => {
  
  before(() => {
    cy.add_order_request()
  });

  it('should add order', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(201);
      expect(addOrder.body.reference).to.exist
      })
  });
});