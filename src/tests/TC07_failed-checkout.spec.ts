import {test} from '../support/utils/fixtures';
import {credentials, personalData} from "../support/helper/credentials";
import {CheckoutStepOneErrorMessages} from "../support/constants/checkout.enum";

test.describe('Failed Checkout process', () => {

    test('TC07: Checkout process - Missing information', async ({loginPage, productPage, cartPage, checkoutStepOnePage}) => {
        const productName = 'Sauce Labs Backpack';

        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.addProductToCart(productName);
        await productPage.proceedToCartPage();

        await cartPage.waitForPage();
        await cartPage.proceedToCheckoutPage();

        await checkoutStepOnePage.waitForPage();
        await checkoutStepOnePage.fillForm('', personalData.lastName, personalData.postalCode);
        await checkoutStepOnePage.proceedToCheckoutStepTwoPage();
        await checkoutStepOnePage.getMessageErrorForm(CheckoutStepOneErrorMessages.FIRST_NAME_REQUIRED);
    })
})