import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const HOME_ELEMENTS = require('../../elements/Guest/HomePage')

When('Search {string} and {string}', (city, celebretion) => {
    ACTION.selectDropdownByText(HOME_ELEMENTS.DROPDOWN_SELECT_CITY, city);
    cy.wait(3000)
    ACTION.selectDropdownByText(HOME_ELEMENTS.DROPDOWN_SELECT_CELEBRETION, celebretion);
    cy.wait(3000);
    ACTION.clickElement(HOME_ELEMENTS.SEARCH_LOCATION_BUTTON);
    cy.wait(30000);
});