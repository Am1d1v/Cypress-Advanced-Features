/// <reference types="Cypress" />

describe('page navigation', () => {

  it('should navigate between pages', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="header-about-link"]').click();

    // Verify that we successfully switched to the new page 
    cy.location('pathname').should('equal', '/about')
  });

})