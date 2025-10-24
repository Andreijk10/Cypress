import { LoginPage } from "../../pages/Login";

describe('Login Scenarios - UI Custom command', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it('Login with correct credentials - UI Custom command', () => {
        
        // cy.get("#userName").type("andrei.test");
        // cy.get("#password").type("Test123!");
        // cy.get("#login").click();

        // cy.url()
        // .should("include", "/profile");
        cy.customCommandLogin("andrei.test", "Test123!");   

        cy.contains("Log out")
        .should("be.visible");
        cy.get("#userName-value")
        .should("have.text", "andrei.test");
        cy.get("#gotoStore").click();
        cy.contains("a", "Learning JavaScript Design Patterns")
        .should("be.visible");

    });
    
    it('Login with wrong credentials - UI Custom command', () => {
        
        // cy.get("#userName").type("andrei.testttt");
        // cy.get("#password").type("Test123!");
        // cy.get("#login").click();

        cy.customCommandLogin("andrei.testttt", "Test123!");
        
        cy.url()
        .should("not.contain", "/profile");
        cy.get(".mb-1")
        .should("have.text", "Invalid username or password!");
        // cy.get(".text-center")
        // .should("have.text", "Login");
        LoginPage.headerElement
        .should("have.text", "Login");
    });

});