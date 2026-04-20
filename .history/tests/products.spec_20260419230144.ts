import { expect, test } from "@playwright/test";

test('all product names begin with "Sauce Labs"', async ({ page }) => {
  await test.step('login', async () => {
    await page.goto('https://www.saucedemo.com/');
  });


});