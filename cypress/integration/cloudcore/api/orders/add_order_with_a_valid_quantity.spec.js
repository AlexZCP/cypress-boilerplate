describe('Add order with invalid quantity', () => {

  let orderRequestBody = Cypress.env('order_request_body')
  orderRequestBody.reference = "qa" + Math.floor((Math.random() * 99999));
  
  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/add',
      headers:{
          'content-type': 'application/json'
      },
      body: orderRequestBody
    }).as('addOrder');
  });

  it('should get 201 status', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(201);
      expect(addOrder.body.order).to.eq(orderRequestBody.reference)
      })
  });
});
