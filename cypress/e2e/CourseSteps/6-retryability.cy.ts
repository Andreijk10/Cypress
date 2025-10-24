//Cypress.config("defaultCommandTimeout", 16000);
//now the default time for waiting for cypress has turn to 16000 from 4000

describe('Retry ability demo', () => {
    it('Visit with delay', () => {
        cy.visit("/loaddelay"); 
        //, {timeout : 2000} overwrites the pageLoadTimeout : 5000 from cypress.config.ts
    });
    it("Client side delay", () => {
        cy.visit("/clientdelay");
        cy.get('#ajaxButton').click();
        cy.get('.bg-success',{timeout : 16000})
        .should("have.text",  "Data calculated on the client side.");

    });
    it.only("Progress bar challange", () => {
        cy.visit("/progressbar");
        cy.get('#startButton').click()
        cy.get('#progressBar', {timeout : 50000})
        .should("have.text", "100%");

    });
});