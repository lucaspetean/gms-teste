/// <reference types="cypress"/>

describe('US-001 Funcionalidade: Busca de filmes', () => {
  it('Deve buscar no campo de busca o(s) filme(s)', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('Matrix')
    cy.get('#search-button').click()
    cy.get('#results-section').children().should('have.length.greaterThan',0)
  //  cy.get('#results-section').children().each(($el) => {
  //    cy.wrap($el).should('contain.text', 'Matrix');
  //  });
    cy.get('#clear-button').click()
  })
})

describe('US-012 Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Dante')
    cy.get('#signup-lastname').type('Sampaio')
    cy.get('#signup-email').type('dante2@teste.com')
    cy.get('#signup-phone').type('16992807060')
    cy.get('#signup-password').type('Teste@2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})

describe('US-012 Funcionalidade: Recomendações do dia', () => {
  it('Deve mostrar novos filmes recomendados todos os dias', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations').children().should('have.length.greaterThan',3)
  })
})