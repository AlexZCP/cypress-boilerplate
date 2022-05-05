describe('User is able to login to admin dashboard', () => {

  it('Logins to admin', () => {
    let loginUrl = Cypress.env('thevividtiger') + "/#common/login/"

    cy.visit(loginUrl)

    cy.get('.js__username')
      .type(Cypress.env('dashboard_user').email)
      .should('have.value', Cypress.env('dashboard_user').email)

    cy.get('.js__password')
      .type(Cypress.env('dashboard_user').password)
      .should('have.value', Cypress.env('dashboard_user').password)

    cy.get('.btn-alt')
    .contains('Login')
    .click()

    cy.url().should('include', '#bluecloud/dashboard')
  });
});

