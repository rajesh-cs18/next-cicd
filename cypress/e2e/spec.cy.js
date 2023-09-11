describe('Greeting Component', () => {
  it('displays the greeting', () => {
    const web_url = Cypress.env('weburl');
    cy.visit(web_url);
    cy.get('[data-cy=greeting]').contains('Hello, Next.js!');
  });
});
