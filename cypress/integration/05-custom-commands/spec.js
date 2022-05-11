/// <reference types="cypress" />

// TODO: export the `resetData` and `visitSite` as reusable functions from cypress/support/hooks
beforeEach(function resetData() {
  cy.request('POST', '/reset', {
    todos: []
  })
})

beforeEach(function visitSite() {
  cy.visit('/')
})

it('creates a todo', () => {
  // TODO: use a custom cy command to create a new todo
})
