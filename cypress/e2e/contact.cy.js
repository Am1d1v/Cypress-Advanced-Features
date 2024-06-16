/// <reference types="Cypress" />

describe('Contact form', () => {

    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');

        // Select message input field then insert data
        cy.get('[data-cy="contact-input-message"]').type('Message Text');

        // Select name input field then insert data
        cy.get('[data-cy="contact-input-name"]').type('UserName');

        // Select email input field then insert data
        cy.get('[data-cy="contact-input-email"]').type('UserEmail@gmail.com');

        // Select submit button then click it
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
        cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').click();
        
        // Select submit button and check that it is sending inputed data
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending');

        // Select submit button and check that it is disabled while sending data
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');

    });

});