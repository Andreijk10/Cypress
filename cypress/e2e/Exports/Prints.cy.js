const LoginExecutor = require('../../support/executors/LoginExecutor.js');


describe('Prints', () => {
    let config;
    let users;
    let diagrams;
  
    beforeEach(() => {
      cy.fixture("config").then((c) => (config = c));
      cy.fixture("users").then((u) => (users = u));
      cy.fixture("diagrams").then((d) => (diagrams = d));
    });
   
    it('EditMode', () => {
    
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should("be.visible"); 


            //Iterate for diagram id 
            diagrams.printer.forEach((diagram) => {
                const diagramId = diagram.id;
                const expectedFileName = diagram.name;
                const diagramType = diagram.type; // mindmap, outline, gantt
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);
    
                //Entering the map
                cy.visit(visitUrl);  
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


    it.skip('ViewMode', () => {
    
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should("be.visible"); 


            //Iterate for diagram id 
            diagrams.printer_viewer.forEach((diagram) => {
                const diagramId = diagram.id;
                const expectedFileName = diagram.name;
                const diagramType = diagram.type; // mindmap, outline, gantt
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);
    
                //Entering the map
                cy.visit(visitUrl);  
                cy.url().should("include", "/" + diagramId);
                cy.get('#megaMenu > .btn').should("be.visible").click();


                //Print the map
                cy.get('[data-type="print"]').should("be.visible").click();


                //Assert the file download
                cy.verifyDownload(expectedFileName, { timeout: 20000 });
            });   
        });
    });
});