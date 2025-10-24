describe('basics', () => {
    it('visit explanation', () => {
      cy.visit("/textinput");
      cy.get('#newButtonName').type("Andrei");
      cy.get('#updatingButton').click()
      .should("have.text", "Andrei");
    });
    it('visit base URL demonstration', () => {
      cy.visit("/dynamictable"); // testing base url added in cypress.config.ts
    })
   
    it("Testing yield with chainable methods", () => {
      cy.url().then((url) => {
        //In js the "=>" by itself doesn't represent a function — it’s just part of the arrow function syntax. 
        //then() needs a function   
        // Actually looks like below
        // (url) => {
        //   cy.log(`URL is: ${url}`);
        // }
        // (url) is the parameter the function takes (it’s the URL that cy.url() will yield).
        // => is the arrow connecting the parameter to the body of the function.
        // { cy.log(...) } is the body of the function that will execute when the function is called.
        
        cy.log(`Printing the URL: ${url}`)  //you're using template literals (`) to inject the url variable into the log message.
        //logs something because we have beforeEach 
        //cy.visit("/textinput"); 
        //it is like having this line below it("Testing yield .......")
        expect(url).to.contains("/text");
      })
    })

    beforeEach("From now on we want each it to visit /textinput ", () =>{
        cy.visit("/textinput");  //the beforeEach will work for every it in the file
    }) 
    
    it('visit base URL demonstration', () => {
      cy.log("textinput number 1");
    })  
    it('visit base URL demonstration', () => {
      cy.log("textinput number 2");
    })
    it('visit base URL demonstration', () => {
      cy.log("textinput number 3");
    })
    
    it("Printing the page title", () => {
      cy.title().then((variableToAccessTheTitle) =>{
        cy.log(variableToAccessTheTitle);
        expect(variableToAccessTheTitle).to.be.equal("Text Input");
      })
    })

    it("Input challange", () => {
      cy.get("input#newButtonName").type("Hello from type command",{delay : 200});
      //{delay : 200} this is the delay for each character writting
      cy.get('#updatingButton').click()
      .should("have.text", "Hello from type command");
    })



  //   "scripts": {  // this is on package.json
  //   "runner": "cypress open --e2e --browser chrome --config baseUrl=http://www.google.com"
  //     --config baseUrl=http://www.google.com this will force every cy.visit to go on google
  // },
});