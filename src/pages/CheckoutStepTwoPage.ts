import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";

export class CheckoutStepTwoPage extends AbstractPage{
    protected readonly cancelButton = this.page.getByText('Cancel');
    protected readonly finishButton = this.page.getByText('Finish');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*checkout-step-two/);
    }

    async proceedToFinishPage() {
        await this.finishButton.click();
    }
}