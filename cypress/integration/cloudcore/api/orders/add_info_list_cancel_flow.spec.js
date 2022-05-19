import {
  orderRequestBody,
  orderReference,
  orderRequestReference,
} from "./misc.js";

describe("Order flow: add, info, list, cancel", () => {
  // ----------ADD ORDER

  context("POST /orders/add", () => {
    it("creates a new order", () => {
      cy.request({
        method: "POST",
        url: "orders/add",
        headers: { "content-type": "application/json" },
        body: orderRequestBody,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.order).to.eq(orderReference);
      });
    });
  });

  // ----------INFO

  context("POST /orders/info", () => {
    it("retrieves information about order", () => {
      cy.request({
        method: "POST",
        url: "orders/info",
        headers: { "content-type": "application/json" },
        body: orderRequestReference,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.reference).to.eq(orderReference);
      });
    });
  });

  // ----------LIST OF ORDERS

  context("POST /orders", () => {
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

  // ----------CANCEL ORDER

  context("POST /orders/cancel", () => {
    it("cancels existing order", () => {
      cy.request({
        method: "POST",
        url: "orders/cancel",
        headers: { "content-type": "application/json" },
        body: orderRequestReference,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.reference).to.eq(orderReference);
        expect(response.body.status).to.eq(500);
        expect(response.body.state_code).to.eq("order_state_canceled");
      });
    });
  });
});
