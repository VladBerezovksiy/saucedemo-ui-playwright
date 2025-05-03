import {AbstractPage} from "./AbstractPage";
import {expect, Page} from "@playwright/test";

export class ProductPage extends AbstractPage {
    protected readonly menuButton = this.page.locator('.bm-burger-button');
    protected readonly products = this.page.locator('.inventory_item');
    protected readonly cartIcon = this.page.locator('#shopping_cart_container');
    protected readonly addToCartButton = this.page.getByText('Add to cart');
    protected readonly removeButton = this.page.getByText('Remove');
    protected readonly counterOfCart = this.page.locator('.shopping_cart_badge');
    protected readonly filterButton = this.page.locator('.product_sort_container');

    constructor(page: Page) {
        super(page);
    }

    async countOfProduct() {
        return this.products.count();
    }

    async waitForPage() {
        await this.page.waitForLoadState("networkidle");
        await expect(this.page).toHaveURL(/.*inventory/);
    }

    async getProductsPrices() {
        const productPrices = await this.products.locator('.inventory_item_price').allTextContents();
        return productPrices.map(price => parseFloat(price.replace('$', '')));
    }

    async outputProductsPrices() {
        const productPrices = await this.getProductsPrices();
        console.log('Actual Product Prices:', productPrices);
        return productPrices;
    }

    async getSortingPriceLowToHigh() {
        const productPrices = await this.getProductsPrices();
        const sortedPrices = productPrices.sort((a, b) => a - b);
        console.log('Expected Sorted Prices:', sortedPrices);
        return sortedPrices;
    }

    async selectFilterOption(option: string) {
        await this.filterButton.click();
        await this.filterButton.selectOption(option);
    }

    async selectOptionFromMenu(option: string) {
        await this.menuButton.click();
        const menuOption = this.page.getByText(option);
        await expect(menuOption).toBeVisible();
        await menuOption.click();
    }

    async getProductsByName(productName: string) {
        const product = this.products.filter({ hasText: productName });
        await expect(product).toBeVisible();
        return product;
    }

    async clickOnProduct(productName: string) {
        const product = await this.getProductsByName(productName);
        const productLink = product.locator('.inventory_item_name');
        await productLink.click();
    }

    async addProductToCart(productName: string) {
        const product = await this.getProductsByName(productName);
        await product.locator(this.addToCartButton).click();
    }

    async removeProductFromCart(productName: string) {
        const product = await this.getProductsByName(productName);
        await product.locator(this.removeButton).click();
    }

    async getCountOfProductsInCart() {
        const cartIcon = this.cartIcon.locator(this.counterOfCart);
        await expect(cartIcon).toBeVisible();
        return cartIcon.innerText();
    }

    async proceedToCartPage() {
        await this.cartIcon.click();
    }
}