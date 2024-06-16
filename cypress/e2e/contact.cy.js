/// <reference types="Cypress" />

describe('Contact form', () => {

    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');

        // Select message input field then insert data
        cy.get('[data-cy="contact-input-message"]').type('Message Text');

        // Select name input field then insert data
        cy.get('[data-cy="contact-input-name"]').type('UserName');

        // Select name input field then insert data
        cy.get('[data-cy="contact-input-email"]').type('UserEmail@gmail.com');

        // Select submit button then click it
        cy.get('[data-cy="contact-btn-submit"]').click();
    });

});