import { Then, When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common');
const LIST_BOOKING_ELEMENTS = require('../../elements/Admin/ListBooking');
const BOOKING_ACTIVITES_ELEMENTS = require('../../elements/Admin/InfoBookingActivities')

When('Go to activities tab in info booking', () => {
    ACTION.clickElement(LIST_BOOKING_ELEMENTS.ACTIVITIES_TAB);
    cy.wait(3000);
});

When('Get infomation booking in info booking activities', () => {
    ACTION.getAttribute(BOOKING_ACTIVITES_ELEMENTS.VENUS, 'value').then((venus) => {
        Cypress.env('VENUS_ACTIVITIES_BOOKING_INFO', venus);
    });
    ACTION.getAttribute(BOOKING_ACTIVITES_ELEMENTS.SEAT_OPTION, 'value').then((seatOption) => {
        Cypress.env('SEAT_OPTION_ACTIVITIES_BOOKING_INFO', seatOption);
    });
    ACTION.getAttribute(BOOKING_ACTIVITES_ELEMENTS.DATE_TIME, 'value').then((dateTime) => {
        Cypress.env('DATE_TIME_ACTIVITIES_BOOKING_INFO', dateTime);
    });
    ACTION.getAttribute(BOOKING_ACTIVITES_ELEMENTS.SPECIAL_REQUEST, 'value').then((specialRequest) => {
        Cypress.env('SPECIAL_REQUEST_ACTIVITIES_BOOKING_INFO', specialRequest);
    });

    const listPriceType = [];
    cy.xpath(BOOKING_ACTIVITES_ELEMENTS.LIST_PRICE_TYPE).each((elements) => {
        const priceType = elements.find(BOOKING_ACTIVITES_ELEMENTS.PRICE_TYPE).val();
        const quantity = elements.find(BOOKING_ACTIVITES_ELEMENTS.QUANTITY).val();
        const amount = elements.find(BOOKING_ACTIVITES_ELEMENTS.AMOUNT).val();
        listPriceType.push({
            priceType: priceType,
            quantity: quantity,
            amount: amount
        });
        Cypress.env('LIST_PRICE_TYPE', listPriceType);
    });

    const listQuestionAndAnswer = [];
    cy.xpath(BOOKING_ACTIVITES_ELEMENTS.LIST_QUESTION).each((elements) => {
        const question = elements.find(BOOKING_ACTIVITES_ELEMENTS.QUESTION).val();
        const answer = elements.find(BOOKING_ACTIVITES_ELEMENTS.ANSWER).val();
        listQuestionAndAnswer.push({
            question: question,
            answer: answer
        });
        Cypress.env('LIST_QUESTION_ANSWER_ACTIVITIES', listQuestionAndAnswer);
    });
});

Then('Check infomation booking in info booking activities', () => {

    expect(Cypress.env('VENUS_ACTIVITIES_BOOKING_INFO')).to.equals(Cypress.env('VENUE_NAME'));
    expect(Cypress.env('SEAT_OPTION_ACTIVITIES_BOOKING_INFO')).to.equals(Cypress.env('SEAT_OPTION'))
    expect(Cypress.env('DATE_TIME_ACTIVITIES_BOOKING_INFO')).to.equals(Cypress.env('DATE_TIME'));
    expect(Cypress.env('SPECIAL_REQUEST_ACTIVITIES_BOOKING_INFO')).to.equals(Cypress.env('SPECIAL_REQUEST'));


    const listPriceType = Cypress.env('LIST_PRICE_TYPE');
    const listUnitPrice = Cypress.env('LIST_UNIT_PRICE');
    listPriceType.forEach(item1 => {
        const item2 = listUnitPrice.find(item => item.priceType.trim() === item1.priceType.trim());
        if (item2) {
            expect(item1.priceType).to.equals(item2.priceType);
            expect(item1.amount).to.equals(item2.unitPrice);
            expect(item1.quantity).to.equals(item2.quantity);
        }
    });

    const listQuestionAndAnswerActivities = Cypress.env('LIST_QUESTION_ANSWER_ACTIVITIES');
    const listQuestionAndAnswer = Cypress.env('LIST_QUESTION_ANSWER');
    listQuestionAndAnswerActivities.forEach(item1 => {
        const item2 = listQuestionAndAnswer.find(item => item.question.trim() === item1.question.trim());
        if (item2) {
            expect(item1.question).to.contain(item2.question);
            expect(item1.answer).to.contain(item2.answer);
        }
    });
});
