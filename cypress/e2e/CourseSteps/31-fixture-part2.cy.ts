import {data} from "../e2e/model" ;

describe('Using a fixture', () => {
    beforeEach(() => {
        cy.fixture("testFile.json").as("testFileData")
    })
    it('Loading the file and display the data in the log', () => {
        cy.get<data>("@testFileData").then((testFileData) => {
            cy.log("LEt`s see", testFileData.option1);
            cy.log("Aoloooo", testFileData.option2);
            // <data>: This is a TypeScript type annotation. It tells the compiler:
            // "The data you’re getting will follow the shape of the data interface."
            // So now TypeScript gives you autocomplete and type safety for option1 and option2.
        })

    });
});