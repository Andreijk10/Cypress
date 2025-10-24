describe('Accordian', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`);

    })

    it("Text appearing after click", () => {
        cy.get('#section2Heading').click();

         //We want to check if the elemnt section1Heading it is not displayed(closed)

        cy.get('#section1Heading')
        .next()
        .should("have.css","display", "none");
                      
        cy.get('#section2Heading')
        .next()
        .should("have.css", "display", "block")
        .and("have.class", "show");
        // class="collapse show" → This is a space-separated list of classes.
        // The show class is usually used (especially in Bootstrap) to indicate that the content is currently visible or expanded.
        // .collapse is always there — it's the base style for collapsible content.
        // .show is dynamically added or removed when you expand or collapse the section.

    });
});