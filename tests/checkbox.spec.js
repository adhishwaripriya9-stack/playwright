import { test, expect } from '@playwright/test';

const url = 'https://the-internet.herokuapp.com/checkboxes';

test.describe('Checkbox Tests', () => {

    // 1. Verify total checkboxes
    test('verify total checkboxes', async ({ page }) => {
        await page.goto(url);

        const checkboxes = page.locator('#checkboxes input[type="checkbox"]');
        await expect(checkboxes).toHaveCount(2);
    });

    // 2. Verify default state
    test('verify default checkbox state', async ({ page }) => {
        await page.goto(url);
 const checkbox1 = page.locator('#checkboxes input').nth(0);
        const checkbox2 = page.locator('#checkboxes input').nth(1);

        await expect(checkbox1).toBeChecked();     // ✔ checked
        await expect(checkbox2).not.toBeChecked(); // ❌ unchecked
    });

    // 3. Select checkbox
    test('select checkbox 2', async ({ page }) => {
        await page.goto(url);

        const checkbox2 = page.locator('#checkboxes input').nth(1);

        await checkbox2.check();
        await expect(checkbox2).toBeChecked();
    });
     // 4. Unselect checkbox
    test('unselect checkbox 1', async ({ page }) => {
        await page.goto(url);

        test('verify default checkbox state', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('#checkboxes input').nth(0);
    const checkbox2 = page.locator('#checkboxes input').nth(1);

    await expect(checkbox1).not.toBeChecked(); 
    await expect(checkbox2).not.toBeChecked(); 
    });

    // 5. Toggle checkbox
    test('toggle checkbox', async ({ page }) => {
        await page.goto(url);

        const checkbox1 = page.locator('#checkboxes input').nth(0);
          await checkbox1.uncheck();
        await expect(checkbox1).not.toBeChecked();

        await checkbox1.check();
        await expect(checkbox1).toBeChecked();
    });

});