describe("Get list of shipping states for the account", () => {
  context("POST /shipping/states", () => {
    it("gets valid list of shipping states", () => {
      cy.log(Cypress.env("shipping").state_reference);
      cy.request({
        method: "POST",
        url: "shipping/states",
        headers: { "content-type": "application/json" },
        body: {
          apikey: Cypress.env("apikey"),
          state_reference: Cypress.env("shipping").state_reference,
        },
      }).then((response) => {

        expect(response.status).to.eq(200);
        assert.isArray(response.body, "Shipping states response is an array");

        const actualStructure = response.body[0];
        
        const actualKeys = Object.keys(actualStructure);

        cy.fixture("shipping_states_structure.json").then(
          (expectedStructure) => {
            const expectedKeys = Object.keys(expectedStructure);

            const structureIsValid =
              actualKeys.length == expectedKeys.length &&
              actualKeys.every(function (element, index) {
                return element === expectedKeys[index];
              });

            assert.isTrue(
              structureIsValid,
              "Shipping states response structure is valid"
            );
          }
        );
      });
    });
  });
});
