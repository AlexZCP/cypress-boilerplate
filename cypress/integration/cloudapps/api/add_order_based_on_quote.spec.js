describe("Add order based on quote", () => {
  const quoteResponse = Cypress.env("add_quote");
  
  const orderRequestBody = Cypress.env("add_order_request_body_based_on_quote");
  
  orderRequestBody.reference = "qa" + Math.floor(Math.random() * 99999);
  // orderRequestBody.items[0].reference = 123
  // orderRequestBody.items[0].quote = 123

  it("should add order", () => {
    cy.request({
      method: "POST",
      url: "orders/add",
      headers: {
        "content-type": "application/json",
        Authorization: Cypress.env("bearer"),
      },
      body: orderRequestBody,
    });
    expect(addOrder.status).to.eq(201);
    expect(addOrder.body.reference).to.exist;
  });
});
