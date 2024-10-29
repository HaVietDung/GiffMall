export const assertion = (xpath, condition, value = 'value') => {
    try {
        switch (condition) {
            case 'be.visible':
                cy.xpath(xpath).should('be.visible');
                break;
            case 'not.be.visible':
                cy.xpath(xpath).should('not.be.visible');
                break;
            case 'exist':
                cy.xpath(xpath).should('exist');
                break;
            case 'be.enabled':
                cy.xpath(xpath).should('be.enabled');
                break;
            case 'be.disabled':
                cy.xpath(xpath).should('be.disabled');
                break;
            case 'have.text':
                cy.xpath(xpath).should('have.text', value);
                break;
            case 'not.exist':
                cy.xpath(xpath).should('not.exist');
                break;
            case 'be.checked':
                cy.xpath(xpath).should('be.checked');
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error)
    }
};

export const assertionUrl = (path) => {
    cy.url().then(url => {
      expect(url).to.contains(path)
    });
  };
  