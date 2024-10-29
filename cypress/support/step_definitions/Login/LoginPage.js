import { Given, When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const USERNAME_INPUT = "//input[@id='mui-1']";
const PASSWORD_INPUT = "//input[@id='mui-2']";
const LOGIN_BUTTON = "//button[@type='submit']";

Given('{string} go to home page', (actor) => {
    let homeUrl = '';
    switch (actor) {
        case "Guest":
            homeUrl = Cypress.env('GUEST_HOME_URL')
            break;
        case "Admin":
            homeUrl = Cypress.env('ADMIN_HOME_URL')
            break;
        case "Partner":
            homeUrl = Cypress.env('PARTNER_HOME_URL')
            break;
        default:
            break;
    };
    cy.visit(homeUrl);
});

When('{string} login', (actor) => {
    cy.wait(10000);
    ACTION.getElementByXpath(USERNAME_INPUT).then((element) => {
        if (element.length > 0){
            switch (actor) {
                case "Admin":
                    ACTION.typeText(USERNAME_INPUT, Cypress.env('ADMIN_USERNAME'));
                    ACTION.typeText(PASSWORD_INPUT, Cypress.env('ADMIN_PASSWORD'));
                    break;
                case "Partner":
                    ACTION.typeText(USERNAME_INPUT, Cypress.env('PARTNER_USERNAME'));
                    ACTION.typeText(PASSWORD_INPUT, Cypress.env('PARTNER_PASSWORD'));
                    break;
                default:
                    break;
            };
            ACTION.clickElement(LOGIN_BUTTON);
            cy.wait(5000);
        }
    })
});
