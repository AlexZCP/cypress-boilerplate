describe('Cancel order', () => {

 let orderCancelRequest = Cypress.env('get_order_info_request')

  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/cancel',
      headers:{
          'content-type': 'application/json'
      },
      body: orderCancelRequest
    }).as('orderCancel');
  });

  it('should cancel the correct order', () => {
     cy.get('@orderCancel').then(orderCancel => {
        expect(orderCancel.status).to.eq(200)
        expect(orderCancel.body.reference).to.eq(orderCancelRequest.reference)
        expect(orderCancel.body.status).to.eq(500)
        expect(orderCancel.body.state_code).to.eq("order_state_canceled")
      })
   });  
});
