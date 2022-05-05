// https://api.cloudprinter.com/cloudadmin/1.0/bluecloud/products

describe('Products Core API testing', () => {

  it('Verifies that product list structure response is valid', () => {
    
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
      
      const expectedStructure = {
        id: "1860",
        organization_group_id: "940",
        name: "Alu wall decor 1000x1000 mm FC",
        note: "Aluminum wall decoration 1000x1000 mm Full Color",
        reference: "wall_decor_1000x1000_alu_fc",
        category_type_id: "25",
        sub_category_type_id: "42",
        product_line_id: "1",
        state: "1",
        product_line: "Advanced",
        sub_category_type: "Wall decoration - Aluminium",
        organization_group_name: "Product profiles - PA"
      };

      let expectedKeys = Object.keys(expectedStructure);

      let actualStructure = products.body.collection[1]

      let actualKeys = Object.keys(actualStructure);

      let result = actualKeys.length == expectedKeys.length && actualKeys.every(function(element, index) {
        return element === expectedKeys[index]; 
      });

      // if result is true - then all keys in product list response data is as expected
        expect(result).to.be.true
    });
  });
});