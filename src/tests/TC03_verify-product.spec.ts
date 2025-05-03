import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {expect} from "@playwright/test";

test.describe('Verify Product', () => {

    test('TC03: Verify product list after login', async ({loginPage, productPage}) => {
        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        expect(await productPage.countOfProduct()).toBeGreaterThan(3);
    });
})