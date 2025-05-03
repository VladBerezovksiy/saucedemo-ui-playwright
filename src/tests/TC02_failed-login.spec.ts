import {expect} from '@playwright/test';
import {test} from '../support/utils/fixtures';
import {faker} from "@faker-js/faker";
import {credentials} from "../support/helper/credentials";
import {LoginErrorMessages} from "../support/constants/loginErrorMessages.enum";

test.describe('Failed Login', () => {

    test('TC02: Login failure with incorrect password', async ({loginPage}) => {
        const invalidPassword = faker.internet.password();

        await loginPage.navigateTo();
        await loginPage.fillEmail(credentials.username);
        await loginPage.fillPassword(invalidPassword);
        await loginPage.submitForm();
        await expect(loginPage.getErrorMessage()).toContainText(LoginErrorMessages.INVALID_PASSWORD);
    })
});