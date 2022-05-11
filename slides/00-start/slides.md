## ☀️ Starting new projects

### 📚 You will learn

- Cypress folder structure
- Writing first test
- Setting up intelligent code completion
- Cypress documentation

+++

## Todo: make a new project and add Cypress

Create a new folder

- `cd /tmp`
- `mkdir example`
- `cd example`
- `npm init --yes`
- `npm install -D cypress`

+++

### How to open Cypress

```
npx cypress open
$(npm bin)/cypress open
node_modules/.bin/cypress open
```

+++

In `package.json` I usually have

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

And I use `npm run cy:open`

+++

![First time you open Cypress](./images/cypress-scaffold.png)

+++

- "cypress.json" - all Cypress settings
- "cypress/integration" - test files (specs)
- "cypress/fixtures" - mock data
- "cypress/plugins" - extending Cypress
- "cypress/support" - shared commands, utilities

Note:
This section shows how Cypress scaffolds its files and folders. Then the students can ignore this folder. This is only done once to show the scaffolding.

+++

Look at the scaffolded example test files (specs).

Run specs for topics that look interesting

+++

## First spec

Create a new file

- `cypress/integration/spec.js`

+++

Type into the `spec.js`

```js
it('loads', () => {
  cy.visit('localhost:3001')
})
```

+++

- make sure you have started TodoMVC in another terminal with `npm start`
- click on "spec.js" in Cypress GUI

+++

## Questions

- what does Cypress do?
- what happens when the server is down?
  - stop the application server running in folder `todomvc`
  - reload the tests

+++

## Switch browser

![Switch browser](./images/switch-browser.png)

+++

```js
/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3001')
})
```

- why do we need `reference types ...` line?

Note:
By having "reference" line we tell editors that support it (VSCode, WebStorm) to use TypeScript definitions included in Cypress to provide intelligent code completion. Hovering over any `cy` command brings helpful tooltips.

+++

## IntelliSense

![IntelliSense in VSCode](./images/cy-get-intellisense.png)

+++

Every Cypress command and every assertion

![Should IntelliSense](./images/should-intellisense.jpeg)

+++

Using `ts-check`

```js
/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  cy.visit('localhost:3001')
})
```

- what happens if you add `ts-check` line and misspell `cy.visit`?

Note:
The check works really well in VSCode editor. I am not sure how well other editors support Cypress type checks right out of the box.

+++

## Docs

Your best friend is [https://docs.cypress.io/](https://docs.cypress.io/)

![Doc search](./images/docs-search.png)

+++

## What can you find at docs.cypress.io?

- Cypress main features and how it works docs
- core concepts
- [command API](https://on.cypress.io/api)
- examples
  - recipes
  - tutorial videos
  - example applications
  - blogs
  - FAQ
- Cypress changelog and roadmap

Note:
Students should know where to find information later on. Main resources is the api page [https://on.cypress.io/api](https://on.cypress.io/api)

+++

## 🏁 Conclusions

- use IntelliSense
- use Cypress Docs [https://docs.cypress.io/](https://docs.cypress.io/)

+++

## Let's jump to exploring basic Cypress commands

Jump to: [01-basic](?p=01-basic)
