import { forEach } from "cypress/types/lodash";
import { LoginTestPage } from "../../pages/LoginTest";

describe('Basic API test example', () => {
    // let jwtToken;

    // beforeEach(() => {
    //     cy.fixture("users").then((user) => {
    //         cy.fixture("config").then((config) => {
    //             // Step 1: Login via API
    //             cy.request({
    //                 method: "POST",
    //                 url: `${config.serverUrl}/login`,
    //                 form: true,
    //                 body: {
    //                     username: user[0].username,
    //                     password: user[0].password
    //                 }
    //             }).then((response) => {
    //                 expect(response.status).to.eq(200);
    //                 // assuming the JWT is in a cookie
    //                 const setCookie = response.headers['set-cookie'];

    //                 if(Array.isArray(setCookie)){
    //                     const jwtCookie = setCookie.find(c => c.startsWith('JWT='));
    //                     if(!jwtCookie) throw new Error("JWT cookie not found");
    //                     jwtToken = jwtCookie.split(';')[0].split('=')[1];

    //                     // ✅ Store in Cypress environment for later use
    //                     Cypress.env("jwtToken", jwtToken);

    //                 } else {
    //                     throw new Error("Expected set-cookie to be an array.");
    //                 }

    //             });
    //         });
    //     }); 
    // });

    // it('GET request', () => {
    //     const jwt = Cypress.env("jwtToken");

    //     cy.fixture("config").then((config) => {
    //         cy.request({
    //             method: "GET",
    //             url: `S{config.serverUrl}/api/maps/b48e4fb0a07369f9f0f0cf6824b449a1/data`,
    //             headers: {
    //                 Cookie: `JWT=${jwt}`
    //             }
    //         }).then((response) => {
    //             expect(response.status).to.eq(200);
    //             cy.log("Diagram Data:", response.body);
    //         });
    //     });
    // }); 
    
    it("should GET diagram details successfully", () => {
    cy.request({
      method: "GET",
      url: "https://www.mindomo.com/api/v1/diagrams/b48e4fb0a07369f9f0f0cf6824b449a1",
      headers: {
        accept: "application/json"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", "b48e4fb0a07369f9f0f0cf6824b449a1");
      cy.log("Diagram Name:", response.body.name);
    });
  });
});