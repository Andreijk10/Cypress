describe('Demo QA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`);
    })
    
    it('Hidden checkbox', () => {
        //cy.get(`input[type="checkbox"]`).click({force : true});
        cy.get(`input[type="checkbox"]`).check({force : true}); //you can do both ways
        //the secret here was to identify the selector `input[type="checkbox"]`
        cy.get('#result').should("have.text", "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile");
    });
});

describe.only('The internet app', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/checkboxes`);
    })

    it('Check if the checkbox it is checked', () => {
        // cy.get(`input[type="checkbox"]`).eq(0).click()
        // .should("be.checked");
         //eq(0) we continuing with selction through HTML to reach fist element of the form tag

        cy.get("form#checkboxes input").eq(0).click()
        .should("be.checked"); //also can we rewrite like this
        //tag form it is in fact the parent of 2 input childs in our case
    });
});