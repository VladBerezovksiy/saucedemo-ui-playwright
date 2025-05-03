import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";
import {CheckoutMessageText} from "../support/constants/checkout.enum";

export class CheckoutFinishPage extends AbstractPage{
    protected readonly successfulOrderTitle = this.page.getByText(CheckoutMessageText.THANK_YOU_FOR_YOUR_ORDER);
    protected readonly backHomeButton = this.page.getByText('Back Home');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*checkout-complete/);
    }

    async verifyCheckoutSuccessMessage() {
        await expect(this.successfulOrderTitle).toBeVisible();
    }

    async proceedToHomePage() {
        await this.backHomeButton.click();
    }
}