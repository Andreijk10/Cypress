export interface data {
    option1: string | number | boolean
    option2: string
}

export interface User {
    "valid": boolean,
    "username": string,
    "password": string
    
}

//This is because you using typescript and you want to secure and have intellisense
// How does your testFile.json collaborate with your interface?
// Here’s the magic:

// cy.fixture<Data>("...") or cy.get<Data>("@alias")
// When you type the fixture or alias using your Data interface, you are telling TypeScript:

// “This JSON file will follow the shape defined in the Data interface.”

// So this:

// ts
// Copy
// Edit
// cy.get<data>("@testFileData")
// …will give you full IntelliSense and type checking like:

// ✅ Autocomplete for option1 and option2

