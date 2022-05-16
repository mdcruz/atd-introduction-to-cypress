# Introduction to Cypress Workshop

https://github.com/mdcruz/atd-introduction-to-cypress

+++

## Marie Drake 👋🏼

- Quality Engineering Manager @ Zoopla
- Previously, Principal Test Automation Engineer @ News UK
- [@mcruzdrake](https://twitter.com/mcruzdrake)
- [mariedrake.com](https://www.mariedrake.com/blog)
- [Testing With Marie](https://www.youtube.com/channel/UC85SalJXUNhWrrvc1NfWTHQ)

+++

## What are we going to learn today? 🤔

+++

![Cypress Logo](./images/cypress-logo.png)

+++

## Structure

- Overview of Todo app
- Starting a new Cypress project
- Overview of basic features
- Writing some basic tests
- Selector Playground
- Introduction to Custom Commands
- Wrap up 🎉

+++

Please: if you have experience with Cypress.io, help others during the workshop 🙏

+++

## How will this workshop works?

1. I'll go over some basic concepts
2. We'll do the exercises together
3. Ask questions!

+++

## Workshop Requirements

You will need:

- `git` to clone this repo
- Node v16+ to install project dependencies
- VSCode or another text editor

```text
git clone https://github.com/mdcruz/atd-introduction-to-cypress
cd atd-introduction-to-cypress
npm install
```

+++

## Let's get started

+++

## Repo organization

- `/todomvc` is a web application we are going to test
- all tests are in `cypress/integration` folder
  - there are subfolders for exercises
    - `01-basic`
    - `02-adding-items`
    - `03-selector-playground`
    - etc
- keep application `todomvc` running!

Note:
We are going to keep the app running, while switching from spec to spec for each part.

+++

## `todomvc`

Let us look at the application.

- `cd todomvc`
- `npm start`
- `open localhost:3001`

**important** keep application running through the entire workshop!

+++

It is a regular TodoMVC application.

![TodoMVC](./images/todomvc.png)

+++

## Questions

- what happens when you add a new Todo item?
- how does it get to the server?
- where does the server save it?

Note:
The learners should open DevTools and look at XHR requests that go between the web application and the server. Also the students should find `todomvc/data.json` file with saved items.

+++

## Let's start the workshop exercises

- Jump to: [00-start](?p=00-start)
