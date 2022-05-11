/// <reference types="cypress" />
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

beforeEach(() => {
  cy.visit('localhost:3001')
})

it('loads', () => {
  cy.contains('h1', 'todos')
})

it('adds two items', () => {
  cy.get('.new-todo').type('first item{enter}')
  cy.contains('li.todo', 'first item').should('be.visible')
  cy.get('.new-todo').type('second item{enter}')
  cy.contains('li.todo', 'second item').should('be.visible')
  cy.get('li.todo').should('have.length', 2)
})

it('can mark an item as completed', () => {
  // adds a few items
  addItem('simple')
  addItem('hard')

  // marks the first item as completed
  cy.contains('li.todo', 'simple').should('exist').find('.toggle').check()

  // confirms the first item has the expected completed class
  cy.contains('li.todo', 'simple').should('have.class', 'completed')
  // confirms the other items are still incomplete
  cy.contains('li.todo', 'hard').should('not.have.class', 'completed')
})

it('can delete an item', () => {
  // adds a few items
  addItem('simple')
  addItem('hard')
  // deletes the first item
  cy.contains('li.todo', 'simple')
    .should('exist')
    .find('.destroy')
    // use force: true because we don't wsnt to hover
    .click({ force: true })

  // confirm the deleted item is gone from the dom
  cy.contains('li.todo', 'simple').should('not.exist')
  // confirm the other item still exists
  cy.contains('li.todo', 'hard').should('exist')
})

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
