// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import "cypress-localstorage-commands";

const user_data ={
  "status": {
      "read": 1
  },
  "organization": {
      "name": "CloudPrinter QA",
      "type": 2,
      "access": 2,
      "network_mode": 1,
      "subscription": 1,
      "payment": 3,
      "hash": "6d14a09d37eb2926a4af7f4fa309adc5784a8cf4c18c1ab75713ee0375d20ccb"
  },
  "account": null,
  "user": {
      "name": "Test Account",
      "email": "c8@cloudprinter.com",
      "login_count": 1511,
      "login_date": "2022-05-09 06:25:35"
  },
  "features": []
}

const auth_data = {
  "access_token": "ef418600bce83d1c9c24433ea45c69bdd4371d38",
  "expires_in": 31536000,
  "token_type": "Bearer",
  "scope": "read-write",
  "refresh_token": "807688b785479acd8130fc5167da38b351879353"
}

Cypress.Commands.add('login', () => { 
  cy.request({
    method: 'POST',
    url: 'https://api.thevividtiger.com/cloudapps/1.0/orders',
    headers:{
        'content-type': 'application/json',
        'Authorization': 'Bearer ef418600bce83d1c9c24433ea45c69bdd4371d38'
    }
  }).then((response) => {
    // cy.setLocalStorage('token',response.body.token.authorization )
    cy.setLocalStorage('auth_data', JSON.stringify(auth_data) )
    cy.setLocalStorage('user_data', JSON.stringify(user_data) )
    // cy.getLocalStorage('token').then(token => {
    //   cy.log("the token", token); // I get JWT Token in here
    // });
  })
});


//STRUCTURE WORKS
// Cypress.Commands.add('login', () => { 
//   cy.request({
//     method: 'POST',
//     url: 'https://api.thevividtiger.com/cloudapps/1.0/orders',
//     headers:{
//         'content-type': 'application/json',
//         'Authorization': 'Bearer ef418600bce83d1c9c24433ea45c69bdd4371d38'
//     }
//   }).then((response) => {
//     // cy.setLocalStorage('token',response.body.token.authorization )
//     cy.setLocalStorage('token', 'Bearer ef418600bce83d1c9c24433ea45c69bdd4371d38' )
//     // cy.getLocalStorage('token').then(token => {
//     //   cy.log("the token", token); // I get JWT Token in here
//     // });
//   })
// });
