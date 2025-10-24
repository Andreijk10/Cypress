describe.skip('Click challange', () => {
    beforeEach(() =>{
        cy.visit("/click");
    })
    it('Assert for element change after click', () => {
        cy.get("#badButton").click()
        .should("have.class", "btn-success");
        //are cases when after click an element will have the same id so we look for clas maybe
        //so here we assert that the element it is what we are looking for
    });
    it('Assert element color after click ', () => {
        cy.get("#badButton").click()
        .should("have.css", "background-color", "rgb(40, 167, 69)");
        //here we assert for button`s green color
    });
    it("Assert with then()", () => {
        cy.get("#badButton").click().wait(5000) 
        //because then() works directly with the DOM element expect checked button color beffore click()
        //so we needed a wait() there 
        .then($button =>{ 

            let backgroundColor = $button.css("background-color");
                // Get the background color

            cy.log("Background color", backgroundColor);
                // Log it to the console (or use any other assertion)

            expect(backgroundColor).be.equal("rgb(40, 167, 69)") ; 
            // You can assert directly inside the `.then()` with expect  

            const buttonText = $button.text();
            cy.log("The display button text is:", buttonText);
            expect(buttonText).be.equal("Button That Ignores DOM Click Event");
            //here we asset for the button`s text
        })
    })
});
describe.skip('Mouse hover try', () => {
    beforeEach(() =>{
        cy.visit("/mouseover");
    })
    it('Let`s if we hover the text turn to yellow', () => {
        cy.get(':nth-child(7) > .text-primary').realHover();

    });
});

describe('Dynamic table challange', () => {
    beforeEach(() =>{
        cy.visit("/dynamictable");
    })
    it('Chrome CPU test', () => {
        cy.get(`div[role="row"] span`).each(($celula) =>{ 
            //here we select all table cells
            if($celula.text().includes("Chrome")){
                //here we check if one of them has "Chrome" text
                cy.log(`I have fround the ${$celula.text()} cell`);
                //here we log if we found one

                let chromeRowValues: string[] = [] ;
                //here we say that we expect an array of strings

                chromeRowValues.push($celula.next().text());
                chromeRowValues.push($celula.next().next().text());
                chromeRowValues.push($celula.next().next().next().text());
                chromeRowValues.push($celula.next().next().next().next().text());
                cy.log("Should display the array length + in the console should be displayed Chrome row values", chromeRowValues)
                //here we add in our string the chrome row values from the table

                chromeRowValues.forEach((valuareChrome) =>{
                    if(valuareChrome.includes("%")){
                        cy.log("Show my the value in chrome row that has %", valuareChrome);
                        // if(cy.get('.bg-warning').contains(valuareChrome)){
                        //     cy.log("DA");
                        // } You can assert like that or ...
                        cy.get('.bg-warning')
                        .should("have.text", `Chrome CPU: ${valuareChrome}`);
                        
                    }  
                })
            }
        });
    });
});