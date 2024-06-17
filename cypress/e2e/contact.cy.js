/// <reference types="Cypress" />

describe('Contact form', () => {

    it('should submit the form clicking on "Send Message" button', () => {
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
        /* cy.get('[data-cy="contact-btn-submit"]').then((el) => {
            expect(el.attr('disabled')).to.be.undefined
            expect(el.text()).to.contain('Send Message');
        }); */

        
        // Select submit button and check that it is sending inputed data
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending');

        // Select submit button and check that it is disabled while sending data
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');

    });

    it('should submit the form pressing "Enter"', () => {
        cy.visit('http://localhost:5173/about');

        // Select message input field then insert data
        cy.get('[data-cy="contact-input-message"]').type('Message Text');

        // Select name input field then insert data
        cy.get('[data-cy="contact-input-name"]').type('UserName');

        // Select email input field then insert data
        cy.get('[data-cy="contact-input-email"]').type('UserEmail@gmail.com{enter}');

        
        // Select submit button and check that it is sending inputed data
        cy.get('[data-cy="contact-btn-submit"]').contains('Sending');

        // Select submit button and check that it is disabled while sending data
        cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled');

    });

    it.only('should validate the form input', () => {
        cy.visit('http://localhost:5173/about');

        cy.get('[data-cy="contact-btn-submit"]').click()
        cy.get('[data-cy="contact-btn-submit"]').then((el) => {
            expect(el).to.not.have.attr('disabled');
            expect(el.text()).to.not.equal('Sending...');
        });
                                                
    });

});