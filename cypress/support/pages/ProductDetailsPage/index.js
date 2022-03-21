const element = require('./elements').ELEMENTS;
const produto = 'Test.allTheThings() T-Shirt (Red)';

class DetailsProduct {   
    
    openProduct() {
        cy.contains(produto).scrollIntoView()
        cy.wait(3000)
        cy.get(element.clickProduct).click()
        cy.wait(3000)
    }
    checkProduct() {
        cy.get(element.id).should('contain', produto)
    }
}

export default new DetailsProduct(); 