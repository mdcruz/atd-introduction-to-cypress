/// <reference types="cypress" />
it('loads', () => {
  // application should be running at port 3001
  cy.visit('localhost:3001')
  cy.contains('h1', 'todos')
})

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

it('adds two items', () => {
  //visit the application

  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  // cy.get(...).should('have.length', 2)
  // cy.contains(...).should('be.visible')
})

it('can mark an item as completed', () => {
  // visit the application

  // add two todo items
  // marks the first item as completed 
    // cy.contains(...).find(..).click()
  // confirms the first item has the expected completed class
    // cy.contains(...).should('have.class', 'completed)
  // confirms the other items are still incomplete
})

it('can delete an item', () => {
  // add two todo items
  // deletes the first item
  // to delete, use force: true when clicking because we don't want to hover
  // confirm the deleted item doesn't exist anymore
  // confirm the other item still exists
})