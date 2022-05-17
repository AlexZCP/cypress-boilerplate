describe('Gets info about product', () => {

  let productReference = Cypress.env("products").reference

  context("POST /products/info", () => {
    it("gets info about product", () => {
      cy.request({
        method: "POST",
        url: "products/info",
        headers: { "content-type": "application/json" },
        body: { 
          apikey: Cypress.env("apikey"),
          reference: productReference
       },
      }).then((response) => {
        expect(response.status).to.eq(208);
        expect(response.body.reference).to.eq(productReference)
      });
    });
  });

});
