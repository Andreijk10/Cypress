const LoginExecutor = require('../../support/LoginExecutor.js');


describe('Exports from mega menu', () => {
    let config;
    let users;
    let diagrams;
  
    beforeEach(() => {
      cy.fixture("config").then((c) => (config = c));
      cy.fixture("users").then((u) => (users = u));
      cy.fixture("diagrams").then((d) => (diagrams = d));
    });
  
    it("ExcelExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');


            diagrams.export_xls.forEach(diagram => {
                const diagramId = diagram.id;  
                const diagramType = diagram.type;
                const exportTypes = diagram.exportType;
                const expectedFileName = diagram.name;
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);
                
                exportTypes.forEach((exportType) => {
                    
                     //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').click();
                    cy.get("#exportBtn").should("be.visible").click();


                    //Entering export dialog
                    cy.get(`[data-hide-views="common mindmap"]`).should("be.visible").click();
                    
                    cy.get(exportType).should("be.visible").click();
                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();
                    cy.wait(5000);


                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 15000 });
            
                });        
            });
        });
    });


    it("MindmapCommonGraphicExports", () =>{
        users.forEach((user) => {
             //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');
 
             //Iterate for diagram id and export type
            diagrams.export_common_graphic.forEach(diagram => {
                const diagramId = diagram.id;  
                const exportTypes = diagram.exportType;
                const mindmap = "/mindmap/";
                const visitUrl = (config.serverUrl + mindmap + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];


                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').click();
    
                    //Entering export dialog
                    cy.get("#exportBtn").should("be.visible").click();
                    cy.get(exportType).click();
                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();
                    cy.wait(5000);
    
                    //Assert the file download holber - balcon
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });


                });  
            });
        });
    });


    it("MindmapCommonTextExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');


            //Iterate for diagram id and export type
            diagrams.export_common_text.forEach(diagram => {
                const diagramId = diagram.id;  
                const exportTypes = diagram.exportType;
                const mindmap = "/mindmap/";
                const visitUrl = (config.serverUrl + mindmap + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];
                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagram.id);
                    cy.get('#megaMenu > .btn').click();


                    //Entering export dialog
                    cy.get("#exportBtn").should("be.visible").click();
                    cy.get(exportType).click();
                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();
                    cy.wait(5000);


                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });
                });      
            });
        });
    });


    it("FormatsExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');


            //Iterate for diagram id and export type
            diagrams.export_formats.forEach(diagram => {
                const diagramId = diagram.id;  
                const diagramType = diagram.type;
                const exportTypes = diagram.exportType;
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];
                    
                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').click();


                    //Entering export dialog
                    cy.get("#exportBtn").should("be.visible").click();
                    cy.get(`[data-hide-views="common excel"]`).should("be.visible").click();
                    cy.get(exportType).should("be.visible").click();
                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();


                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });
                });
            });
        });
    });


    it("PresenterExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');
 
            //Iterate for diagram id and export type
            diagrams.export_presenter.forEach(diagram => {
                const diagramId = diagram.id;  
                const exportTypes = diagram.exportType;
                const mindmap = "/mindmap/";
                const visitUrl = (config.serverUrl + mindmap + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];
                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').click();
 
                    //Entering presenter mode
                    cy.get("#presenterEditor").should("be.visible").click();
                    cy.get('#megaMenuContainer').should("be.visible").click();
                    cy.get(exportType).click();
 
                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });


                });                
            });
        });
    });


    it("ViewerExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');


            //Iterate for diagram id and export type
            diagrams.exports_viewer.forEach(diagram => {
                const diagramId = diagram.id;    
                const diagramType = diagram.type;
                const exportTypes = diagram.exportType;
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];


                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').should("be.visible").click({ force: true });
    
                    //Entering export dialog
                    cy.get(exportType).should("be.visible").click({ force: true });
    
                    //Assert the file download holber - balcon
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });


                });
            });
        });
    });


    it.only("OutlineCommonExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');
            
            //Iterate for diagram id and export type
            diagrams.export_common_outline.forEach(diagram => {
                const diagramId = diagram.id;  
                const diagramType = diagram.type;
                const exportTypes = diagram.exportType;
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];
                    
                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').should("be.visible").click();
                    cy.get('#exportBtn > .text').should("be.visible").click();


                    //Exporting the map
                    cy.get(exportType).should("be.visible").click();
                    cy.get("body").then(($body) => {
                        if($body.find('[data-id="selectPDFOptions"]').is(":visible")) {
                            // Select the dropdown
                            cy.get('[data-id="selectPDFOptions"]').click();
                            //A4
                            cy.get('[data-original-index="0"]').should("be.visible").click();
                        }
                    });


                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();
                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });


                });
            });
        });
    });


    it.only("GanttCommonExports", () =>{
        users.forEach((user) => {
            //Login
            LoginExecutor.login(config, user);
            cy.get('#createMap').should('be.visible');
            
            //Iterate for diagram id and export type
            diagrams.export_common_gantt.forEach(diagram => {
                const diagramId = diagram.id;  
                const diagramType = diagram.type;
                const exportTypes = diagram.exportType;
                const visitUrl = (config.serverUrl + "/" + diagramType + "/" + diagramId);


                exportTypes.forEach((exportType, index) => {
                    const expectedFileName = diagram.name[index];
                    
                    //Entering the map
                    cy.visit(visitUrl);
                    cy.url().should("include", "/" + diagramId);
                    cy.get('#megaMenu > .btn').should("be.visible").click();
                    cy.get('#exportBtn > .text').should("be.visible").click();


                    //Exporting the map
                    cy.get(exportType).should("be.visible").click();
                    cy.get("body").then(($body) => {
                        if($body.find('[data-id="selectPDFOptions"]').is(":visible")) {
                            // Select the dropdown
                            cy.get('[data-id="selectPDFOptions"]').click();
                            //A3
                            cy.get('[data-original-index="1"]').contains('A3').should("be.visible").click();
                        }
                    });


                    cy.get('.btn-text-bord-bck > .btn-text').should("be.visible").click();
                    //Assert the file download
                    cy.verifyDownload(expectedFileName, { timeout: 20000 });


                });
            });
        });
    });
});

