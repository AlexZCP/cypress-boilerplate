describe('Add order with invalid quantity', () => {

  const INVALID_ORDER_COUNT = 1001
  let orderRequestBody = Cypress.env('order_request_body')
  orderRequestBody.reference = "qa" + Math.floor((Math.random() * 99999));
  orderRequestBody.items[0].count = INVALID_ORDER_COUNT
  
  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/add',
      failOnStatusCode: false,
      headers:{
          'content-type': 'application/json'
      },
      body: orderRequestBody
    }).as('addOrder');
  });

  it('should get status 400 Bad request', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(201);
      })
  });
});