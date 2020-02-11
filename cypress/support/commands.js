Cypress.Commands.add('login', (userEmail, publisher_Id, password) => {
  cy.get('input[name="email"]').type(userEmail);
  cy.get("input[name='publisherId']").type(publisher_Id);
  cy.get("input[name='password']").type(password);
  cy.get('[type="submit"]').click();
  cy.url().should("include", "/accounts/");
});


Cypress.Commands.add('changeHeader', (headername) => {
	cy.get(headername).then('.ahead-header_buttonGroup__1wYyM > .button_button__2wZLB:nth-child(1) > svg').click();
	//cy.get('.ahead-header_buttonGroup__1wYyM > .button_button__2wZLB:nth-child(1) > svg').click();
	cy.get('.low-fidelity-layouts_headersComponent__25Mbt:nth-child(1) img').click();

});



import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
