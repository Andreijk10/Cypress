describe('Image scenarios', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("demoQA")}/broken`);

    });

    it('Good image scenario', () => {
        cy.get(`div > img[src="/images/Toolsqa.jpg"]`)
        .should("be.visible")
        .and(($img) => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        //$img is a jQuery-wrapped object Cypress gives you.
        // Even if it only matched one element, it's still array-like.
        // So $img[0] is the raw DOM element inside that wrapper.
        // You need the raw DOM element to access native properties like .naturalWidth.
            expect(($img[0] as HTMLImageElement).naturalHeight).to.be.greaterThan(0);
        });
    });
    it('Broken image scenario', () => {
        cy.get('[src="/images/Toolsqa_1.jpg"]')
        .should("be.visible")
        .and(($img) => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        //$img is a jQuery-wrapped object Cypress gives you.
        // Even if it only matched one element, it's still array-like.
        // So $img[0] is the raw DOM element inside that wrapper.
        // You need the raw DOM element to access native properties like .naturalWidth.
            expect(($img[0] as HTMLImageElement).naturalHeight).to.be.greaterThan(0);

        });
    });
});

describe.only('Herekuapp images chellenge', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("theInternet")}/broken_images`)
    })
    
    it('Check what image it is a broken one - First image', () => {
        cy.get('[src="asdf.jpg"]')
        .should("be.visible")
        .and(($img) => {
            expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0);
        })
    });

    it('Check what image it is a broken one - Second image', () => {
        cy.get('[src="hjkl.jpg"]')
        .should("be.visible")
        .and(($img) => {
            expect(($img[0] as HTMLImageElement).naturalHeight).to.be.greaterThan(0);
        })
    });

    it('Check what image it is a broken one - Third image', () => {
        cy.get("div.example img") //we use last and this selector just for fun and practise
        .last()
        .should("be.visible")
        .and(($img) => {
            expect(($img[0] as HTMLImageElement).naturalHeight).to.be.greaterThan(0);
        })
    });
});