import loginPages from '../../support/pages/LoginPages';
import loginFactory from '../../factories/LoginFactory';
import cartPages from '../../support/pages/CartPages';


When(/^escolho um produto$/, () => {
    const usuario = loginFactory.usuario()
    loginPages.fillForm(usuario)
    loginPages.loginDone()

    cartPages.addCart()
});

Then(/^adiciono o produto ao carrinho$/, () => {
    cartPages.ValidAddCart()
});
