describe('Get order info', () => {
  
 let orderInfoRequest = Cypress.env('get_order_info_request')

  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/info',
      headers:{
          'content-type': 'application/json'
      },
      body: orderInfoRequest
    }).as('orderInfo');
  });

  it('should get 200 status', () => {
    cy.get('@orderInfo').then(orderInfo => {
      expect(orderInfo.status).to.eq(200);
      expect(orderInfo.body.reference).to.eq(orderInfoRequest.reference)
      })
  });
});
