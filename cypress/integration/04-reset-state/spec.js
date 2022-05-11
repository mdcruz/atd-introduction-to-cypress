/// <reference types="cypress" />
/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

describe('reset data using XHR call', () => {
  it('adds two items', () => {
    // TODO use cy.request and call /reset endpoint with POST method and object {todos: []}
    cy.visit('/')

    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})

describe('reset data using cy.exec', () => {
  it('adds two items', () => {
    // TODO use cy.exec to call command to reset database
    cy.visit('/')

    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})
