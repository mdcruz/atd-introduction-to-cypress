## ☀️ Part 2: Adding items tests

### 📚 You will learn

- common commands for working with elements
- organizing test code using Mocha hooks

+++

## What kind of tests?

- discussion: what would you test in the TodoMVC app?

Note:
Longer tests, adding items then deleting one for example. Adding items via GUI and observing communication with the server. Adding items then reloading the page.

+++

- keep `todomvc` app running
- open `cypress/integration/02-adding-items/spec.js` in your text editor
- click file `02-adding-items/spec.js` in Cypress

+++

## ⚠️ Todo items

**Note:** the tests we are about to write are NOT resetting the previously added Todo items. Delete the Todo items before each test manually.

We will reset the previously saved Todo items in section "4 Reset State".

+++

```js
it.only('adds two items', () => {
  //visit the application

  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  // cy.get(...).should('have.length', 2)
  // cy.contains(...).should('be.visible')
})
```

**tip** use `cy.get`, `cy.type`, `cy.contains`, remember `https://on.cypress.io/<command>`

Note:
Draw distinction between commands and assertions, show how commands can be chained,
each continues to work with the subject of the previous command. Assertions do
not change the subject.

+++

## Todo: mark first item completed

```js
it.only('can mark an item as completed', () => {
  // visit the application

  // adds two todo items
  // marks the first item as completed 
    // cy.contains(...).find(..).click()
  // confirms the first item has the expected completed class
    // cy.contains(...).should('have.class', 'completed)
  // confirms the other items are still incomplete
})
```

+++

## Refactor code 1/3

- visit the page before each test

Note:
Avoid duplicate `cy.visit('localhost:3001')` command at the start of each test.

+++

## Refactor code 2/3

- move the url into `cypress.json`

**tip** look at [https://on.cypress.io/configuration](https://on.cypress.io/configuration)

+++

## Refactor code 3/3

- make a helper function to add todo item

**tip**: it is just JavaScript

Note:
Move `addItem` function into a separate file and import from the spec file. It is just JavaScript, and Cypress bundles each spec file, so utilities can have `cy...` commands too!

+++

## Todo: delete an item

```js
it.only('can delete an item', () => {
  // add two todo items
  // deletes the first item
  // to delete, use force: true when clicking because we don't want to hover
  // confirm the deleted item doesn't exist anymore
  // confirm the other item still exists
})
```

+++

## Bonus

Unit tests vs end-to-end tests

### Unit tests

```js
import add from './add'
test('add', () => {
  expect(add(2, 3)).toBe(5)
})
```

- arrange - action - assertion
- describing how code works

+++

### End-to-end tests

```js
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('can mark items as completed', () => {
  addItem('simple')
  addItem('hard')

  // marks the first item as completed
  cy.contains('li.todo', 'simple').should('exist').find('.toggle').check()

  // confirms the first item has the expected completed class
  cy.contains('li.todo', 'simple').should('have.class', 'completed')
  // confirms the other items are still incomplete
  cy.contains('li.todo', 'hard').should('not.have.class', 'completed')
})
```

- describing how code is used by the user

Note:
Revisit the discussion about what kind of tests one should write. E2E tests can cover a lot of features in a single test, and that is a recommended practice. If a test fails, it is easy to debug it, and see how the application looks during each step.

+++

### Bonus

- Core concepts [https://on.cypress.io/writing-and-organizing-tests](https://on.cypress.io/writing-and-organizing-tests)

+++

Organize tests using folder structure and spec files

```text
cypress/integration/
  featureA/
    first-spec.js
    second-spec.js
  featureB/
    another-spec.js
    errors-spec.js
```

+++

Organize tests inside a spec using Mocha functions

```js
describe('Feature A', () => {
  beforeEach(() => {})

  it('works', () => {})

  it('handles error', () => {})

  // context is alias of describe
  context('in special case', () => {
    it('starts correctly', () => {})

    it('works', () => {})
  })
})
```

+++

## 🏁 Conclusions

- Write your tests like a user
- go through UI
- validate the application after actions

+++

## Let's jump to learning about Selector Playground

Jump to: [03-selector-playground](?p=03-selector-playground)