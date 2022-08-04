/// <reference types="cypress" />

describe('hello world', () => {
  it('displays hello world', () => {
    cy.visit('https://www.helloworld.org/')
    cy.get('h1').should('have.text', "Hello World")
  })

  it('visit site on host', () => {
    cy.visit('/hello')
    cy.request({
      method: 'GET',
      url: '/hello',
    }).then(({ status }) => {
      expect(status).to.eq(200)
    })
  });
})
