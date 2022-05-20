import { INVALID_ORDER_COUNT, orderQuoteRequest } from "./misc.js";

describe("Add order quote with invalid quantity", () => {
  orderQuoteRequest.items[0].count = INVALID_ORDER_COUNT;

  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "orders/quote",
      failOnStatusCode: false,
      headers: { "Content-Type": "application/json" },
      body: orderQuoteRequest,
    }).as("orderQuoteRequest");
  });

  it("should get status 400 Bad request", () => {
    cy.get("@orderQuoteRequest").then((orderQuote) => {
      expect(orderQuote.status).to.eq(400);
    });
  });
});
