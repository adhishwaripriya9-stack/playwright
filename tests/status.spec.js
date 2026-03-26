import {test,expect} from '@playwright/test';

test('verify status codes', async ({page, request})=>{
    await page.goto('https://the-internet.herokuapp.com/status_codes');

    const codes = ['200','301','404','500']

    for(const code of codes){
        //api validation
        const response = await request.get('https://the-internet.herokuapp.com/status_codes/${code}');
        expect(response.status()).toBe(Number(code));

        //ui validation
        await page.click(a[href="status_codes/${code}"]);

        await expect(page.locator('p')).toContainText(code);

        await page.goBack();
    }
});