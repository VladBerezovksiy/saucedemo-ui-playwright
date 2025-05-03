import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";

export class CartPage extends AbstractPage{
    protected readonly removeButton = this.page.getByText('Remove');
    protected readonly continueShoppingButton = this.page.getByText('Continue Shopping');
    protected readonly checkoutButton = this.page.getByText('Checkout');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*cart/);
    }

    async proceedToCheckoutPage() {
        await this.checkoutButton.click();
    }
}