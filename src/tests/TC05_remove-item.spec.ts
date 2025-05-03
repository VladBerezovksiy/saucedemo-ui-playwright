import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {expect} from "@playwright/test";

test.describe('Remove Items', () => {
    test('TC05: Remove item from cart', async ({loginPage, productPage}) => {
        const productName1 = 'Sauce Labs Backpack';
        const productName2 = 'Sauce Labs Fleece Jacket';

        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.addProductToCart(productName1);
        await productPage.addProductToCart(productName2);
        for (const button of await productPage.removeButton.all()) {
            await expect(button).toBeVisible();
        }

        await productPage.removeProductFromCart(productName1);
        expect(Number(await productPage.getCountOfProductsInCart())).toBe(1);

        await productPage.removeProductFromCart(productName2);
        await expect(productPage.counterOfCart).toBeHidden();
    })
})