const SignUpExecutor = require('../../support/SignUpExecutor');
const EraseAccountExecutor = require("../../support/EraseAccountExecutor");
const PurchaseExecutor = require("../../support/PurchaseExecutor");

describe("UpgradeUsers", () => {
    let config;
    let users;
  
    // Load fixtures once before all tests
    before(() => {
      cy.fixture("config").then((c) => {
        config = c;
      });
  
      cy.fixture("users").then((u) => {
        users = u;
      });
    });
  
      it.only("SignupAndUpgrade", () => {
        cy.visit(config.serverUrl);
        cy.setCookie("e613b4c4-d843-4835-8336-d84adb540aec", "1");
        users.forEach((user) => {
            SignUpExecutor.signup(config, user);
            PurchaseExecutor.purchase(config, user);
    
            cy.request("POST", config.serverUrl + "/api/user/get-login-info", {
            email: user.username,
            password: user.password,
            }).then((response) => {
            expect(response.status).to.eq(200);
    
            user.rolesAfterUpgrade.forEach((role) => {
                expect(response.body.roles).to.include(role); // ✅ fixed (use `role`, not hardcoded 11)
            });
    
            cy.log("Account Info:", JSON.stringify(response.body, null, 2));
            });

            EraseAccountExecutor.eraseAccount(config, user);
        });
      });
  });
  