/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  // application should be running at port 3001
  cy.visit('localhost:3001')

  // this assertion fails on purpose
  // can you fix it?
  // https://on.cypress.io/get
  cy.contains('h1', 'Todo app')

  // also good practice is to use data attributes specifically for testing
  // see https://on.cypress.io/best-practices#Selecting-Elements
  // which play well with "Selector Playground" tool
  // how would you select this element using a custom data attribute?
})
