/// <reference types="cypress" />

describe('hello world', () => {
  it('displays hello world', () => {
    cy.visit('https://www.helloworld.org/')
    cy.get('h1').should('have.text', "Hello World")
  })
})
