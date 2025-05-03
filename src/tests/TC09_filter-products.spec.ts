import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {FilterOptions} from "../support/constants/product.enum";
import {expect} from "@playwright/test";

test.describe('Filter products', () => {

    test('TC09: Filter products by "Price (low to high)"', async ({loginPage, productPage}) => {
        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.selectFilterOption(FilterOptions.PRICE_LOW_TO_HIGH);
        const actualSortedPrices = await productPage.getProductsPrices();
        await productPage.outputProductsPrices();

        const expectedSortedPrices = await productPage.getSortingPriceLowToHigh();
        expect(actualSortedPrices).toEqual(expectedSortedPrices);
    });
});