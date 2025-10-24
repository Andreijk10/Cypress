describe('Environment variable Demo', () => {
    it('Demo', () => {
        cy.log(`Printing the first environment variable value: ${Cypress.env('firstEnvironmentVariable')}`);
    
        // let myValue = Cypress.env('firstEnvironmentVariable');
        // cy.log(myValue);

        cy.log(`Printing the second environment variable value: ${Cypress.env('secondEnvironmentVariable')}`);

        //When it is about environment variables the templates literals/quotes ` ` are a must
        //it doesn`t matter if the variables are string or number, need this   '  '  characters 
        //   `${Cypress.env('envVar')}`
    });
});