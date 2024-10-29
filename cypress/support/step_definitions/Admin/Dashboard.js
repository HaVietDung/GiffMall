import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const DASHBOARD = require('../../elements/Admin/Dasboard')

When('Go to list booking', () => {
    ACTION.clickElement(DASHBOARD.BOOKINGS_MENU);
    cy.wait(1000);
    ACTION.clickElement(DASHBOARD.LIST_BOOKINGS_MENU);
    cy.wait(30000);
});