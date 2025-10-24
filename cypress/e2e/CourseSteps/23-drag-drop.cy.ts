describe('Drag & drop scenrio', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/droppable`);
    })

    it.only("Drag and drop chellenge", () => {
        cy.get("#draggable").drag(`#simpleDropContainer > #droppable`, {force : true});
        // Grabbing the draggable element.
        // Dragging it to the droppable container.
        // Using { force: true } to bypass any visibility or pointer interaction issues.

        cy.get(`#simpleDropContainer > #droppable > p`)
        .should("have.text", "Dropped!"); //here we assert for the ui drop

    });
});