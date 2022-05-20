describe("Get list of shipping countries for the account", () => {
  context("POST /shipping/countries", () => {
    it("gets valid list of shipping countries", () => {
      cy.request({
        method: "POST",
        url: "shipping/countries",
        headers: { "content-type": "application/json" },
        body: { apikey: Cypress.env("apikey") },
      }).then((response) => {
        expect(response.status).to.eq(200);
        assert.isArray(
          response.body,
          "Shipping countries response is an array"
        );

        const actualStructure = response.body[0];

        const actualKeys = Object.keys(actualStructure);

        cy.fixture("shipping_countries_structure.json").then(
          (expectedStructure) => {
            const expectedKeys = Object.keys(expectedStructure);

            const structureIsValid =
              actualKeys.length == expectedKeys.length &&
              actualKeys.every(function (element, index) {
                return element === expectedKeys[index];
              });

              console.log("expectedKeys", expectedKeys)

            assert.isTrue(
              structureIsValid,
              "Shipping countries response structure is valid"
            );
          }
        );
      });
    });
  });
});
