class SignUpExecutor{


    nameSignUp = "#name";
    emailSignUp = "#email" ;
    passwordSignUp = "#password";
    termsPrivacy = ".checkbox-input";
    signUpButton = "#signup";
    ageSelector = ".btn-group > .btn";
    
    signup(config, user){
        cy.visit(config.serverUrl + config.signUp + user.accountType);
        
        cy.get(this.nameSignUp).type(user.name);
        cy.get(this.emailSignUp).type(user.email);
        cy.get(this.passwordSignUp).type(user.password);


        if(user.accountType === "#student") {
            cy.get(this.ageSelector).click();
            cy.get('[data-original-index="12"] > a').click();
        }
        
        cy.get(this.termsPrivacy).click();
        cy.get(this.signUpButton).click();        
    };


}


module.exports = new SignUpExecutor();