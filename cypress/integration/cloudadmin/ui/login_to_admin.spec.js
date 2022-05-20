describe('User is able to login to admin dashboard', () => {

  it('Logins to admin', () => {
    cy.log(`!!!!!!!!TEST: ${Cypress.env('url')}`)
    let loginUrl = Cypress.env('url') + "#common/login/"

    cy.visit(loginUrl)

    cy.get('.js__username')
      .type(Cypress.env('dashboard_user').email)
      .should('have.value', Cypress.env('dashboard_user').email)

    cy.get('.js__password')
      .type(Cypress.env('dashboard_user').password)
      .should('have.value', Cypress.env('dashboard_user').password)

    cy.get('.text-right > .btn-alt')
      .contains('Login')
      .click()
      .wait(2000)

    cy.url().should('include', 'dashboard')
  });
});

