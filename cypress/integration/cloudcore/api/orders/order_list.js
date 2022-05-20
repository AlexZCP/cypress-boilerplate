describe("POST /orders", () => {
  it("retrieves an array of orders with latest created order", () => {
    cy.request({
      method: "POST",
      url: "orders",
      headers: { "content-type": "application/json" },
      body: { apikey: Cypress.env("apikey") },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].reference).to.eq(orderReference);
      assert.isArray(response.body, "Order list is an array");
    });
  });
});
