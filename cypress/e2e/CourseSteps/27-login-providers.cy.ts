describe("Automated login into facebook loginprovider account", () => {
	it.skip("Login provider facebook", () => {
		cy.visit("https://www.mindomo.com/login");
		cy.get("#moreLogInOptionsTrigger").click();
		cy.url()
		.should("include", "https://www.mindomo.com/login#more");

		cy.get("#facebook").click()
		
        cy.origin("https://www.facebook.com", () =>{

            cy.get("._9axz", { timeout : 10000 })
		    .should("have.text", "Log Into Facebook");
		    cy.get("#email").type("mindomotesting@gmail.com");
            cy.get("#pass").type("mindomo1");
            cy.get("#loginbutton").click();
			
        })
		
		// cy.contains("span > Continue as Mindomo").click();
		// cy.url()
		// .should("contain", "https://www.mindomo.com/dashboard");
		// cy.get("#mindomoLogo").first()
		// .should("be.visible");

	});
    
	// it('should load dashboard', () => {

  	// cy.loginToMindomo();// expira jwt imediat dupa autentificare e pointlesss
  	// cy.contains('My Mind Maps').should('exist');

	// });
   
 });
