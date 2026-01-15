const LoginExecutor = require('../../support/LoginExecutor.js');
const EraseAccountExecutor = require('../../support/EraseAccountExecutor');


describe('FreeUserLimitations', () => {
    let config;
    let freeUser;
    let map = "/mindmap/0b0e70bce96f4fcd8142f5c14fa081c1";

    beforeEach(() => {
        cy.fixture('config').then((c) => { config = c; });
        cy.fixture('freeUser').then((fu) => { freeUser = fu; });
    });
    
    it('3 Map limitation', () => {
            LoginExecutor.login(config, freeUser[0]);
            cy.get("#createMap").click();
            cy.get(':nth-child(1) > .btn-category-outer > .map-options > .btns-container > .btn-create-map').click()
            cy.get('.active > .item-description')
            .should("have.text", "You’re limited to 3 diagrams on the free plan. Upgrade for unlimited diagrams.");
    });

    it('View as Gantt Pro feature', () => {
            LoginExecutor.login(config, freeUser[0]);
            cy.visit(config.serverUrl + map);
            cy.get("#megaMenu").click();
            cy.get('#ganttMapLink').click()
            cy.get('.active > .item-description')
            .should("have.text", "Upgrade to unlock Gantt charts and take your productivity to the next level.");
    });
});    