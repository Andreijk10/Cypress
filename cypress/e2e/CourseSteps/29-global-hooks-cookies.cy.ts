//If you want to clear all those cached sessions — for example, before a new test suite runs — you'd use:
Cypress.session.clearAllSavedSessions();
// Force a fresh login before running tests.


describe('Global hooks and cookies', () => {
    beforeEach("Global hooks & cookies", () => { 
        cy.visit(`${Cypress.env("demoQA")}/login`);
        //navigate to e2e.ts to understand what it is happening
     })
    
    it('Success login preserved', () => {
        cy.get("#userName-value")
        .should("have.text", "andrei.test");
     });
    it('Success login preserved', () => { 
        cy.get("#userName-value")
        .should("have.text", "andrei.test");
    });
    it('Counting the cookies', () => { 
       cy.getCookies().then((cookies) => {
           cy.log("Let`s see the cookies", cookies);
           expect(cookies).to.have.length(8); //assert for cookies array length
       })
    });
});