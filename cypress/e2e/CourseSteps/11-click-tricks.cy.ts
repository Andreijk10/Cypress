describe('Demo QA ', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("demoQA")}/buttons`)
    })
    it('Double click me button assertion', () => {
        cy.get("#doubleClickBtn").dblclick()
        cy.get('#doubleClickMessage').should("be.visible");
        
        cy.get("#rightClickBtn").rightclick();
        cy.get('#rightClickMessage').should("be.visible");

    });
    it('Dynamic DOM ID element changes after refresh - Click me button assertion', () => {
        cy.get("button.btn-primary").eq(2).contains("Click Me").click();
        //here we can use tag(button) and class(.btn-primary) to maximize the changes to get needed element from the DOM
        //index identifier(eq(2)) because they had the same classes
        //contains("Click Me") we want to assure that the element that we get it is the one we want
        cy.get('#dynamicClickMessage').should(
            "have.text",
             "You have done a dynamic click");
    });
});