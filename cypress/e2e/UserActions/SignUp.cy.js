const SignUpExecutor = require('../../support/SignUpExecutor');
const EraseAccountExecutor = require('../../support/EraseAccountExecutor');


describe('SignUp', () => {
    let config;
    let freeUsers;


    beforeEach(() => {
        cy.fixture('config').then((c) => { config = c; });
        cy.fixture('freeUsers').then((fu) => { freeUsers = fu; });
    });
    it('SignUp', () => {
        freeUsers.forEach(user => {
            cy.visit(config.serverUrl);
            cy.setCookie("e613b4c4-d843-4835-8336-d84adb540aec", "1");
            SignUpExecutor.signup(config, user);
            cy.wait(5000);
            
            cy.visit(config.accountInfo);
            cy.wait(5000);
            cy.get('#accountType > tbody > tr.control-group > :nth-child(1) > h3').should("be.visible");
            cy.get('.btn-group > .btn').should("be.visible").click();


            cy.get(`[data-original-index="${user.rolesAfterSignUp}"] > a > .text`).should("be.visible").and(($selectorForType) => {
                const actualText = $selectorForType.text().trim();
                const expectedRoles = ["Personal/Work", "Teacher", "Student"];
                expect(actualText).to.eq(expectedRoles[user.rolesAfterSignUp]);


            });
            
            EraseAccountExecutor.eraseAccount(config, user);


        });     
    });
});    