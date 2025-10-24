describe('Written into the iframe chellenge', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
    });
    it("Click for JS Alert", () => {
        cy.contains("button", "Click for JS Alert").click();
        
        cy.on("window:alert", (message) => {
            expect(message).to.be.equal("I am a JS Alert");
           // return true;
            //These dialogs are native browser popups — not HTML buttons — so you don’t select or click them manually.
            //  Cypress intercepts the event, and your return value simulates the button click.
        })
        cy.on("window:confirm", () => {
            return true;
            //return false; for pressing on dialog`s cancel button
        })
        cy.get("p#result").should("have.text", "You successfully clicked an alert");
    });
    it("Click for JS Confirm", () => {
        
        const trueOrfalse = false ; // Change this to true or false
       
        cy.contains("button", "Click for JS Confirm").click()

       cy.on("window:confirm", (dialogConfirmation) =>{
        expect(dialogConfirmation).to.be.equal("I am a JS Confirm");
        // window:confirm is for two-button popups.
        return trueOrfalse ;
       })

       cy.then(() =>{
        if(trueOrfalse){
        cy.get("p#result").should("have.text", "You clicked: Ok");
        } else {
        cy.get("p#result").should("have.text", "You clicked: Cancel");
        }

       })
       
    });
    it("JS Prompt", () => {
        //const dialogText = "Boss de Boss";

        cy.window().then((window) => {
            cy.stub(window, "prompt").returns("Boss de Boss");
            
        })
        
        cy.contains("button", "Click for JS Prompt").click()

        cy.get("p#result").should("have.text","You entered: Boss de Boss");

    });
});