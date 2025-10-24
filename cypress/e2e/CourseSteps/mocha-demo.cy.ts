describe('template spec', () => {
    before(() => {
        cy.log("Helloo from the before hook");
    }) // here executes one time before test cases Before All
    beforeEach(() => {
        cy.log("Helloo from the before each hook");
    }) // here exceutes before each test case Before Each
    after(() => {
        cy.log("Helloo from the after hook");
    }) // here exceutes after all test case After All
    afterEach(() => {
      cy.log("Helloo from the after each hook");
    }) // here exceutes after all test case After All
    it('testcase #1', () => {
      cy.visit('https://example.cypress.io');
      cy.log("Hello World !!!!");
    })
    it.skip('testcase #2', () => {
        cy.visit('https://example.cypress.io');
        cy.log("Hello World !!!!");
      })
      it.only('testcase #3', () => {
        cy.visit('https://example.cypress.io');
        cy.log("Hello World !!!!");
      })
  })