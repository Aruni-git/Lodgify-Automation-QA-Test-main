context('Lodgify contact page', () => {
  it('Should have the right title', () => {
    cy.visit('http://localhost:3000/Contact.html');
    cy.title().should('include', 'Contact');
  });
})