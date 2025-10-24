import { LoginTestPage } from "../../pages/LoginTest";

describe('Prints', () => {
    beforeEach(() => {
        cy.fixture("config").then((config) => {
            cy.visit(config.serverUrl + "/" + "login");
        })
    });
    
    it('Printing 3 different diagrams', () => {
        cy.fixture("users").then((user) =>{
            cy.fixture("config").then((config) => {
                cy.fixture("diagrams").then((diagram) => {
                    //Login
                    LoginTestPage.submitTestLogin(user[0].username, user[0].password);
                    cy.get('#createMap').should("be.visible"); 

                    //Iterate for diagram id 
                    diagram.printer.forEach((diagram) => {
                        const diagramId = diagram.id;
                        const expectedFileName = diagram.name;
                        const diagramType = diagram.type; // mindmap, outline, gantt

                        //Entering the map
                        cy.visit(config.serverUrl + "/" + diagramType + "/" + diagramId);  
                        cy.url().should("include", "/" + diagramId);
                        cy.get("#megaMenu > .btn").should("be.visible").click(); 
                        
                        //Entering print dialog
                        cy.get("#printMap").should("be.visible").click();
                        cy.get('#ok').click();

                        //Assert the file download
                        cy.verifyDownload(expectedFileName, {timeout: 20000});
                         
                    });
                });
            });
        });
    });
});    