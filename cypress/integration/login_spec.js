import { LoginPage } from "../pageObject/login_page";

const login = new LoginPage();

describe('/login', () => {
  beforeEach(() => {
    cy.visit('/');

  });

  it('verifies sign in', () => {
    cy.get(login.userEmail).type(Cypress.env('userEmail'));
    cy.get(login.publisher).type(Cypress.env('publisher_Id'));
    cy.get(login.password).type(Cypress.env('password'));
    cy.get(login.submit).click();
    cy.url().should("include", "/accounts/");
  });

  it('Verify mandatory fields for publisher_id, email and password', () => {
    cy.get(login.userEmail).each($el => { cy.wrap($el).should("have.attr", "required"); });
    cy.get(login.password).each($el => { cy.wrap($el).should("have.attr", "required"); });
    cy.get(login.publisher).each($el => { cy.wrap($el).should("have.attr", "required"); });
  });

  it('Verify proper email-id in userEmail field', () => {
    cy.get(login.userEmail).each($el => { cy.wrap($el).should('have.attr', 'type', 'email'); });

  });

  it('requires valid username and password', () => {
    cy.get(login.userEmail).type("Cypress@gmail.com");
    cy.get(login.publisher).type(Cypress.env('publisher_Id'));
    cy.get(login.password).type(Cypress.env('password'));
    cy.get(login.submit).click();
    cy.wait(3000);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Incorrect email`)
    })

  });

  it('Verify denied access to unregistered user', () => {
    cy.get(login.userEmail).type(Cypress.env('userEmail'));
    cy.get(login.publisher).type("09");
    cy.get(login.password).type(Cypress.env('password'));
    cy.get(login.submit).click();
    cy.wait(3000);
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`You don't have access to the requested publisher`)
    })
  });


  //Home Page under development.
  //  it('navigates to home page', () => { });


});
