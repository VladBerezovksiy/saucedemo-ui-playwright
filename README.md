# SauceDemo test framework

## Stack

* Playwright
* Node.js
* TypeScript

## Working with repo

Please ensure you have all permissions.

1. Install GIT
2. Install Node.js
3. Clone repo `git clone https://github.com/VladBerezovksiy/saucedemo-ui-playwright.git`
4. Run 'npm install --force'
5. Add the [.env](#env-file) files to the root of the project `.\saucedemo-ui-playwright`. The .env files should be at the same level as the configuration files.

## ENV file

Here is example of .env file

```env
URLS_BASE="${urls_base}"
USERNAME="${username}"
PASSWORD="${password}"
FIRST_NAME="${first_name}"
LAST_NAME="${last_name}"
POSTAL_CODE="${postal_code}"
```

## Test-cases
| ID   | Priority | Test Case Title                              | Steps                                                                                                                                              | Expected Result                                                                                   |
|------|----------|----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| TC01 | High     | Successful login with standard user          | 1. Open site<br>2. Enter username <br>3. Enter password <br>4. Click Login                                                                         | User is redirected to the Products page                                                          |
| TC02 | High     | Login failure with incorrect password        | 1. Open site<br>2. Enter username <br>3. Enter wrong password<br>4. Click Login                                                                    | Error message appears: "Epic sadface: Username and password do not match any user in this service" |
| TC03 | Medium   | Verify product list after login              | 1. Login with <br>2. Observe the product list                                                                                                      | Products are displayed on the Products page                                                      |
| TC04 | High     | Add item to cart                             | 1. Login<br>2. Click "Add to cart" on any product<br>3. Click "Add to cart" on other product<br>4. Check cart badge                                | Button changes to "Remove" and cart badge increments                                             |
| TC05 | High     | Remove item from cart                        | 1. Add two items to cart<br>2. Check cart badge<br>3. Click "Remove"<br>4. Check cart badge                                                        | Item is removed and cart badge decrements                                                        |
| TC06 | High     | Checkout process - Successful                | 1. Add product to cart<br>2. Go to Cart<br>3. Click Checkout<br>4. Fill First Name, Last Name, Postal Code<br>5. Click Continue<br>6. Click Finish | Order confirmation page shown: "THANK YOU FOR YOUR ORDER"                                        |
| TC07 | High     | Checkout process - Missing information       | 1. Add product to cart<br>2. Proceed to Checkout<br>3. Leave First Name empty<br>4. Click Continue                                                 | Error message: "Error: First Name is required"                                                   |
| TC08 | Low      | Logout from application                      | 1. Login<br>2. Open menu<br>3. Click Logout                                                                                                        | User is redirected to login page                                                                 |
| TC09 | Medium   | Filter products by "Price (low to high)"     | 1. Login<br>2. Open sorting dropdown<br>3. Select "Price (low to high)"                                                                            | Products sorted from cheapest to most expensive                                                  |
| TC10 | Medium   | Navigate to product details page             | 1. Login<br>2. Click on any product title or image                                                                                                 | User sees detailed information for the selected product                                          |

## Running tests

There are 2 playwright options:

### First Option: Running from **`package.json`**

You can run tests using the commands defined in the `package.json` file.

### Second Option: Running from Terminal

* Launches Playwright Test in UI mode, allowing you to visually manage tests.
```bash
playwright test --ui
```

* Runs tests only in the Chromium browser.
```bash
playwright test --project=chromium
```

* Runs tests only in the Firefox browser. 
```bash
playwright test --project=firefox
```

* Runs tests in debug mode for the Chromium browser. 
```bash
playwright test --debug --project=chromium
```

* Runs tests in debug mode for the Firefox browser.
```bash
playwright test --debug --project=firefox
```

* Opens the test execution report. 
```bash
playwright show-report
```

* Deletes the folders containing reports and test results.
```bash
rm -rf playwright-report && rm -rf test-results
```
