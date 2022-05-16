describe('Add order', () => {

  let orderRequestBody = Cypress.env('add_order_request_body')
  orderRequestBody.reference = "qa" + Math.floor((Math.random() * 99999));
  
  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/add',
      headers:{
          'content-type': 'application/json',
          'Authorization': Cypress.env('bearer')
      },
      body: orderRequestBody
    }).as('addOrder');
  });

  it('should add order', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(201);
      expect(addOrder.body.reference).to.exist
      })
  });
});