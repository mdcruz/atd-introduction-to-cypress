/// <reference types="cypress" />

import { resetData, visitSite } from '../../support/hooks'

beforeEach(() => {
  resetData()
  visitSite()
})

// Custom command to be added on cypress/support/commands.js
Cypress.Commands.add('createTodo', (todo) => {
  cy.get('.new-todo').type(`${todo}{enter}`)
})

it('creates a todo', () => {
  cy.createTodo('my first todo')
})
