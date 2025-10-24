class LoginExecutor{


    username = "#username" ;
    password = "#password";
    loginBtn = "#login";



    login(config, user){
        cy.visit(config.serverUrl + "/login");
        cy.get(this.username).type(user.email);
        cy.get(this.password).type(user.password);
        cy.get(this.loginBtn).click();
        cy.url().should("include", "/dashboard");  
    };
}


module.exports = new LoginExecutor();