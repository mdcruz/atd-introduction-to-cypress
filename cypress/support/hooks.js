// little reusable functions for our tests
// like "resetData" and "visitSite"

export function resetData () { 
  cy.request('POST', '/reset', {
    todos: []
  })
}
export function visitSite () { 
  cy.visit('/')
}
