import { Then, When } from "cypress-cucumber-preprocessor/steps";
const ACTION = require('../../util/action_common')
const RESERVATION_ELEMENTS = require('../../elements/Guest/ReservationStage')

When('Enter reservation information', () => {
    const guestPeopleNumber = 2;
    const otherPeopleNumber = 1;
    let totalPrice = 0;
    let planPrice = 0;

    ACTION.clickElement(RESERVATION_ELEMENTS.DATE_SELECT);
    cy.wait(1000);

    ACTION.clickElement(RESERVATION_ELEMENTS.DATE);
    cy.wait(1000);

    ACTION.selectDropdownByIndex(RESERVATION_ELEMENTS.TIME_SELECT, 2);
    cy.wait(1000);

    ACTION.getElementByXpath("//span[contains(text(), 'ご来店人数 ')]/parent::h2/parent::div//div[contains(@class, 'Input_input__')]").then((countElements) => {
        for (let index = 1; index <= countElements.length; index++) {
            //get price type
            ACTION.getText(`(//span[contains(text(), 'ご来店人数 ')]/parent::h2/parent::div//div[contains(@class, 'Input_input__')]//div[contains(@class, 'styles_checkout-order_price-money__')])[${index}]`).then((price) => {
                if (price === '無料') {
                    planPrice = parseFloat(price.replace(price, "0")).toFixed(3);
                } else {
                    planPrice = parseFloat(price.replace("￥", "").replace(",", ".")).toFixed(3);
                }
                // select count

                if (index === 1) {
                    cy.wait(3000)
                    ACTION.selectOptionByValue(`(//span[contains(text(), 'ご来店人数 ')]/parent::h2/parent::div//div[contains(@class, 'Input_input__')]//select)[${index}]`, guestPeopleNumber.toString());
                    totalPrice += guestPeopleNumber * planPrice;
                } else {
                    ACTION.selectOptionByValue(`(//span[contains(text(), 'ご来店人数 ')]/parent::h2/parent::div//div[contains(@class, 'Input_input__')]//select)[${index}]`, otherPeopleNumber.toString());
                    totalPrice += otherPeopleNumber * planPrice
                };
            })
        }
    }).then(() => {
        Cypress.env('TOTAL_PRICE', totalPrice.toFixed(3))
    });

    // get total price
    ACTION.getText(RESERVATION_ELEMENTS.TOTAL_PRICE).then((totalPrice) => {
        Cypress.env('TOTAL_PRICE_INSERVATION',
            parseFloat(totalPrice.replace("￥", "").replace(",", ".")));
    });
});

When('Go to customer infomation stage', () => {
    ACTION.clickElement(RESERVATION_ELEMENTS.NEXT_BUTTON);
    cy.wait(10000);
})

Then('Check price in reservation infomation', () => {
    const totalPriceInsevation = Cypress.env('TOTAL_PRICE_INSERVATION');
    const totalPrice = Cypress.env('TOTAL_PRICE')
    expect(parseFloat(totalPriceInsevation).toFixed(3)).to.equals(totalPrice);
});
