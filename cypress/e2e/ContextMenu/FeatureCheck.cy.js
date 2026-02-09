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
            cy.get('#insert').click({force: true});
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
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click({force: true});
            cy.get('#insertFormula > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();  

            // Insert Task
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#subtopicAsTask > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();

            // Insert Floating Topic
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
            cy.get('#insert').click({force: true}).should('be.visible');
            cy.get('#insertMenu > .item-view > .animated-container > #floating > .text').click({force: true});
            cy.get('#n0-2-0 > .md-n-shape > .md-n-text').click();

            // Insert Duplicate Topic
            cy.get('#n0-3 > .md-n-shape > .md-n-text').click({force: true});
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

            // Icons
            cy.get('#n0-2 > .md-n-shape').click({force: true});
            cy.get('#symbol').click({force: true});
            cy.get('#symbolsMenu > .animated-container > .input-cont-rel').click({force: true}).type("muscle");
            cy.wait(3000);
            cy.get('#_3058 > .icon').click();
            cy.get('#symbolsMenu svg[viewBox="0 0 18.08 18.08"]').click();
            cy.get('#regional').click();
            cy.get('#_3488 span.icon').click();
            cy.get('#people span.icon').click();
            cy.get('#_2923 span.icon').click();
            cy.get('#activity').click();
            cy.get('#_2335 span.icon').click();
            cy.get('#objects').click();
            cy.get('#_2449 span.icon').click();
            // Remove all topic icons
            //cy.get('#symbolsMenu span.text').click();

            // Multimedia
            // Image
            cy.get('#multimedia svg').click();
            cy.get('#insertImageInputTopic').click().type("https://media.istockphoto.com/id/814423752/ro/fotografie/ochi-de-model-cu-arta-colorata-make-up-prim-plan.jpg?s=1024x1024&w=is&k=20&c=Pa3Q7qu3O3-IIBUpnPkf0jRJCaPEzJ3fQbVcBg2F03I={enter}");
            cy.get('#imageMenu button[aria-label="Attach Uploaded"]').click({force: true});
            cy.get('#imageMenu button:nth-child(2) img').click();
            cy.wait(3000);  
            cy.get('#imageMenu div[data-view="multimedia-image"] button.btn-bord').click({force: true});
            cy.get('#imageMenu svg[viewBox="0 0 20.83 17.16"]').click(); 
            cy.get('#imageMenu button[data-multimedia-url="../pictures/thumbnails/gallery/business/announcement.png"] img').click();
            cy.wait(3000);
            cy.get('#imageMenu div[data-view="multimedia-image"] button.btn-bord').click({force: true});
            cy.get('#imageMenu span.icon-search-large svg').click();
            cy.get('#searchImageInputTopic').type('Mindomo{enter}');
            cy.get('#imageMenu button[data-multimedia-url="https://play-lh.googleusercontent.com/a0fts9JgssmNY96xHLTebExU2qwBiDmwYybheAf8u-AQ2oFLsMmV_kvZzy1joMif5g"] img').click();
            cy.get('#imageMenu div[data-view="multimedia-image"] button.btn-bord').click({force: true});

            // Video
            cy.get('.btns-cont-ht-33 > [data-trigger-view="video"]').click();
            cy.get('.btns-cont > [data-trigger-view="video"]').click();
            cy.get('#insertVideoInput').click().type("https://www.youtube.com/watch?v=oXKnrDLg2KA{enter}");
            cy.get('#videoMenu button[aria-label="Attach Uploaded"] span.icon-outer-cont').click();
            cy.get('[data-view="multimedia-video"] > .animated-container > .search-item-result-container > .nav-menu > .nav-item > .multimedia-img-container').click();
            cy.wait(3000);
            cy.get('#videoMenu div[data-view="multimedia-video"] button.btn-bord span.icon-svg svg').click();
            cy.get('.nav-menu > [aria-label="Search Youtube Video..."]').click();
            cy.get('#youtubeVideoInput').click().type("Mindomo{enter}");
            cy.wait(3000);
            cy.get('[data-multimedia-url="https://www.youtube.com/watch?v=4M2sxZPVTrg"]').click();
            cy.get('[data-view="youtube"] > .animated-container > .flex-5-gap > .btn-bord').click();


            // Record
            cy.get('.btns-cont-ht-33 > [data-trigger-view="audio"]').click()
            cy.get('#insertAudioInput').click().type("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3{enter}");
            cy.get('[data-view="audio"] > .animated-container > .mar-10-t > .nav-menu > .btn-change-multimedia').click()
            cy.get('[data-multimedia-url="aud://07a8c63b2edd4291873e99eae95c2474"] > .multimedia-img-container').click()
            cy.get('[data-view="multimedia-audio"] > .animated-container > .flex-5-gap > .btn-bord').click();
            cy.get('#recordBtn').click();
            cy.get('#startRecording').click();
            cy.wait(4000);
            cy.get('#stopRecording').click();
            cy.get("#saveBtn").click();

            //Links Attachments
            cy.get('#hyperlink').click();
            cy.get('#hyperlinkInput0').click().type("https://www.mindomo.com{enter}");

           });
        });
    });
});






