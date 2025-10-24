describe('Basic API test example', () => {
    it('GET request', () => {
       cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
            cy.log("")      

       });
    });
});