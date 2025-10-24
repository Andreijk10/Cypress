describe('Login Scenarios', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    
    it('Login with correct credentials', () => {
        
        cy.get("#userName").type("andrei.test");
        cy.get("#password").type("Test123!");
        cy.get("#login").click();
        cy.url()
        .should("include", "/profile");
        cy.contains("Log out")
        .should("be.visible");
        cy.get("#userName-value")
        .should("have.text", "andrei.test");
        cy.get("#gotoStore").click();
        cy.contains("a", "Learning JavaScript Design Patterns")
        .should("be.visible");

    });
    
    it('Login with wrong credentials', () => {
        
        cy.get("#userName").type("andrei.testttt");
        cy.get("#password").type("Test123!");
        cy.get("#login").click();
        cy.url()
        .should("not.contain", "/profile");
        cy.get(".mb-1")
        .should("have.text", "Invalid username or password!");
        cy.get(".text-center")
        .should("have.text", "Login");
    });

});