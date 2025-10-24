describe("Locatores", () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    })
    
    it("", () => {
        cy.contains("Button with Dynamic ID")
        .should("have.text", "Button with Dynamic ID");
    })

    it("Using get & find", () =>{
        cy.get("div").find("h3")
        .should("have.text", "Dynamic ID");
        // find() Get the descendent DOM elements of a specific selector.
    })

    it("CSS selector using an atributte", () =>{
        cy.get(`button[class="btn btn-primary"]`)
        //we using attribute(button) to get the elemnt we needed
        .should("have.text", "Button with Dynamic ID");
        // find() Get the descendent DOM elements of a specific selector.
    })
    
    it("CSS selector using a class", () =>{
        cy.get(".btn-primary")
        //we using attribute(button) to get the elemnt we needed
        .should("have.text", "Button with Dynamic ID");
        // find() Get the descendent DOM elements of a specific selector.
    })
})