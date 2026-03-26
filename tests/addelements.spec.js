import {test,expect} from '@playwright/test'

test('add and remove elements', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.click('button[onClick="addElement()"]');
    await page.click('button[onClick="addElement()"]');
    await page.click('button[onClick="addElement()"]');

    const deleteButtons = page.locator('.added-manually');
    await expect(deleteButtons).toHaveCount(3);

    await deleteButtons.nth(0).click();
    await expect(deleteButtons).toHaveCount(2);
});