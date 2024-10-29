import 'cypress-xpath';

export const visit = (url) => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
  cy.visit(url, { failOnStatusCode: false });
  cy.wait(3000);
}

export const getElementByXpath = (xpath) => {
    return cy.window().then((win) => {
      const elements = win.document.evaluate(
        xpath,
        win.document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );
      const result = [];
      for (let i = 0; i < elements.snapshotLength; i++) {
        result.push(elements.snapshotItem(i));
      }
      return result;
    });
  };
  
export const clickElement = (xpath) => {
    cy.xpath(xpath).then((element) => {
      if (element.is(':visible') && element.length > 0) {
        cy.wrap(element).click();
      };
    });
  };

export const typeText = (xpath, value) => {
    cy.xpath(xpath)
        .clear().wait(500).type(value, {delay: 50});
};

export const clickElementByJS = (xpath) => {
    cy.window().then((win) => {
      const document = win.document;
  
      const element = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (element) {
        element.click();
      };
    });
  };

  export const scrollToElement = (xpath) => {
    cy.xpath(xpath)
      .scrollIntoView({duration: 1000});
  };

  export const clickElementOpenNewTab = (xpath) => {
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
          cy.visit(url, { failOnStatusCode: false });
      });
    });
    cy.xpath(xpath).click();
    cy.wait(5000);
  };

  export const getAttribute = (xpath, attributeName) => {
    return (cy.xpath(xpath).invoke("attr", attributeName));
  };
  
  export const getText = (xpath) => {
    return (cy.xpath(xpath).invoke("text"));
  };

  export const uploadFile = (xpath, fileName) => {
    cy.xpath(xpath).attachFile(fileName);
  };

  export const hoverElement = (xpath) => {
    cy.xpath(xpath).realHover();
  };
  
  export const rightClickElement = (xpath) => {
    cy.xpath(xpath).rightclick();
  };
  
  export const getValueOfPropertyCss = (xpath, property) => {
    return cy.xpath(xpath).invoke('css', property);
  };

  export const selectDropdownByText = (xpath, value) => {
    cy.xpath(xpath).select(value)
  };

  export const selectDropdownByIndex = (xpath, index) => {
    cy.xpath(xpath).find('option').eq(index - 1).then((option) => {
      const value = option.val();  
      cy.xpath(xpath).select(value);  
    });
  };

  export const selectOptionByValue = (xpath, value) => {
    cy.xpath(xpath)  
      .should('be.visible')  
      .select(value)  
};
