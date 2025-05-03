import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {expect} from "@playwright/test";

test.describe('Product Details', () => {

    test('TC10: Navigate to product details page', async ({loginPage, productPage, productDetailPage}) => {
        const productName = 'Sauce Labs Onesie';
        const productDescription = 'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.';
        const productPrice = '$7.99';

        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.clickOnProduct(productName);
        await productDetailPage.waitForPage();

        const productNameOnPage = await productDetailPage.getProductName();
        const productDescriptionOnPage = await productDetailPage.getProductDescription();
        const productPriceOnPage = await productDetailPage.getProductPrice();

        expect(productNameOnPage).toBe(productName);
        expect(productDescriptionOnPage).toBe(productDescription);
        expect(productPriceOnPage).toBe(productPrice);
    });
});