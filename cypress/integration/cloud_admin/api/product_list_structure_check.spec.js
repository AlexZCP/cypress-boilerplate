describe('Products Core API testing', () => {

  it('Verifies that product list structure response is as expected', () => {
    
    cy.request({
      method: 'POST',
      url: 'bluecloud/products',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-s': Cypress.env('xAuthS'),
        'x-auth-u': Cypress.env('xAuthU')
      }
    }).as('productsRequest');
    
    cy.get('@productsRequest').then(products => {

      let actualStructure = products.body.collection[1]

      let actualKeys = Object.keys(actualStructure);

      cy.fixture('product_list_structure.json').then((expectedStructure) => {
        let expectedKeys = Object.keys(expectedStructure);

        let productListStructureIsValid = 
          actualKeys.length == expectedKeys.length && actualKeys.every(function(element, index) {
            return element === expectedKeys[index]; 
        });

        expect(productListStructureIsValid).to.be.true
      })
    });
  });
});