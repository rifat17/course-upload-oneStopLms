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
// cypress/support/index.js or similar

import "cypress-file-upload";
import "cypress-xpath";

// Optionally, you can add the following code to enable the XPath aliases (// and ..) globally:
Cypress.Commands.add("enableXpath", () => {
  Cypress.config("xpath", "true");
});

Cypress.Commands.add("login", () => {
  // cy.request({
  //   method: "POST",
  //   url: "https://api.onestoplms.com/qa/auth/authentication/signin",
  //   body: {
  //     medium: "email",
  //     emailOrPhone: "tanvir.hasan@shadhinlab.com",
  //     password: "maverick@07",
  //   },
  // }).then((resp) => {
  //   window.localStorage.setItem("userData", JSON.stringify(resp.body.data));
  // });

  cy.session("login-session", () => {
    cy.visit("https://adminqa.onestoplms.com/");
    cy.get("#email").type("tanvir.hasan@shadhinlab.com");
    cy.get("#pass").type("maverick@07");
    cy.get(":nth-child(1) > .btn").click();
  });
});

Cypress.Commands.add("logout", () => {
  // const accessToken = JSON.parse(
  //   window.localStorage.getItem("userData")
  // ).accessToken;
  // console.log("====================================");
  // console.log(accessToken);
  // console.log("====================================");
  // cy.request({
  //   method: "POST",
  //   url: "https://api.onestoplms.com/qa/auth/authentication/global-logout",
  //   body: {
  //     accessToken,
  //   },
  // }).then((resp) => {
  //   window.localStorage.removeItem("userData");
  // });
});
