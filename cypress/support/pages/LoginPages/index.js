
const element = require('./elements').ELEMENTS;
const text = 'Products'

class LoginPage {
    go() {
        cy.visit('/') // visit acessa a página principal alvo do teste | Url está em cypress.json
    }
    fillForm(usuarios) {
        cy.get(element.username).type(usuarios.username)
        cy.get(element.password).type(usuarios.password)
        cy.get(element.loginButton).click()

    }
    loginDone() {
        cy.get(element.validPage).should('contain', text)
    }
}

export default new LoginPage(); 