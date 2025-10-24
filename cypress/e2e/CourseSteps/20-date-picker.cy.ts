describe('Date picker demo', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/date-picker`);

    });

    it("Date picker chellenge", () => {
        cy.get(".react-datepicker__input-container").first().click();
        
        cy.get("select.react-datepicker__month-select").select("4");
        cy.get("select.react-datepicker__year-select").select("2026");
        cy.get("div.react-datepicker__day--010")
        .not(".react-datepicker__day--outside-month")
        .click();
        // Works with not: 
        // .not(selector) is used to exclude elements that match a certain condition or selector from the current set of elements.

        cy.get("#datePickerMonthYearInput").should("have.value", "05/10/2026");
    });

    it("Date picker chellenge", () => {
        cy.get(".react-datepicker__input-container").first().click();
        
        cy.get("select.react-datepicker__month-select").select("11");
        cy.get("select.react-datepicker__year-select").select("1996");
        cy.findByText("12").click(); //with the library

        cy.get("#datePickerMonthYearInput").should("have.value", "12/12/1996");
    })

});