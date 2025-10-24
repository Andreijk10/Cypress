describe('Nested iframes challenge', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    })

    it('Simple and nested frames', () => {
        cy.get("#frame1").then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
            .should("have.text", "Parent frame");
           
           
            cy.wrap($body)  //here we wrap again the body to reach the next iframe
            .find("iframe") //here we use iframe to find element we want cuz it is an iframe with little elements
            .then(($childIframe) =>{
                const $childBody = $childIframe.contents().find("body");
                cy.wrap($childBody)
                .find("p")
                .should("have.text", "Child Iframe");
            
            })
        
        })

    });
});