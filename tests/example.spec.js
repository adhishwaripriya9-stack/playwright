// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// const user = {
//   username: "testuser",
//   password: "12345"
// };

// await page.fill("#username", user.username);
// await page.fill("#password", user.password);

test("Login test", async ({ page }) => {

  await page.goto("https://www.saucedemo.com");

  await page.fill("#user-name", "standard_user");

  await page.fill("#password", "secret_sauce");

  await page.click("#login-button");

  await expect(page).toHaveURL(/inventory/);

});