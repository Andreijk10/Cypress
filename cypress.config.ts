import { defineConfig } from "cypress";

//Verify download import
const { verifyDownloadTasks } = require('cy-verify-downloads');


export default defineConfig({
  e2e: {

    baseUrl : "https://uitestingplayground.com/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      //Verify download import
      on('task', verifyDownloadTasks); // ✅ This is how Cypress registers custom tasks
      // -----------------------
      // ⚠️ This means you must use require, not import, for verifyDownloadTasks, 
      // because it's exporting an object — not a function.

    },
  },
  
  env: {
    
    firstEnvironmentVariable : "Hello from the Cypress.Config.ts",
    //Use cypress.config.ts for defaults, and override via CLI (or package.json script) only when needed.
     secondEnvironmentVariable : 10,

    demoQA : "https://demoqa.com",
    theInternet : "https://the-internet.herokuapp.com",
    Angular : "https://www.globalsqa.com"

  },

   // pageLoadTimeout : 5000 // every it in cypress will wait 5 seconds for visit, go, reload
   viewportHeight : 1000,
   viewportWidth : 1400, 

});
