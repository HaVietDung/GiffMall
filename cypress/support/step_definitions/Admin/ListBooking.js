import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const LIST_BOOKING_ELEMENTS = require('../../elements/Admin/ListBooking')

When('Search a booking', () => {
    ACTION.typeText(LIST_BOOKING_ELEMENTS.SEARCH_BOOKING_ID, Cypress.env('BOOKING_ID'));
    cy.wait(10000);
});

When ('View booking detail', () => {
    ACTION.clickElement(LIST_BOOKING_ELEMENTS.VIEW_BOOKING_DETAIL);
    cy.wait(5000);
});