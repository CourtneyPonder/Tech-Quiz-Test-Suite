# Tech-Quiz-Test-Suite

This application underscores the importance of ensuring reliability and robustness in modern web applications through comprehensive testing. In today's dynamic development environment, testing is not just an afterthought but a critical part of the development process that ensures applications meet user demands and perform efficiently under various conditions.

## User Story

```
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

## Technologies

The testing will use CypressLinks to an external site. to run both the component tests and the end-to-end tests. The testing will be invoked using the following command:

```
npm run test
```

My directory structure looks like the following example:

```
.
├── client/                 // the client application
├── cypress/                // Folder for Cypress
    ├── component/          // Folder for component tests
        └── Quiz.cy.jsx     // Component tests for the Quiz component
    ├── e2e/                // Folder for end-to-end tests
        └── quiz.cy.js      // End-to-end tests for the Tech Quiz
    ├── fixtures/           // Folder for test fixtures
        └── questions.json  // Mock data for testing
    └── tsconfig.json
├── server/                 // the server application
├── .gitignore
├── cypress.config.ts       // Runs the application using imports from lib/
├── package.json
├── tsconfig.json
└── README.md              // App description, link to video, setup and usage instructions
```

## References

I had some help with bootcamp course info, chatGPT, and stackoverflow

## GitHub and Video

```
https://github.com/CourtneyPonder/Tech-Quiz-Test-Suite
https://drive.google.com/file/d/13jhycht1ohPimLM8qlqgZym07MGFACUu/view?usp=sharing

```
