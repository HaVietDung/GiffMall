import { Then, When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common')
const ASSERTION = require('../../util/assertion_common')
const CHECKOUT_SUCCESS_ELEMENTS = require('../../elements/Guest/CheckoutSuccess');


Then('Check booking plan success', () => {
    ASSERTION.assertion(CHECKOUT_SUCCESS_ELEMENTS.THANKYOU_TAB, 'be.visible')
});

When('Get infomation booking in checkout success page', () => {
    const extractPrices = (textArray) => {
        return textArray.map(text => {
            const matches = text.match(/(\d+)\s*x\s*￥([\d,]+)\((.*?)\)\s*=\s*￥([\d,]+)/);
            if (matches) {
                return {
                    priceType: matches[3].trim(),
                    quantity: matches[1],
                    unitPrice: matches[2].replace(',', ''),
                    totalPrice: matches[4].replace(',', '')
                };
            }
            return null;
        });
    };

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.BOOKING_ID).then((bookingId) => {
        Cypress.env('BOOKING_ID', bookingId);
    });

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.RESERVATION_DATE_TIME).then((dateTime) => {
        Cypress.env('DATE_TIME', dateTime);
    });

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.PLAN_NAME).then((planName) => {
        Cypress.env('PLAN_NAME', planName);
    });
    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.VENUE_NAME).then((venueName) => {
        Cypress.env('VENUE_NAME', venueName.trim().replace(/\u00A0/g, ' '));
    });

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.SEATING_TYPE).then((seatOption) => {
        Cypress.env('SEAT_OPTION', seatOption);
    })

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.TOTAL_PRICE).then((textTotalPrice) => {
        Cypress.env('TOTAL_PRICE_SUCCESS', textTotalPrice.replace(/[￥,]/g, ''));
    });

    ACTION.getText(CHECKOUT_SUCCESS_ELEMENTS.SPECIAL_REQUEST).then((specialRequest) => {
        Cypress.env('SPECIAL_REQUEST',specialRequest.split(": ")[1])
    })

    const listUnitPrice = [];
    cy.xpath(CHECKOUT_SUCCESS_ELEMENTS.UNIT_PRICE).each((elements) => {
        const text = elements.text();
        listUnitPrice.push(text)
        const unitPrice = extractPrices(listUnitPrice);
        Cypress.env('LIST_UNIT_PRICE', unitPrice)
    });

    const listQuestionAndAnswer = [];
    cy.xpath(CHECKOUT_SUCCESS_ELEMENTS.LIST_QUESTION_ANSWER).each((elements, index) => {
        cy.wrap(elements).xpath(`(//div[text()='店舗からの質問事項ご回答:']/div//strong/parent::p/preceding-sibling::p)[${index +  1}]`).invoke('text').then((question) => {
            
            cy.wrap(elements).xpath(`(//div[text()='店舗からの質問事項ご回答:']/div//strong)[${index + 1}]`).invoke('text').then((answer) => {
                listQuestionAndAnswer.push({
                    question: question.replace(':', ('')).trim(),
                    answer: answer.replace(':', ('')).trim()
                });
                Cypress.env('LIST_QUESTION_ANSWER', listQuestionAndAnswer);
            });
        });
    });
});