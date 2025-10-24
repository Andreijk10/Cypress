describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.log("Hello World !!!!");
  })
  it("Type script introduction", () =>{
    let stringVariable: string = "9" ;
    let numberVariable: number = 10 ;
    let booleanVariable: boolean  = true ;
    let anyVariable: any = "sir de caractere" ;
    let numberVariable2: number = 5 ;
    let numberVariable3: number = 23; 

    function addTwoNumbers(a:number, b:number): number{ 
      // here we declare a number parameter, and that we expect a number result
      return a + b ;
    }
    //cy.log(addTwoNumbers(numberVariable2, numberVariable3));
    // cy.log ask for a string not for a number, js can java script can overcome such limitations
    // but by declaring the parameter in function as number we shutdown the type limitation overcome 
    // it is complening but still do the math in cypress it log 

    interface User{ // Here we create an interface
      username: string; 
      password: string;
    }
    function returnsTheUserParameters(user:User): void{
      // here we create a function that returns void
      cy.log("This is the user name " + user.username);
      cy.log("This is the user password " + user.password);
    }
    const utilizator: User ={
      // here we create the object utilizator with our specific types(uername,password);
      username: "Andrei Iordache",
      password: "mindomo20"
    }
    returnsTheUserParameters(utilizator);
    // here pe call for the function 

  })
})