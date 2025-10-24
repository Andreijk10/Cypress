describe('Asserting for page url after login', () => {
    beforeEach(() => {
        cy.session("loginSession", () => {
        //Save/Restore browser Cookies, LocalStorage, and SessionStorage data resulting from the supplied setup function.    
        cy.visit(`${Cypress.env("demoQA")}/login`);
        cy.get("#userName").type("andrei.test");
        cy.get("#password").type("Test123!");
        cy.get("#login").click();
        cy.url()
        .should("contain", "profile"); // asserting for the needed page 
        })
      
    })

//📦 What’s being stored/restored?
// In your app (DemoQA):
// After logging in, a JWT token or session ID is likely stored in localStorage or cookies (check DevTools → Application tab).
// That’s what Cypress restores in future tests when it says “Restoring session ‘loginSession’”.
// So in test 2 and test 3, Cypress:
// Does not re-run the .visit().type().click() steps
// Instead, it simply re-applies the previously stored browser session

    it("Check if the session data have been saved", () => {
        cy.visit(`${Cypress.env("demoQA")}/profile`);
        cy.contains("andrei.test")
        .should("exist");
    });

    it("Check if the session data have been saved", () => {
        cy.visit(`${Cypress.env("demoQA")}/profile`);
        cy.contains("Log out").should("be.visible")
    });
});