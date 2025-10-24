import { delay } from "cypress/types/bluebird";

describe('Written into the iframe chellenge', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });
    it("Write into the iframe", () => {
        cy.get("#mce_0_ifr").then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
            .find("p")
            .type("{selectall}Boss de boss", {delay : 2000})
            .should("have.text", "Boss de boss");
            // it is good
        })
    })

});