describe('Dealing with liks', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("demoQA")}/links`);
    })
    
    it.skip('First approche - Links that opens a new browser tab if we click it ', () => {
        //cypress doesn`t work with new browser tab that are open
        cy.get("#simpleLink").should(
            "have.attr",
             "href",
              "https://demoqa.com");
        //So the user doesn't get sent to the wrong page
        cy.get("#simpleLink").should(
            "have.attr",
             "target",
              "_blank");
        //_blank - means that the link will be displayed in a new tab in the browser
        //The link opens in a new tab/window — not replacing your current page.
    });
    it('Second approche - Revoke the attribute that will open a new tab after click ', () => {
       //the story is that the element  "#simpleLink" after click redirects to home page
       //but it is created to open a new tab with the home page
       //so we want to remove that part because cypress can`t work with multiple browser tabs
       cy.get("#simpleLink").invoke("removeAttr", "target").click();
       cy.url().then((urlAfterClick) =>{
        //cy.url() gets the current url after click()
        expect(urlAfterClick).to.be.equal("https://demoqa.com/");
       })
    });
});


describe('Intercepting API(SPYING) requests after clicking a button', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("demoQA")}/links`);
        cy.intercept("GET", `${Cypress.env("demoQA")}/created`).as("linkStatus");
        //https://demoqa.com/created we use env variable to make it dynamic

    })
    it("Dealing with wait  ", () => {
        cy.get("#created").click()
        cy.wait("@linkStatus").then((request) =>{
            cy.log("Let`s see the request", request);
            expect(request.response.statusCode).to.equal(201);
            expect(request.response.statusMessage).to.equal("Created");
        })
    })
})    

describe('Intercepting different https status codes  ', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("theInternet")}/status_codes`);
        cy.intercept("GET", `${Cypress.env("theInternet")}/status_codes/200`).as("heroLinkStatus200");
        cy.intercept("GET", `${Cypress.env("theInternet")}/status_codes/301`).as("heroLinkStatus301");
        cy.intercept("GET", `${Cypress.env("theInternet")}/status_codes/404`).as("heroLinkStatus404");
        cy.intercept("GET", `${Cypress.env("theInternet")}/status_codes/500`).as("heroLinkStatus500");
    })
    it('Dealing with 200', () => {
        cy.get(':nth-child(1) > a').click();
        cy.wait("@heroLinkStatus200").then((firstRequest200) => {
            cy.log("Let`s see the first request", firstRequest200);
            expect(firstRequest200.response.statusCode).to.equal(200);
            expect(firstRequest200.response.statusMessage).to.equal("OK");
        })
    });
    it('Dealing with 301', () => {
        cy.get('ul > :nth-child(2) > a').click();
        cy.wait("@heroLinkStatus301").then((secondRequest301) => {
            cy.log("Let`s see the second", secondRequest301);
            expect(secondRequest301.response.statusCode).to.equal(301);
            expect(secondRequest301.response.statusMessage).to.equal("Moved Permanently");

        })
    });
    it('Dealing with 404', () => {
        cy.get('ul > :nth-child(3) > a').click();
        cy.wait("@heroLinkStatus404").then((thirdRequest404) => {
            cy.log("Let`s see the third request", thirdRequest404);
            expect(thirdRequest404.response.statusCode).to.equal(404);
            expect(thirdRequest404.response.statusMessage).to.equal("Not Found");

        })
    });
    it('Dealing with 500', () => {
        cy.get('ul > :nth-child(4) > a').click();
        cy.wait("@heroLinkStatus500").then((forthRequest500) => {
            cy.log("Let`s see the forth request", forthRequest500);
            expect(forthRequest500.response.statusCode).to.equal(500);
            expect(forthRequest500.response.statusMessage).to.equal("Internal Server Error");

        })
    });
});
