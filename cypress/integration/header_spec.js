it('takes header screenshots', () => {
  cy.visit('/');
  cy.login('test@quintype.com','97','ytleWkqLYn');
  cy.changeHeader('header1');
  cy.logochange('logo1');
  cy.sociallink('social-icon-group-1');
  cy.headerbgcolor1('colorContainer-1');
  cy.hedertextcolor1('3');
  cy.headerbgcolor2('2');
  cy.hedertextcolor2('1');
  cy.get('.btn').click(); //Subscription
  cy.get('.btn').click(); //login
  cy.get('.btn').click(); //save
  cy.wait(2000);
  cy.matchImageSnapshot('header1');
});

