describe('cy.viewport() demo', () => {
    beforeEach(() =>{
        // Cypress.on("uncaught:exception", (err, runnable) =>{
        //     return false ;
        // }) //you can deal with exception locally like this
        cy.visit(`${Cypress.env('Angular')}/angularjs-protractor-practice-site`);
    })

    it('Device name', () => {
        cy.log("Exception in page");
        cy.viewport("iphone-x");
        cy.get('#mobile_menu_toggler')
        .should("be.visible"); //check if the element it is visible for the user
        //.should("exist") 
        //Checks if the element is in the DOM.
        //It doesn't care if it's hidden or off-screen or zero-opacity.
    });
    
    it('Specific viewports', () => {
        cy.viewport(300, 450);
        cy.get('#mobile_menu_toggler')
        .should("be.visible"); //check if the element it is visible for the user
        
    });
});