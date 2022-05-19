import { hardcodedOrderReferenceRequest } from "./misc.js";

describe("Get order log", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "orders/log",
      headers: { "content-type": "application/json" },
      body: hardcodedOrderReferenceRequest,
    }).as("orderLog");
  });

  it("POST /orders/log", () => {
    cy.get("@orderLog").then((orderLog) => {
      expect(orderLog.status).to.eq(200);
      expect(orderLog.body[0].reference).to.eq(
        hardcodedOrderReferenceRequest.reference
      );
      expect(orderLog.body[0].create_date).to.exist;
      expect(orderLog.body[0].state).to.exist;
    });
  });
});
