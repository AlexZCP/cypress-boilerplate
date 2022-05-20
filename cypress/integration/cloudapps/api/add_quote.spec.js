describe("Add order quote", () => {
  context("POST /orders/quote", () => {
    it("adds quote", () => {
      cy.request({
        method: "POST",
        url: "orders/quote",
        headers:{
          'content-type': 'application/json',
          'Authorization': Cypress.env('bearer')
      },
        body: Cypress.env("add_quote"),
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.subtotals).to.exist;
        expect(response.body.shipments[0].quotes[0].quote).to.exist;
      });
    });
  });
});
