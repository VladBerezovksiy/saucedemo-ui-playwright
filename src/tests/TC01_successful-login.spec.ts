import {test} from '../support/utils/fixtures';
import {credentials} from "../support/helper/credentials";

test.describe('Successful login', () => {

    test('TC01: Successful login with standard user', async ({loginPage, productPage}) => {
      await loginPage.signIn(credentials.username, credentials.password);
      await productPage.waitForPage();
    })
});