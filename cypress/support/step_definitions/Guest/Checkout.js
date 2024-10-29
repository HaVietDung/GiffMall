import { When } from "cypress-cucumber-preprocessor/steps";

const ACTION = require('../../util/action_common');
const CHECKOUT_ELEMENTS = require('../../elements/Guest/Checkout')

When('Enter card checkout infomation', () => {
    ACTION.typeText(CHECKOUT_ELEMENTS.CARD_NUMBER_INPUT, Cypress.env('CARD_NUMBER_STRIPE'));
    ACTION.typeText(CHECKOUT_ELEMENTS.CARD_EXPIRY_INPUT, Cypress.env('CARD_EXPIRY_STRIPE'));
    ACTION.typeText(CHECKOUT_ELEMENTS.CARD_CVC_INPUT, Cypress.env('CARD_CVC_STRIPE'));
    ACTION.typeText(CHECKOUT_ELEMENTS.BILLING_NAME_INPUT, Cypress.env('BILLING_NAME_STRIPE'));
    ACTION.selectOptionByValue('//select[@name="billingCountry"]', Cypress.env('BILLING_COUNTRY_STRIPE'))
    cy.wait(1000);
    ACTION.typeText(CHECKOUT_ELEMENTS.BILLING_POSTAL_CODE_INPUT, Cypress.env('BILLING_POSTAL_CODE_STRIPE'));
    ACTION.clickElement(CHECKOUT_ELEMENTS.SUBMIT_CHECKOUT_BUTTON);
    cy.wait(30000);

})