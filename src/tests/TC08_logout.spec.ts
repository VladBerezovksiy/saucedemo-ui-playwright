import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";
import {MenuOptions} from "../support/constants/product.enum";

test.describe('Logout', () => {

    test('TC08: Logout from application', async ({loginPage, productPage}) => {
        await loginPage.signIn(credentials.username, credentials.password);
        await productPage.waitForPage();

        await productPage.selectOptionFromMenu(MenuOptions.LOGOUT);
        await loginPage.waitForPage();
    })
});