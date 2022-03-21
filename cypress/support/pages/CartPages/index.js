
const element = require('./elements').ELEMENTS;
const produto = 'Test.allTheThings() T-Shirt (Red)';
const addCart = 'Add to cart';


class CartPage {   
    
    addCart() {
        cy.contains(produto).scrollIntoView()
        cy.wait(3000)
        cy.get(element.id).contains(produto).click()
        cy.get(element.addCart).contains(addCart).click()
    }
    ValidAddCart() {
        cy.get(element.scrollPage).scrollIntoView()
        cy.get(element.cartButton).click()
        cy.get(element.validProduct).contains(produto)  
    }
}

export default new CartPage(); 