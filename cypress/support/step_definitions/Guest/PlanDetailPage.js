import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const PLAN_DETAIL_ELEMENTS = require('../../elements/Guest/PlanDetailPage');

When('Get infomation in plan detail', () => {
    ACTION.scrollToElement(PLAN_DETAIL_ELEMENTS.PRICE_OF_PLAN);
    ACTION.getText(PLAN_DETAIL_ELEMENTS.PRICE_OF_PLAN).then((priceText) => {
        const price = parseFloat(priceText.replace("￥", "").replace(",", "."));
        Cypress.env('PRICE_OF_PLAN_DETAIL', price);
        Cypress.env('PRICE_PLAN', priceText.replace("￥", "").replace(",", "."))
    });

    ACTION.scrollToElement(PLAN_DETAIL_ELEMENTS.VENUE_ADDRESS);
    ACTION.getText(PLAN_DETAIL_ELEMENTS.VENUE_ADDRESS).then((venueAddress) => {
        Cypress.env('VENUE_ADDRESS_PLAN_DETAIL', venueAddress);
    });
    ACTION.getText(PLAN_DETAIL_ELEMENTS.VENUS_PHONE_NUMBER).then((venuePhone) => {
        Cypress.env('VENUE_PHONE_PLAN_DETAIL', venuePhone);
    });

    ACTION.getText(PLAN_DETAIL_ELEMENTS.COURSE_NAME).then((courseName) => {
        Cypress.env('COURSE_NAME_PLAN_DETAIL', courseName);
    });
});

When('Go to Reservation Information Stage from button Proceed to booking', () => {
    ACTION.scrollToElement(PLAN_DETAIL_ELEMENTS.PROCESS_TO_BOOKING_BUTTON);
    ACTION.clickElement(PLAN_DETAIL_ELEMENTS.PROCESS_TO_BOOKING_BUTTON);
    cy.wait(3000);
});