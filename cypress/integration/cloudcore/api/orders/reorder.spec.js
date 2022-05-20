import { orderRequestBody, orderReference } from "./misc.js";

describe("Make reorder", () => {
  orderRequestBody.reference = "reorder-" + orderReference;
  orderRequestBody.items[0]["items : reorder_cause"] =
    "Item shipped but never received";

  before(() => {
    cy.request({
      method: "POST",
      url: "orders/add",
      headers: { "content-type": "application/json" },
      body: orderRequestBody,
    }).as("addReOrder");
  });

  it("should get 201 status", () => {
    cy.get("@addReOrder").then((addReOrder) => {
      expect(addReOrder.status).to.eq(201);
      expect(addReOrder.body.order).to.eq(orderRequestBody.reference);
    });
  });
});
