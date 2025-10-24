import {Main} from "../pages/Main";


export class LoginTest extends Main{
    private username: string = "#username";
    private password: string = "#password";
    private login: string = "#login";
    //private invalidLoginMessage: string = ".mb-1";

    //Aproch element by element 

    get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
       return  cy.get(this.username);
    } 

    get passwordElement(): Cypress.Chainable {
       return  cy.get(this.password);
    }

    get loginButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
       return  cy.get(this.login);
    }

    // get invalidLoginMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    //    return  cy.get(this.invalidLoginMessage);
    // } 

    
    //Aproch by function
    submitTestLogin(usernameP: string, passwordP: string): void {
        cy.get(this.username).type(usernameP);
        cy.get(this.password).type(passwordP);
        cy.get(this.login).click();
      //   cy.url()
      //   .should("include", "/dashboard");

    }

    

}

export const LoginTestPage = new LoginTest()