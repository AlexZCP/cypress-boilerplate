import { orderQuoteRequest } from "./misc.js";

describe("Add order quote", () => {
  context("POST /orders/quote", () => {
    it("adds quote", () => {
      cy.request({
        method: "POST",
        url: "orders/quote",
        headers: { "content-type": "application/json" },
        body: orderQuoteRequest,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.vat).to.eq("0.0000");
        expect(response.body.shipments[0].quotes[0].quote).to.exist;
      });
    });
  });
});
