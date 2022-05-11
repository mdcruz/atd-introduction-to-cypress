/// <reference types="cypress" />
beforeEach(() => {
  cy.visit('/')
})

it('loads', () => {
  cy.contains('h1', 'todos')
})

// to enable this test need to add appropriate "data-cy" attributes
it('adds two items', () => {
  addItem('first item')
  addItem('second item')

  cy.get('[data-cy="todo-list"]').should('have.length', 2)
})

const addItem = (text) => {
  cy.get('[data-cy="new-input-todo"]').type(`${text}{enter}`)
}