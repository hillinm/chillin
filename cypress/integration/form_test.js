/* eslint-disable no-undef */
describe('test our form inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })
    it('add texts to inputs and submit form', () => {
        cy.get('[data-cy=name]').type('Mark Hillin').should('have.value', 'Mark Hillin');
        cy.get('[data-cy=email]').type('mark.hillin@gmail.com').should('have.value', 'mark.hillin@gmail.com');
        cy.get('[data-cy=password]').type('Pa$$word123').should('have.value', 'Pa$$word123');
        cy.get('[data-cy=passwordConfirm]').type('Pa$$word123').should('have.value', 'Pa$$word123');
        cy.get('#role').select('Hacker').should('have.value', 'Hacker');
        cy.get('[type=checkbox]').check().should('be.checked');
        cy.get('[data-cy=submit]').click();
    });
});