import 'cypress-real-events';


class PurchaseExecutor {


    name = "#name";
    email = "#email" ;
    signup = "#password";


    /**
     * Fills in dummy billing and card details for testing
     */
    purchase(config, user) {
       
        cy.visit(config.serverUrl + config.purchasePro);
        
        // Fill in billing information
        cy.get(this.name).type(user.name);
        cy.get(this.email).type(user.email);
        cy.get(this.signup).type(user.password);


        cy.get('#billingName').clear().type('John Smith');           // Billing name
        cy.get('#billingCity').clear().type('Townsville');           // City
        cy.get('#billingAddress').clear().type('Street No. 10');     // Address
        cy.get('#billingState').clear().type('Stateson');            // State
        cy.get('#billingZip').clear().type('101101');                // Zip code
        cy.get('#billingPhone').clear().type('0744444444');          // Phone number


        // Focus into the card input iframe (if applicable)
        cy.get('[for="card"]').click();
        cy.realPress('Tab');


        // Enter dummy card number
        cy.realType('4111111111111111');     // 16-digit Visa test card number


        // Enter expiration date
        cy.realPress('Tab');
        cy.realType('1130');                 // MMYY (e.g., November 2030)


        // Enter CVV
        cy.realPress('Tab');
        cy.realType('111');


        // Accept terms and complete purchase
        cy.get('#tearmAndPrivacy').click();  // Accept terms and conditions
        cy.get('#purchase').click();         // Submit the purchase


        // Wait for purchase process to complete
        cy.wait(25000);
        
    }
}
module.exports = new PurchaseExecutor();

