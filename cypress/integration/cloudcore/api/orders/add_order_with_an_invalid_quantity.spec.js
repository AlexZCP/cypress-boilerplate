import { INVALID_ORDER_COUNT, orderRequestBody } from './misc.js';

describe('Add order with invalid quantity', () => {

  orderRequestBody.items[0].count = INVALID_ORDER_COUNT
  
  before(() => {
    cy.request({
      method: 'POST',
      url: 'orders/add',
      failOnStatusCode: false,
      headers:{  'content-type': 'application/json' },
      body: orderRequestBody
    }).as('addOrder');
  });

  it('should get status 400 Bad request', () => {
    cy.get('@addOrder').then(addOrder => {
      expect(addOrder.status).to.eq(400);
      })
  });
});