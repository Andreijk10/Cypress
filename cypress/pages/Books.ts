import {Main} from "../pages/Main";


class Books extends Main{
    visit(): void {
        cy.visit(`${Cypress.env("demoQA")}/books`); // we overwrite the Main visit method
        //Now, whenever you use BooksPage.visit() or when the test naturally navigates to the /books page,
        //  you're guaranteed to be on the correct page — where #userName-value actually exists and is visible.
    }
}

export const BooksPage = new Books();