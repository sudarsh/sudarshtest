import "../support/commands";

it("takes a screenshots", () => {
  cy.visit("http://pagebuilder.staging.quintype.com");
  cy.signup({ email: "test@quintype.com", id: "97", password: "ytleWkqLYn" });
  cy.wait(4000);
  cy.changeHeader("1"); //use the header number as in the list
  cy.document().toMatchImageSnapshot();
});
