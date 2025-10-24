describe('Tool tips', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`);

    });

    it("Tool-tip on hovering button", () => { 
        cy.get("#toolTipButton").realHover()
        cy.get(`div[role='tooltip']`)
        .should("be.visible");
        //cy.wait(2000); //just to assert and the role=tooltip (bad practice)
        cy.get(".tooltip-inner")
        .should("have.text", "You hovered over the Button");
    });

    it("Tool-tip on hovering text on link a > tag", () => { 
       cy.contains("a", "Contrary").realHover();
       cy.get(`div[role="tooltip"]`)
       .should("be.visible");
       cy.get(".tooltip-inner")
       .should("have.text", "You hovered over the Contrary");
        
    });

    
});    