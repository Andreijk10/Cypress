describe('Uploud - Download a file with cypress', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
     });

     it('Upload a file ', () => {
        cy.get(`input#uploadFile`)
        .should("be.visible") //just for practise "input"
        .attachFile("example.json");

        cy.get('#uploadedFilePath').should("contain", "example.json")
    });
    
    it('Upload a file in subfolder', () => {
        cy.get(`input#uploadFile`).click()
        .should("be.visible") //just for practise "input"
        .attachFile("Images/upload.jpeg");

        cy.get('#uploadedFilePath').should("contain", "upload.jpeg");

    });
});

describe.only('Uploud - Download a file with cypress', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
     });
    
    it("Download a file", () => {
        cy.get("a#downloadButton").click()
        cy.verifyDownload("sampleFile.jpeg", {contains : false});
        // {contains : false}
        //Make sure a file named exactly sampleFile.jpeg was downloaded — don't just partially match it
        //In true scenario the asset will pass with "sample"
    }); 

});     