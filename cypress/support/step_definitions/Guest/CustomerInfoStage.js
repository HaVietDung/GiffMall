import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const CUSTOMER_INFO_ELEMENTS = require('../../elements/Guest/CustomerInfoStage')
require('cypress-iframe');

When('Enter customer infomation', (dataTable) => {

    const customerInfo = dataTable.hashes()[0];
    const {
        textFirstKanji,
        textSecondKanji,
        textFirstKana,
        textSecondKana,
        phoneNumber,
        email,
        confirmMail,
        childrenAnswer,
        messageAnswer,
        dislikeAnswer,
        requestOrInquiries
    } = customerInfo

    Cypress.env('TEXT_FIRST_KANJI_CUSTOMER_INFO', textFirstKanji);
    Cypress.env('TEXT_SECOND_KANJI_CUSTOMER_INFO', textSecondKanji);
    Cypress.env('TEXT_FIRST_KANA_CUSTOMER_INFO', textFirstKana);
    Cypress.env('TEXT_SECOND_KANA_CUSTOMER_INFO', textSecondKana);
    Cypress.env('PHONE_NUMBER_CUSTOMER_INFO', phoneNumber);
    Cypress.env('EMAIL_CUSTOMER_INFO', email);

    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.TEXT_FIRST_KANJI_INPUT, textFirstKanji);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.TEXT_SECOND_KANJI_INPUT, textSecondKanji);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.TEXT_FIRST_KANA_INPUT, textFirstKana);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.TEXT_SECOND_KANA_INPUT, textSecondKana);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.PHONE_NUMBER_INPUT, phoneNumber);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.EMAIL_INPUT, email);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.CONFIRM_EMAIL_INPUT, confirmMail);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.COUNT_CHILDREN_AND_AGE_ANSWER, childrenAnswer);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.MESSAGE_ANSWER, messageAnswer);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.DISLIKE_ANSWER, dislikeAnswer);
    ACTION.typeText(CUSTOMER_INFO_ELEMENTS.REQUEST_OR_INQUIRIES_ANWER, requestOrInquiries);
});

When('Checkout with payment method {string}', (paymentMethod) => {
    ACTION.selectOptionByValue(CUSTOMER_INFO_ELEMENTS.PAYMENT_METHOD_DROPDOWN, paymentMethod);
    ACTION.clickElement(CUSTOMER_INFO_ELEMENTS.CHECK_OUT_SUBMIT_BUTTON);
    cy.wait(5000);
    ACTION.clickElement(CUSTOMER_INFO_ELEMENTS.PAY_CREDIT_CART_BUTTON);
    // cy.xpath("//div[@id='AmazonPayButton']").click();
    cy.wait(30000);
});