import "cypress-localstorage-commands";
// let token1 = '';

describe('API Testing', ()=>{
  before(() => {
    cy.login()
    // cy.getLocalStorage('token').then(token => {
    //   cy.log("TEST TOKEN", token); // I get JWT Token in here
    // });
  });

  // it('Connector T', () =>{

  //   // cy.request({
  //   //   method: 'POST',
  //   //   url: 'https://api.thevividtiger.com/cloudapps/1.0/orders',
  //   //   headers:{
  //   //       'content-type': 'application/json',
  //   //       'Authorization': 'Bearer ef418600bce83d1c9c24433ea45c69bdd4371d38'
  //   //   }
  //   // }).then((response) => {
  //       // cy.setLocalStorage('token', 'Bearer ef418600bce83d1c9c24433ea45c69bdd4371d38' )
  //       cy.getLocalStorage('token').then(token => {
  //         cy.log("TEST TOKEN", token); // I get JWT Token in here
  //       });
  //   // })
  // })

  it('-----------', () => {

    cy.visit('https://quick.thevividtiger.com/orders')
      .wait(2000)

      cy.getLocalStorage('token').then(token => {
        cy.log("QUICK TOKEN", token); // I get JWT Token in here
      });

    cy.get('.button')
      .contains("New order")
      .click()

  }); 
});