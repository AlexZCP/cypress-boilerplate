describe("Get list of shipping levels", () => {
  context("POST /shipping/levels", () => {
    it("gets valid list of shipping levels", () => {
      cy.request({
        method: "POST",
        url: "shipping/levels",
        headers: { "content-type": "application/json" },
        body: { apikey: Cypress.env("apikey") },
      }).then((response) => {
        expect(response.status).to.eq(200);
        assert.isArray(response.body, "Shipping levels response is an array");

        const actualStructure = response.body[0];

        const actualKeys = Object.keys(actualStructure);

        cy.fixture("shipping_levels_structure.json").then(
          (expectedStructure) => {
            const expectedKeys = Object.keys(expectedStructure);

            const structureIsValid =
              actualKeys.length == expectedKeys.length &&
              actualKeys.every(function (element, index) {
                return element === expectedKeys[index];
              });

            assert.isTrue(structureIsValid, "Shipping levels response structure is valid");
          }
        );
      });
    });
  });
});
