import loginPages from '../../support/pages/LoginPages';
import loginFactory from '../../factories/LoginFactory';



When(/^informar usuário e senha válidos$/, () => {
    const usuario = loginFactory.usuario()
    loginPages.fillForm(usuario)
});

Then(/^devo entrar na página principal$/, () => {
    loginPages.loginDone()
});





