const { test, expect } = require('@playwright/test');

test('Q3: Performance user purchase with Z-A sort', async ({ page }) => {
  await page.goto('/');

  // Login
  await page.fill('#user-name', 'performance_glitch_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Reset app state
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');

  // Sort Z to A
  await page.selectOption('.product_sort_container', 'za');

  // Add first product
  const firstProduct = page.locator('.inventory_item').first();
  const productName = await firstProduct.locator('.inventory_item_name').textContent();

  await firstProduct.locator('button').click();

  // Go to cart
  await page.click('.shopping_cart_link');

  // Verify product name
  const cartProduct = page.locator('.inventory_item_name');
  await expect(cartProduct).toHaveText(productName);

  // Checkout
  await page.click('#checkout');

  await page.fill('#first-name', 'Jane');
  await page.fill('#last-name', 'Smith');
  await page.fill('#postal-code', '54321');
  await page.click('#continue');

  // Verify total exists
  await expect(page.locator('.summary_total_label')).toBeVisible();

  // Finish
  await page.click('#finish');

  // Verify success
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  // Reset and logout
  await page.click('#react-burger-menu-btn');
  await page.click('#reset_sidebar_link');
  await page.click('#logout_sidebar_link');
});
