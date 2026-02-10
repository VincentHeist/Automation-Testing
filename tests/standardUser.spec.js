const { test, expect } = require('@playwright/test');

test('Q2: Standard user full purchase flow', async ({ page }) => {
  await page.goto('/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Open menu and reset app state
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');

  // Add three items
  const addButtons = page.locator('.inventory_item button');
  await addButtons.nth(0).click();
  await addButtons.nth(1).click();
  await addButtons.nth(2).click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Checkout
  await page.click('#checkout');

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // Verify products exist
  const products = page.locator('.cart_item');
  await expect(products).toHaveCount(3);

  // Verify total price exists
  const total = page.locator('.summary_total_label');
  await expect(total).toBeVisible();

  // Finish purchase
  await page.click('#finish');

  // Verify success message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  // Open menu again
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});