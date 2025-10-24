import {User} from "../e2e/model" ;

describe('Array of objects - Users', () => {
    
    it('Getting user information based of my fixture', () => {
        cy.fixture<{users: User[]}>("arrayOfObjects.json").its("users").then((users) => {
            //its("users")now the yeilded object it is gonna be an array
            //This tells Cypress to extract just the "users" property from the loaded JSON object.
            // So now Cypress is working with just the array of users (not the whole object anymore).
            
            // What it does:
            // Loads your fixture file called arrayOfObjects.json from the cypress/fixtures folder.
            // Generics in cy.fixture<{users: User[]}>():
            // This tells TypeScript:
            // “Expect this JSON to be an object with a key called users, and the value is an array of User objects.”
            cy.log("Let`s see the array", users);
            
            users.forEach(user => {
                cy.log(user.username);
                cy.log(user.password);
                //Iterates through each user object in the array and logs their username and password.
            })
        })

    });
});