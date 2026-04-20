import { test as setup, expect } from '@playwright/test';

setup('login and save session', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // salva sessão
  await page.context().storageState({ path: 'storageState.json' });
});