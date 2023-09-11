describe('Greeting Component', () => {
  it('displays the greeting', () => {
    cy.visit('/');
    cy.get('[data-cy=greeting]').contains('Hello, Next.js!');
  });
});
