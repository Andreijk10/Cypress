/// <reference types="cypress" />

import 'cypress-file-upload';

import '@testing-library/cypress/add-commands'

import '@4tw/cypress-drag-drop';

import 'cypress-downloadfile/lib/downloadFileCommand';


require('cy-verify-downloads').addCustomCommand();

declare global {
    namespace Cypress {
       interface Chainable {
            customCommandLogin(username: string, password: string): Chainable<void>;
        }
    }
}

Cypress.Commands.add("customCommandLogin", (usernameP: string, passwordP: string) => {
    cy.get("#userName").type(usernameP);
    cy.get("#password").type(passwordP);
    cy.get("#login").click();
    // cy.url()
    // .should("include", "/profile"); // we can also assert for url if we want
})
 




// Cypress.Commands.add('loginToMindomo', () => {
//   cy.setCookie('token', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7InVpIjoxNDAwODc0MSwiaHVpIjowLCJtZCI6MTc0ODkzNjQxMjgwOSwiYXRrIjoiNzAxNjZiYjAzZDIzNGZmOGI5ZDAzYzc4NjdjNDUwZmIiLCJmbiI6Ik1pbmRvbW8iLCJsbiI6IlRlc3RpbmciLCJlbSI6Im1pbmRvbW90ZXN0aW5nQGdtYWlsLmNvbSIsImllIjpmYWxzZSwiYXQiOjEsIm1tIjozLCJwc2QiOjE3NDg5MzYzNTcxNDIsInBlZCI6MTc4MDQ3MjM1NzA0MywibHNkIjoxNzUwMjUyMTI4NDczLCJpZyI6IkZyU05NIiwicGkiOiJkODA3MzY2NjI0MTk0ZmRlYWYwM2ExMTViNjIyYjUxNCIsInR6IjozLjAsImx0IjoxLCJscHQiOjEwLCJwYWkiOlsyLDIzLDExXSwiYXV0IjowLCJsZyI6ImVuIiwidHRsIjo4NjQwMH0sImV4cCI6MTc1MDI2OTE4N30.lWvjqz-PguENi0RnbrPuHKAvPQEjKYg1zxKPV0kaLRI'); // Replace with actual cookie name and value
//   cy.visit('https://www.mindomo.com');
// });



// const socialLogin = require('cypress-social-logins').default;

// Cypress.Commands.add("facebookLogin", () => {
//   const fbLoginOptions = {
//     username: "mindomotesting@gmail.com",
//     password: "mindomo1",
//     loginUrl: "https://www.mindomo.com/login",
//     headless: false,
//     logs: true,
//     loginSelector: "#facebook",
//     postLoginSelector: "#mindomoLogo",
//     provider: "facebook"
//   };

//   return socialLogin(fbLoginOptions);
// });






// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }