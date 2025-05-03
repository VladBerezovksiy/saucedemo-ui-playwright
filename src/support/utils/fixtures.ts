import { test as base } from '@playwright/test';
import {LoginPage} from "../../pages/LoginPage";
import {ProductPage} from "../../pages/ProductPage";
import {CartPage} from "../../pages/CartPage";
import {CheckoutStepOnePage} from "../../pages/CheckoutStepOnePage";
import {CheckoutStepTwoPage} from "../../pages/CheckoutStepTwoPage";
import {CheckoutFinishPage} from "../../pages/CheckoutFinishPage";
import {ProductDetailPage} from "../../pages/ProductDetailPage";

type MyFixtures = {
    loginPage: LoginPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutStepOnePage: CheckoutStepOnePage;
    checkoutStepTwoPage: CheckoutStepTwoPage;
    checkoutFinishPage: CheckoutFinishPage;
    productDetailPage: ProductDetailPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutStepOnePage: async ({ page }, use) => {
        await use(new CheckoutStepOnePage(page));
    },
    checkoutStepTwoPage: async ({ page }, use) => {
        await use(new CheckoutStepTwoPage(page));
    },
    checkoutFinishPage: async ({ page }, use) => {
        await use(new CheckoutFinishPage(page));
    },
    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },
});
