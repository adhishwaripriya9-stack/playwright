import { test, expect } from '@playwright/test';
//negative
test('negative login test - invalid credentials', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username','wronguser');
    await page.fill('#password','wrongpassword');

    await page.click('button[type="submit"]');

    await expect(page.locator('.flash'))
        .toContainText('Your username is invalid!');
});
// logout
test('logout test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username','tomsmith');
    await page.fill('#password','SuperSecretPassword!');

    await page.click('button[type="submit"]');

    //await expect(page.locator('.flash'))
        //.toContainText('You logged into a secure area!');

    await page.click('.button.secondary.radius');

    await expect(page.locator('#flash'))
        .toContainText('You logged out of the secure area!');
});
// end to end 
test('end to end login flow', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    //login
    await page.fill('#username','tomsmith');
    await page.fill('#password','SuperSecretPassword!');
    await page.click('button[type="submit"]');

    //validate login
    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('h2')).toContainText('Secure Area');

    //logout
    await page.click('text=Logout');

    //validate logout
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
});
// JS Alert
test('handle JS Alert', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();   // Click OK
  });

  await page.click('text=Click for JS Alert');
});
//js confirm click ok
test('handle JS Confirm OK', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
      await dialog.accept();
  });

  await page.click('text=Click for JS Confirm');
});
// click cancel
test('handle JS Confirm Cancel', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
      await dialog.dismiss();   // Click Cancel
  });

  await page.click('text=Click for JS Confirm');
});

// js prompt
test('handle JS Prompt', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog', async dialog => {
      await dialog.accept('Hello QA');   // Enter text
  });

  await page.click('text=Click for JS Prompt');
});
test('Handle dynamic element')

