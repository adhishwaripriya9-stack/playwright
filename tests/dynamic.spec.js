import { test, expect } from '@playwright/test';

const baseUrl = 'https://the-internet.herokuapp.com';

test.describe('dynamic content - all cases', () => {

    test('1. verify page loads successfully', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);
        await expect(page.getByRole('heading', { name: 'Dynamic Content' })).toBeVisible();
    });

    test('2. verify content changes after refresh', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const before = await page.locator('#content .row').nth(0).innerText();
        await page.reload();
        const after = await page.locator('#content .row').nth(0).innerText();

        expect(before).not.toBe(after);
    });
});
    test('verify total number of content rows', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);
        await expect(page.locator('#content .row')).toHaveCount(4);
    });
    test('verify each row has image', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const rows = page.locator('#content .row');
        const images = page.locator('#content .row img');

        await expect(page.locator('#content .row img')).toHaveCount(3);
    });
    test('verify each row has text', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const rows = page.locator('#content .row');
        const texts = page.locator('#content .row .large-10');

        await expect(texts).toHaveCount(await rows.count());
    });
    test('verify image may change after refresh', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const before = await page.locator('#content img')
    .evaluateAll(elements => elements.map(el => el.getAttribute('src')));
        await page.reload();
        const after = await page.locator('#content img')
    .evaluateAll(elements => elements.map(el => el.getAttribute('src')));

        expect(before).not.toEqual(after);
    });
    test('verify at least one row changes after refresh', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const before = await page.locator('#content .row .large-10').allTextContents();
        await page.reload();
        const after = await page.locator('#content .row .large-10').allTextContents();

        expect(before).not.toEqual(after);
    });
    test('verify static mode opens successfully', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content?with_content=static`);

        await expect(page).toHaveURL(/static/);
        await expect(page.locator('#content .row')).toHaveCount(4);
    });
    test('verify no text block is empty', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content?with_content=static`);

        const texts = await page.locator('#content .row .large-10').allTextContents();

        expect(texts.every(text => text.trim().length > 0)).toBeTruthy();
    });
    test('verify images are visible', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content`);

        const images = page.locator('#content .row img');

        await expect(images).toHaveCount(3);
        await expect(images.first()).toBeVisible();
    });
    test('verify direct static url access works', async ({ page }) => {
        await page.goto(`${baseUrl}/dynamic_content?with_content=static`);

        await expect(page).toHaveURL(/with_content=static/);
        await expect(page.locator('#content .row')).toHaveCount(4);
    });










