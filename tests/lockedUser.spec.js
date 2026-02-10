const { test, expect } = require('@playwright/test');

test('Q1: Login with locked_out_user and verify error', async ({ page }) => {
  await page.goto('/');

  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toContainText('Sorry, this user has been locked out.');
});
