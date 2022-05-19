import { hardcodedOrderReferenceRequest } from "./misc.js";

describe("Get order info", () => {
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "orders/info",
      headers: {  "content-type": "application/json" },
      body: hardcodedOrderReferenceRequest,
    }).as("orderInfo");
  });

  it("should get 200 status", () => {
    cy.get("@orderInfo").then((orderInfo) => {
      expect(orderInfo.status).to.eq(200);
      expect(orderInfo.body.reference).to.eq(
        hardcodedOrderReferenceRequest.reference
      );
    });
  });
});
