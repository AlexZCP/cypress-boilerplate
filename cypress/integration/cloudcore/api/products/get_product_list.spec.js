describe("Get list of products", () => {
  context("POST /products", () => {
    it("gets list of products", () => {
      cy.request({
        method: "POST",
        url: "products",
        headers: { "content-type": "application/json" },
        body: { apikey: Cypress.env("apikey") },
      }).then((response) => {
        expect(response.status).to.eq(200);
        assert.isArray(response.body, "Products response is an array");
      });
    });
  });
});
