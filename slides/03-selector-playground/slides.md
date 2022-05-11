## ☀️ Part 3: Selector playground

### 📚 You will learn

- Cypress Selector Playground tool
- best practices for selecting elements

+++

- keep `todomvc` app running
- open `03-selector-playground/spec.js`

+++

> How do we select element in `cy.get(...)`?

- Browser's DevTools can suggest selector

+++

![Chrome suggests selector](./images/chrome-copy-js-path.png)

+++

Open "Selector Playground"

![Selector playground button](./images/selector-button.png)

+++

Selector playground can suggest much better selectors.

![Selector playground](./images/selector-playground.png)

+++

⚠️ It can suggest a weird selector

![Default suggestion](./images/default-suggestion.png)

+++

Read [best-practices.html#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)

![Best practice](./images/best-practice.png)

+++

## Todo

- add test data ids to `todomvc/index.html` DOM markup
- use new selectors to write `cypress/integration/03-selector-playground/spec.js`

Note:
The updated test should look something like the next image

+++

![Selectors](./images/selectors.png)

+++

## 🏁 Conclusions

- Use Selector Playground
- follow [https://on.cypress.io/best-practices#Selecting-Elements](https://on.cypress.io/best-practices#Selecting-Elements)

+++

## Let's jump to resetting our application state

Jump to: [04-reset-state](?p=04-reset-state)