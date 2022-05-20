describe('Category types Core API testing', () => {

  it('Fetches Category types - POST', () => {
    
    cy.request({
      method: 'POST',
      url: 'bluecloud/category_types',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-s': Cypress.env('xAuthS'),
        'x-auth-u': Cypress.env('xAuthU')
      }
    }).as('categoryTypesRequest');
    cy.get('@categoryTypesRequest').then( items => {
        expect(items.status).to.eq(200);
        assert.isArray(items.body.collection, 'Category types response is an array');
    });

  });

});