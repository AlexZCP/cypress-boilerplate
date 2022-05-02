describe('Products Core API testing', () => {

  it('Fetches product items - POST', () => {
    
    cy.request({
      method: 'POST',
      url: 'bluecloud/products',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-s': Cypress.env('x-auth-s'),
        'x-auth-u': Cypress.env('x-auth-u')
      }
    }).as('productsRequest');
    cy.get('@productsRequest').then(products => {
        expect(products.status).to.eq(200);
        assert.isArray(products.body.collection, 'Products response is an array');
    });

  });

});