import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";

export class ProductDetailPage extends AbstractPage {
    protected readonly productName = this.page.locator('.inventory_details_name');
    protected readonly productDescription = this.page.locator('.inventory_details_desc');
    protected readonly productPrice = this.page.locator('.inventory_details_price');
    protected readonly addToCartButton = this.page.getByText('Add to cart');
    protected readonly removeButton = this.page.getByText('Remove');
    protected readonly backToProductsButton = this.page.getByText('Back to products');

    constructor(page: Page) {
        super(page);
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*inventory-item/);
    }

    async getProductName() {
        return await this.productName.innerText();
    }

    async getProductDescription() {
        return await this.productDescription.innerText();
    }

    async getProductPrice() {
        return await this.productPrice.innerText();
    }

    async clickAddToCart() {
        await this.addToCartButton.click();
    }
}