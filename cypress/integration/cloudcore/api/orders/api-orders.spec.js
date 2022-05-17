describe("Orders API", () => {
  let orderRequestBody = Cypress.env("order_request_body");

  orderRequestBody.reference = "qa" + Math.floor(Math.random() * 99999);
  let orderReference = orderRequestBody.reference;

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

  //----------INFO

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
    it("retrieves an array of orders", () => {
      cy.request({
        method: "POST",
        url: "orders",
        headers: { "content-type": "application/json" },
        body: { apikey: orderRequestBody.apikey },
      }).then((response) => {
        expect(response.status).to.eq(200);
        assert.isArray(response.body, "Order list is an array");
      });
    });
  });

  // ----------ORDER LOGS

  let orderRequestReference = {
    apikey: orderRequestBody.apikey,
    reference: orderReference,
  };

  context("POST /orders/log", () => {
    it("retrieves logs of the order", () => {
      cy.request({
        method: "POST",
        url: "orders/log",
        headers: { "content-type": "application/json" },
        body: orderRequestReference,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body[0].create_date).to.exist;
        expect(response.body[0].state).to.exist;
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
