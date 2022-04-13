/// <reference types="cypress" />

describe('Mevo-Validacao', () => {
    before(() => {
        cy.visit('https://farmacias-staging.mevosaude.com.br/')
    })

    it('Login', () => {
        cy.get('[data-testid="code-access"] > .shadow-layer-0')
            .click()
        cy.get('[data-testid="token-input"]')
            .type('NXT6WYD')
        cy.get('#pin-input-1-0').type('0')
        cy.get('#pin-input-1-1').type('9')
        cy.get('#pin-input-1-2').type('5')
        cy.get('#pin-input-1-3').type('7')
        cy.get('.shadow-layer-1').children().contains('Consultar receita').click()
    })

    it('Validar-Mensagem', () => {
        cy.get('.glow-focus')
            .contains('Dispensar receita').click()
        cy.get('#chakra-modal-36')
            .contains('Nenhum medicamento selecionado')
        cy.get('#chakra-modal-36')
            .contains('Selecione o(s) medicamento(s) para seguir com a dispensação')
        cy.get('#chakra-modal-36')
            .children()
            .contains('Entendi').click()
    })
})
