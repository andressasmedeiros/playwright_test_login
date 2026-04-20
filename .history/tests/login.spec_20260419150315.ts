import { expect, test } from "@playwright/test";

test('the user login with success', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe()
})