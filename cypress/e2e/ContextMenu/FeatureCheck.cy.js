import 'cypress-real-events';
const LoginExecutor = require('../../support/executors/LoginExecutor.js');

describe('FeatureCheck', () => {
    let config;
    let users;
    let diagrams;
  
    before(() => {
      cy.viewport(1920, 1080);
      cy.fixture("config").then((c) => (config = c));
      cy.fixture("users").then((u) => (users = u));
      cy.fixture("diagrams").then((d) => (diagrams = d));

    });

    it("InsertMenu", () => {
        users.forEach((user) => {
            //Login
           LoginExecutor.login(config, user);

           diagrams.feature_check.forEach((diagram) =>{
            const diagramId = diagram.id;
            const visitUrl = (config.serverUrl + "/mindmap/" + diagramId);
            cy.visit(visitUrl);
            // Insert Menu
            // Insert subtopic
            cy.get('#n0-0 > .md-n-shape').click();
            cy.get('#insert').click();
            cy.get('[data-insert="subtopic"]').click();

            // Insert topic below
            cy.get('#n0-0-0 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click();
            cy.get('.insert-sibling-after').click();

            // Insert Relationship
            cy.get('#n0-0-0 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click();
            cy.get('#insertRelationship').click();
            cy.get('#n0-2 > .md-n-shape').click();

            // Insert Summary
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click();
            cy.get('#insertSummary > .text').click();

            // Insert Boundary
            cy.get('#n0-0 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click();
            cy.get('#insertBoundary').click(); 
            cy.wait(3000)

            // Insert Label
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#insertLabel > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();
            
            // Insert Math Equation
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#insertFormula > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();  

            // Insert Task
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#subtopicAsTask > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();

            // Insert Floating Topic
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#insertMenu > .item-view > .animated-container > #floating > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();

            // Insert Duplicate Topic
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click();
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#duplicate > .text').click({force: true});
            
            // Insert Topic with same style
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('[data-insert="siblingWithStyle"] > .text').click({force: true});

            // Style Menu
            // Text Style
            cy.get('#n0-0-0-0 > .md-n-shape').click({force: true});
            cy.get('#nodeStyle').click({force: true});
            cy.get('.btn.active > .color').click({force: true});
            cy.get('[data-view="title-style-style-inner"] > .animated-container > .text-style > .bold').click({force: true});
            cy.get('[data-view="title-style-style-inner"] > .animated-container > .text-style > .italic').click({force: true});
            cy.get('[data-view="title-style-style-inner"] > .animated-container > .text-style > .underline').click({force: true});
            cy.get('[data-view="title-style-style-inner"] > .animated-container > .text-style > .strikethrough').click({force: true});
            cy.get('[data-view="title-style-style-inner"] > .animated-container > .flex-just-space-around > .text-alignment-container > .right').click({force: true});
            cy.get('[data-font-size="18"]').click({force: true});
            cy.get(':nth-child(5) > .menu-item-sub > [data-toggle="dropdown-submenu"] > .text').click({force: true})
            cy.get('.pad-16 > .search-item-result-container > .nav-menu > [data-value="Arvo"]').click({force: true});
            cy.get('#nodeStyle').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape').click({force: true});

            // Background 
            cy.get('#n0-0-0-0 > .md-n-shape').click({force: true});
            cy.get('#nodeStyle').click({force: true});
            cy.get('#backgroundBtn').click({force: true});
            cy.get('.cont-hor > .color-selection > .color-default-view > .colors-container > [data-color-value="FFEE65"] > .color').click({force:true});
            cy.get('#shapeBtn').click({force: true});
            cy.get('#shapesContainerMenu > [data-value="11"]').click({force:true});
            cy.wait(3000);
            cy.get('#styleBtn').click({force: true});
            cy.get('[data-submenu="topic-fill-style"] > .menu-item > .text').click({force: true});
            cy.get('[data-tag="23"] > span').click({force: true});

           });
        });
    });
});

