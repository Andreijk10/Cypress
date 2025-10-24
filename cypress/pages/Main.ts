export class Main {
    private usernameValue: string = "#userName-value";
    private header: string = ".text-center";

    get usernameValueElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.usernameValue);
    };

    get headerElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.header);
    };

    visit(): void {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    }
}

//export const MainClass = new Main(); 

// 🔍 Why is export const MainClass = new Main(); not the same as export class Main {}?
// ✅ export class Main {}
// You're exporting the blueprint — the class definition itself.
// This lets other files:
// Create new instances: new Main()
// Extend it in child classes: class Login extends Main
// It’s reusable and inheritable.

// ❌ export const MainClass = new Main();
// You're exporting one specific instance — not the class definition.
// This gives you:
// A single shared object
// Cannot extend it (class Something extends MainClass ❌ — not allowed)
// You can use the object’s methods, but not inherit from it

// ✅ Summary
// Goal	Syntax
// You want to extend the class	export class Main {}
// You want a shared instance	export const Main = new Main();
// You want both	export class Main {}; export const main = new Main();
