import { When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const INFO_BOOKING_BASIC_ELEMENTS = require('../../elements/Admin/InfoBookingBasic')

When('Get infomation booking in info booking basic', () => {
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.ID_BOOKING, 'value').then((bookingID) => {
        Cypress.env('BOOKING_ID_INFO_BOOKING_BASIC', bookingID);
    });

    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.EMAIL_BOOKING, 'value').then((email) => {
        Cypress.env('EMAIL_INFO_BOOKING_BASIC', email);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.FAMILY_NAME_BOOKING, 'value').then((familyName) => {
        Cypress.env('FAMILY_NAME_INFO_BOOKING_BASIC', familyName);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.GIVEN_NAME_BOOKING, 'value').then((givenName) => {
        Cypress.env('GIVEN_NAME_INFO_BOOKING_BASIC', givenName);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.FAMILY_NAME_FURIGANA_BOOKING, 'value').then((familyNameFurigana) => {
        Cypress.env('FAMILY_NAME_FURIGANA_INFO_BOOKING_BASIC', familyNameFurigana);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.GIVEN_NAME_FURIGANA_BOOKING, 'value').then((givenNameFurigana) => {
        Cypress.env('GIVEN_NAME_FURIGANA_INFO_BOOKING_BASIC', givenNameFurigana);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.PHONE_NUMBER_BOOKING, 'value').then((phoneNumber) => {
        Cypress.env('PHONE_NUMBER_INFO_BOOKING_BASIC', phoneNumber);
    });

    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.PLAN_ID, 'value').then((planId) => {
        Cypress.env('PLAN_ID_INFO_BOOKING_BASIC', planId);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.PLAN_NAME, 'value').then((planName) => {
        Cypress.env('PLAN_NAME_INFO_BOOKING_BASIC', planName);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.COURSE_NAME, 'value').then((courseName) => {
        Cypress.env('COURSE_NAME_INFO_BOOKING_BASIC', courseName);
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.RESERVATION_DATE_TIME, 'value').then((dateTime) => {
        Cypress.env('RESERVATION_DATE_INFO_BOOKING_BASIC', dateTime);
    });

    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.PAYMENT_AMOUNT, 'value').then((paymentAmount) => {
        Cypress.env('PAYMENT_AMOUNT_INFO_BOOKING_BASIC', paymentAmount);
    });

    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.VENUS, 'value').then((venueName) => {
        Cypress.env('VENUE_NAME_INFO_BOOKING_BASIC', venueName.trim());
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.VENUS_ADDRESS, 'value').then((venueAddress) => {
        Cypress.env('VENUE_ADDRESS_INFO_BOOKING_BASIC', venueAddress.trim());
    });
    ACTION.getAttribute(INFO_BOOKING_BASIC_ELEMENTS.VENUS_PHONE_NUMBER, 'value').then((venusPhone) => {
        Cypress.env('VENUE_PHONE_INFO_BOOKING_BASIC', venusPhone.trim());
    });

});

Then('Check infomation booking in info booking basic', () => {
    // Booking Info
    expect(Cypress.env('BOOKING_ID')).to.equals(Cypress.env('BOOKING_ID_INFO_BOOKING_BASIC'));

    // Customer
    expect(Cypress.env('TEXT_FIRST_KANJI_CUSTOMER_INFO')).to.equals(Cypress.env('FAMILY_NAME_INFO_BOOKING_BASIC'));
    expect(Cypress.env('TEXT_SECOND_KANJI_CUSTOMER_INFO')).to.equals(Cypress.env('GIVEN_NAME_INFO_BOOKING_BASIC'));
    expect(Cypress.env('TEXT_FIRST_KANA_CUSTOMER_INFO')).to.equals(Cypress.env('FAMILY_NAME_FURIGANA_INFO_BOOKING_BASIC'));
    expect(Cypress.env('TEXT_SECOND_KANA_CUSTOMER_INFO')).to.equals(Cypress.env('GIVEN_NAME_FURIGANA_INFO_BOOKING_BASIC'));
    expect(Cypress.env('EMAIL_CUSTOMER_INFO')).to.equals(Cypress.env('EMAIL_INFO_BOOKING_BASIC'));
    expect(Cypress.env('PHONE_NUMBER_CUSTOMER_INFO')).to.equals(Cypress.env('PHONE_NUMBER_INFO_BOOKING_BASIC'));

    // Plan
    expect(Cypress.env('PHONE_NUMBER_CUSTOMER_INFO')).to.equals(Cypress.env('PHONE_NUMBER_INFO_BOOKING_BASIC'));
    expect(Cypress.env('COURSE_NAME_INFO_BOOKING_BASIC')).to.contains(Cypress.env('COURSE_NAME_PLAN_DETAIL'));
    expect(Cypress.env('PLAN_NAME_INFO_BOOKING_BASIC')).to.contains(Cypress.env('PLAN_NAME'));
    expect(Cypress.env('RESERVATION_DATE_INFO_BOOKING_BASIC')).to.equals(Cypress.env('DATE_TIME'));

    // Payment
    expect(Cypress.env('PAYMENT_AMOUNT_INFO_BOOKING_BASIC')).to.equals(Cypress.env('TOTAL_PRICE_SUCCESS'));


    // Venue
    expect(Cypress.env('VENUE_NAME_INFO_BOOKING_BASIC')).to.equals(Cypress.env('VENUE_NAME'));
    expect(Cypress.env('VENUE_ADDRESS_PLAN_DETAIL')).to.contain(Cypress.env('VENUE_ADDRESS_INFO_BOOKING_BASIC'));
    expect(Cypress.env('VENUE_PHONE_INFO_BOOKING_BASIC')).to.contain(Cypress.env('VENUE_PHONE_PLAN_DETAIL'));
});


