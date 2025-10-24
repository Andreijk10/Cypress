
import {Main} from "../pages/Main";


class Login extends Main{
    private username: string = "#userName";
    private password: string = "#password";
    private login: string = "#login";
    private invalidLoginMessage: string = ".mb-1";
    private titleLogin: string = ".text-center";


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

    get invalidLoginMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
       return  cy.get(this.invalidLoginMessage);
    } 

    


    //Aproch by function
    submitLogin(usernameP: string, passwordP: string): void {
        cy.get(this.username).type(usernameP);
        cy.get(this.password).type(passwordP);
        cy.get(this.login).click();
        cy.url()
        .should("include", "/profile");

    }

    

}

export const LoginPage = new Login()