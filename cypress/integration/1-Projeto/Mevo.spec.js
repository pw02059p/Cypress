/// <reference types="cypress" />


describe('Mevo', () => {
    before(() => {
       cy.visit('https://farmacias-staging.mevosaude.com.br/')
    })
    
    it('Validacao', () => {
        cy.get('[data-testid="code-access"] > .shadow-layer-0')
        .click() 
        cy.get('[data-testid="token-input"]')
        .type('NXT6WYD')
        cy.get('#pin-input-1-0').type('0')
        cy.get('#pin-input-1-1').type('9')
        cy.get('#pin-input-1-2').type('5')
        cy.get('#pin-input-1-3').type('7')
        cy.get('.css-1xc6u01 > .sc-jSgupP').click()
    });
        
});
