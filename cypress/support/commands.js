Cypress.Commands.add("signup", user => {
  cy.get("[class=text-field_text-field-input__3z0cU]").type(user.email);
  cy.get("[class=number-field_number-field-input__23oye]").type(user.id);
  cy.get("[class=password-field_password-field-input__28J3g]").type(
    user.password
  );
  cy.get("[data-test-id=emButton]").click();
});

Cypress.Commands.add(`changeHeader`, headerOption => {
  cy.get(
    ".ahead-header_buttonGroup__1wYyM > :nth-child(1) > .iconButton_button__FS8x1"
  ).click();
  cy.get(
    `:nth-child(${headerOption}) > .low-fidelity-layouts_headersImgWrapper__1DIqy`
  ).click();
});
