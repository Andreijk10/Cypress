import { LoginTestPage } from "../../pages/LoginTest";

describe('Exports', () => {
    beforeEach(() => {
        cy.fixture("config").then((config) => {
            cy.visit(config.serverUrl + "/" + "login");
        })
    });
    
    it('GraphicExports', () => {
        cy.fixture("users").then((user) =>{
            cy.fixture("config").then((config) => {
                cy.fixture("diagrams").then((diagrams) => {
                    //Login
                    LoginTestPage.submitTestLogin(user[0].username, user[0].password);
                    cy.get('#createMap').should("be.visible");

                    const exportTypes = ["#pdfContainer", "#pptContainer", "#htmlConatiner", "#zipContainer", "#pngContainer"];

                    //Iterate for diagram id and export type
                    diagrams.export_common_graphic.forEach((diagram) => {
                        exportTypes.forEach((exportType, index) => {
                            //Entering the map
                            cy.visit(config.serverUrl + "/mindmap/" + diagram.id);  
                            cy.url().should("include", "/" + diagram.id);
                            cy.get("#megaMenu > .btn").should("be.visible").click();

                            //Entering export dialog
                            cy.get("#exportBtn").should("be.visible").click();
                            cy.get(exportType).click();
                            cy.get('.export-container > .btn-text').click();
                            cy.get('.dropdown-menu > .menu-list-cont > #exportBtn > .text').should("be.visible").click();

                            //Assert the file download
                            const expectedFileName = diagram.name[index];
                            cy.verifyDownload(expectedFileName, {timeout: 20000});
                        }); 
                    });
                });
            });
        });
    });

    it.only('TextExports', () => {
        cy.fixture("users").then((user) =>{
            cy.fixture("config").then((config) => {
                cy.fixture("diagrams").then((diagrams) => {
                    //Login
                    LoginTestPage.submitTestLogin(user[0].username, user[0].password);
                    cy.get('#createMap').should("be.visible");

                    const exportTypes = ["#markdownContainer", "#pdfSlidesContainer", "#docxContainer", "#txtContainer", "#opmlContainer", "#mpxContainer", "#mpxmlContainer"];

                    //Iterate for diagram id and export type
                    diagrams.export_common_text.forEach((diagram) => {
                        exportTypes.forEach((exportType, index) => {
                            //Entering the map
                            cy.visit(config.serverUrl + "/mindmap/" + diagram.id);  
                            cy.url().should("include", "/" + diagram.id);
                            cy.get("#megaMenu > .btn").should("be.visible").click();

                            //Entering export dialog
                            cy.get("#exportBtn").should("be.visible").click();
                            cy.get(exportType).click();
                            cy.get('.export-container > .btn-text').click();
                            cy.get('.dropdown-menu > .menu-list-cont > #exportBtn > .text').should("be.visible").click();

                            //Assert the file download
                            const expectedFileName = diagram.name[index];
                            cy.verifyDownload(expectedFileName, {timeout: 20000});
                            
                        }); 
                    });
                });
            });
        });
    });
});