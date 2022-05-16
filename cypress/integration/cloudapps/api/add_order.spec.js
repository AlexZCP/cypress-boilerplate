describe('Add order', () => {
  
  before(() => {
    // cy.add_order_request()
    cy.request({
      method: 'POST',
      url: 'orders/add',
      headers:{
          'content-type': 'application/json',
          'Authorization': Cypress.env('bearer')
      },
      body: Cypress.env('add_order_request_body')
    }).as('addOrder');
  });

  it('should add order', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(201);
      expect(addOrder.body.reference).to.exist
      })
  });
});