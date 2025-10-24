import { BooksPage } from "../../pages/Books";
import { LoginPage } from "../../pages/Login";
import { ProfilePage } from "../../pages/Profile";

describe('Login Scenarios', () => {
    beforeEach(() => {
      LoginPage.visit() ;

    });
    
    it('Login with correct credentials', () => {
        // cy.get("#userName").type("andrei.test");
        // cy.get("#password").type("Test123!");
        // cy.get("#login").click();
        //LoginPage.submitLogin("andrei.test", "Test123!"); //Function approch
        
        //Get each element separately 
        LoginPage.usernameElement.type("andrei.test");
        LoginPage.passwordElement.type("Test123!");
        LoginPage.loginButtonElement.click();
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

    it("The same username ID in 3 different pages - Inheritence power", () => {
        LoginPage.submitLogin("andrei.test", "Test123!" ); //Function approch
        
        ProfilePage.usernameValueElement
        .should("be.visible") // or be visible
        .and("have.text", "andrei.test");
     
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-2 > .text').click()
        cy.url()
        .should("include", "/books");
        // BooksPage.usernameValueElement
        // .should("exist");
            
        BooksPage.usernameValueElement
        .should("be.visible")
        .and("have.text", "andrei.test");

        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0 > .text').click()
        LoginPage.usernameValueElement
        .should("have.text", "andrei.test");
        
        cy.contains("a", "profile").click();
        cy.url()
        .should("include", "/profile");

    });

    it('Login with wrong credentials', () => {
        
        // cy.get("#userName").type("andrei.testttt");
        // cy.get("#password").type("Test123!");
        // cy.get("#login").click();s
        LoginPage.usernameElement.type("andrei.testttt");
        LoginPage.passwordElement.type("Test123!");
        LoginPage.loginButtonElement.click();
        
        cy.url()
        .should("not.contain", "/profile");
        // cy.get(".mb-1")
        // .should("have.text", "Invalid username or password!");
        LoginPage.invalidLoginMessageElement 
        .should("have.text", "Invalid username or password!");
        // cy.get(".text-center")
        // .should("have.text", "Login");
        LoginPage.headerElement
        .should("have.text", "Login");
    });

    
});