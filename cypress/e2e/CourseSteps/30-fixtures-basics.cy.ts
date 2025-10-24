import {data} from "../e2e/model";

describe('Using a fixture', () => {
    it('Loading the file and display the data in the log', () => {
        cy.fixture("testFile.json").then((testFileData: data) => {
            cy.log("Printing objects", testFileData);
            cy.log("Printing objects", testFileData.option1);
            cy.log("Printing objects", testFileData.option2);

        })
    });
});