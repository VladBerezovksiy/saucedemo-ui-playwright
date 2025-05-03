import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";

export class CheckoutStepOnePage extends AbstractPage{
    protected readonly cancelButton = this.page.getByText('Cancel');
    protected readonly continueButton = this.page.getByText('Continue');
    protected readonly firstNameInput = this.page.getByPlaceholder('First Name');
    protected readonly lastNameInput = this.page.getByPlaceholder('Last Name');
    protected readonly postalCodeInput = this.page.getByPlaceholder('Zip/Postal Code');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*checkout-step-one/);
    }

    async fillForm(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async getMessageErrorForm(errorMessageText: string) {
        const errorMessage = this.page.getByText(errorMessageText);
        await expect(errorMessage).toBeVisible();
    }

    async proceedToCheckoutStepTwoPage() {
        await this.continueButton.click();
    }
}