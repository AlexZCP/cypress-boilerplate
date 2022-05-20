import { orderRequestBody, orderReference } from "./misc.js";

describe("Add order with valid quantity", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: "orders/add",
      headers: {  "content-type": "application/json" },
      body: orderRequestBody,
    }).as("addOrder");
  });

  it("should get 201 status", () => {
    cy.get("@addOrder").then((addOrder) => {
      expect(addOrder.status).to.eq(201);
      expect(addOrder.body.order).to.eq(orderReference);
    });
  });
});
