import {test} from '../support/utils/fixtures';
import {credentials, personalData} from "../support/helper/credentials";

test.describe('Successful Checkout process', () => {
    test('TC06: Checkout process - Successful', async ({loginPage, productPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutFinishPage}) => {
        const productName = 'Sauce Labs Backpack';

        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.addProductToCart(productName);
        await productPage.proceedToCartPage();

        await cartPage.waitForPage();
        await cartPage.proceedToCheckoutPage();

        await checkoutStepOnePage.waitForPage();
        await checkoutStepOnePage.fillForm(personalData.firstName, personalData.lastName, personalData.postalCode);
        await checkoutStepOnePage.proceedToCheckoutStepTwoPage();

        await checkoutStepTwoPage.waitForPage();
        await checkoutStepTwoPage.proceedToFinishPage();

        await checkoutFinishPage.waitForPage();
        await checkoutFinishPage.verifyCheckoutSuccessMessage();
    })
})