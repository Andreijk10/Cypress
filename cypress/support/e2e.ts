// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "./exception";
import "cypress-real-events";

//Global Hooks - 29-global-hooks-cookies.cy.ts
//  beforeEach(() => {
//     //cy.log("Hello form the global beforeEach hook");
//     cy.session("loginSession", () => {
//         //Save/Restore browser Cookies, LocalStorage, and SessionStorage data resulting from the supplied setup function.    
//         cy.visit(`${Cypress.env("demoQA")}/login`);
//         cy.get("#userName").type("andrei.test");
//         cy.get("#password").type("Test123!");
//         cy.get("#login").click();
//         cy.url()
//         .should("contain", "profile"); // asserting for the needed page 
//         })
//  })

 
//  after(() => {
//     cy.log("Hello form the global afterEach hook");
//     cy.clearCookies()
//     cy.getCookies().then((cookies) => {
//         cy.log("Lets see if they were cleared", cookies);
//         expect(cookies).to.have.length(0); 
//     });
    
//  })


