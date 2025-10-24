
import { LoginOnTest } from "../pages/LoginTestEXSWAP";


describe('Sign-up on test.exswap.com', () => {
    beforeEach(() => {
        cy.visit("https://test.exswap.com/");
    });
    
    it('Sign-up as Personal', () => {
        // Intercept the CAPTCHA verification request and fake a success response
        cy.intercept(
        'POST', 'https://www.google.com/recaptcha/api2/userverify?k=6LcdNBYUAAAAAK7-fUEI3LA_hlOjK6mdjRF9eQ1r', {
         body: { success: true }
        
        });
        
        cy.contains("a", "Sign Up").click()

        cy.url()
        .should("include", "/signup");
        cy.get(`[data-value="1"]`).click()
        cy.url()
        .should("include", "/signup#personal");

        LoginOnTest.submitLoginTest("Andrei Boss", "andrei.bossdeboss@gmail.com", "Mindomo10!");
        
    });
    
});