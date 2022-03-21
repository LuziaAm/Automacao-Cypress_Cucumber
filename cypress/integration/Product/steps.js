import {When, Then } from 'cypress-cucumber-preprocessor/steps';

import loginPages from '../../support/pages/LoginPages';
import loginFactory from '../../factories/LoginFactory';
import detailsPages from '../../support/pages/ProductDetailsPage';


When(/^clicar no produto desejado$/, () => {
    const usuario = loginFactory.usuario()
    loginPages.fillForm(usuario)

    detailsPages.openProduct();
});

Then(/^devo entrar na página de detalhes do produto$/, () => {
    detailsPages.checkProduct()
});




