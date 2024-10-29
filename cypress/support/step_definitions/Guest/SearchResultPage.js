import { When } from "cypress-cucumber-preprocessor/steps";
const SERARCH_RESULT_ELEMENTS = require('../../elements/Guest/SearchResultPage');
const ACTION = require('../../util/action_common')

When("Select plan {string}", (planCode) => {
    const planID = Cypress.env(planCode);
    const planElement = `//div[contains(@class, 'ListingCard_ListingCard__')]/a[@href='/celebration-plans/${planID}']`;

    let foundPlan = false;

    const findAndClickPlanOnPage = () => {
        return ACTION.getElementByXpath(planElement).then((plan) => {
            if (plan && plan.length > 0) {
                cy.wrap(plan).scrollIntoView();
                cy.wrap(plan).click();
                foundPlan = true;
                return cy.wrap(plan);  
            }
        });
    };

    const checkNextPage = (pages, currentIndex) => {
        if (foundPlan) return;
        if (currentIndex < pages.length) {
            findAndClickPlanOnPage().then(() => {
                if (!foundPlan) {
                    ACTION.clickElement(SERARCH_RESULT_ELEMENTS.NEXT_PAGE);
                    cy.wait(30000); 
                    checkNextPage(pages, currentIndex + 1);  
                }
            });
        }
    };

    findAndClickPlanOnPage().then(() => {
        if (!foundPlan) {
            ACTION.getElementByXpath(SERARCH_RESULT_ELEMENTS.LIST_PAGE).then((pages) => {
                checkNextPage(pages, 1);  
            });
        }
    });
});

When('Select a plan', () => {
    ACTION.getAttribute(SERARCH_RESULT_ELEMENTS.PLAN, 'href').then((pathPlanId) => {
        const planID = pathPlanId.split("/")[1];
        Cypress.env('PLAN_ID_IN_LIST_PLAN', planID);
    });
    ACTION.clickElement(SERARCH_RESULT_ELEMENTS.PLAN);
    cy.wait(5000);
})