describe('Auto-complete', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`);

    })

    it("Auto-complete on the first field Yellow", () => {

        cy.get(".auto-complete__value-container").first().type("Y");

        // cy.debug(); Set a debugger and log what the previous command yields.
        //cy.get('#react-select-2-option-0') - looked after this element dynamic 
        cy.contains("#react-select-2-option-0", "Yellow").click();

        cy.get(".auto-complete__multi-value__label")
        .should("have.text", "Yellow");

        
    });
    
});