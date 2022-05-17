describe('Get order log', () => {

 let orderLogRequest = Cypress.env('get_order_info_request')

  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'orders/log',
      headers:{
          'content-type': 'application/json'
      },
      body: orderLogRequest
    }).as('orderLog');
  });

  it('should get 200 status', () => {
    cy.get('@orderLog').then(orderLog => {
      expect(orderLog.status).to.eq(200)
      })
  });

  it('should get the order state and date created', () => {
    cy.get('@orderLog').then(orderLog => {
      expect(orderLog.body[0].create_date).to.exist;
      expect(orderLog.body[0].state).to.exist
      })
  });
});
