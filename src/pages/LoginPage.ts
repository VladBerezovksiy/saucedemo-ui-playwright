import {expect, Page} from "@playwright/test";
import {AbstractPage} from "./AbstractPage";

export class LoginPage extends AbstractPage {
    protected readonly usernameInput = this.page.getByPlaceholder('Username');
    protected readonly passwordInput = this.page.getByPlaceholder('Password');
    protected readonly loginButton = this.page.locator('#login-button');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.loginButton).toBeVisible();
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async fillEmail(email: string) {
        await this.usernameInput.fill(email);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async submitForm() {
        await this.loginButton.click();
    }

    async signIn(email: string, password: string) {
        await this.navigateTo();
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.submitForm();
    }

    getErrorMessage() {
        return this.page.locator('[data-test="error"]');
    }
}