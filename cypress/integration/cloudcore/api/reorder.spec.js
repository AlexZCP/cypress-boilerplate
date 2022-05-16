describe('Make reorder', () => {

  let orderRequestBody = Cypress.env('order_request_body')
  orderRequestBody.reference = "qa" + Math.floor((Math.random() * 99999))
  orderRequestBody.items[0]['items : reorder_cause'] = "Item shipped but never received"
  let reorderCause = orderRequestBody.items[0]['items : reorder_cause']
  
  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/add',
      headers:{
          'content-type': 'application/json'
      },
      body: orderRequestBody
    }).as('addReOrder');
  });

  it('should get 201 status', () => {
    cy.get('@addReOrder').then(addReOrder => {
      expect(addReOrder.status).to.eq(201);
      expect(addReOrder.body.order).to.eq(orderRequestBody.reference)
      })
  });
});
