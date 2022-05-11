/// <reference types="cypress" />
/* eslint-disable no-unused-vars */

beforeEach(() => {
  // application should be running at port 3001
  // and the "localhost:3001" is set as "baseUrl" in "cypress.json"
  cy.visit('localhost:3001')
})

it('loads', () => {
  cy.contains('h1', 'todos')
})

it('adds two items', () => {
  addItem('first item')
  addItem('second item')

  
  cy.get('...').should('have.length', 2)
})

/**
 * Adds a todo item
 * @param {string} text
 */
 const addItem = (text) => {
  // write Cy commands here to add the new item
}
