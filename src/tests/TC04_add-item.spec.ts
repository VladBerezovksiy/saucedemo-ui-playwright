import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {expect} from "@playwright/test";

test.describe('Add Items', () => {
    test('TC04: Add item to cart', async ({loginPage, productPage}) => {
        const productName1 = 'Sauce Labs Onesie';
        const productName2 = 'Sauce Labs Bolt T-Shirt';

        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.addProductToCart(productName1);
        await productPage.addProductToCart(productName2);
        for (const button of await productPage.removeButton.all()) {
            await expect(button).toBeVisible();
        }

        expect(Number(await productPage.getCountOfProductsInCart())).toBe(2);
    })
})