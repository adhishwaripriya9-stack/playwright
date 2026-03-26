import { test, expect } from '@playwright/test';


test('open google',async ({page}) =>{
await page.goto('https://www.google.com');
await expect(page).toHaveTitle(/Google/);
await expect(page).toHaveURL('https://www.google.com');
});
