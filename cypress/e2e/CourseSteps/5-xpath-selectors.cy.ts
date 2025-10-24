describe("Locatores", () => {
    beforeEach(() => {
        cy.visit("/classattr");
    })
    it("How to find an elemnt by it`s text", () => {
        cy.xpath(`//*[(text)="Scenario"]`);
    })
})