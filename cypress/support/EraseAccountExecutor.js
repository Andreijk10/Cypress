import 'cypress-real-events';


class EraseAccountExecutor {


  eraseAccount(config, user) {
        cy.visit(config.accountInfo);
        // Navigate: User menu → Account → Settings → Erase Account
        cy.get('#eraseAccount').click();
        cy.get('#agreeTerms').click();
        cy.get('.flex-cont-centered > #eraseAccount').click();
        cy.get('#yes').click();
        cy.wait(5000);


        // Verify redirect to login page
        cy.get('.font-size-52').should('have.text', 'Welcome back');
        cy.get('#username').should('be.visible');
        cy.get('#password').should('be.visible');


        // Attempt to log in again with deleted account
         


        // Expect invalid login error
        cy.get('#validationError')
          .should('be.visible')
          .and('have.text', 'Invalid login, please try again.');
      
    
  }
}


module.exports = new EraseAccountExecutor();

