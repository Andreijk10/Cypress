describe('Hover for menus', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/menu#`);
    })

    it.only("Menu appears at hover", () => {
        cy.contains("a", "Main Item 2").realHover();
        cy.contains("a", "SUB SUB LIST »").should("be.visible").realHover();
        cy.contains("a", "Sub Sub Item 2").should("be.visible")
    });
});