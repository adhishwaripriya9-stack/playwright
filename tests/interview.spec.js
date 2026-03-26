// //let str1 = "listen";
// let str2 = "silent";
// let s1 = str1.split("").sort().join("");
// let s2 = str2.split("").sort().join("");
// if(s1===s2){
//     console.log("anagram");
// }
// else{
//     console.log(" not anagram");
// }//
import{test,except} from '@playwright/test';
test('handle JS Alert',async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    })
await page.click('text=Click for JS alert');

})
test('Handle JS Confirm ok',async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async dialog =>{
        await dialog.accept();
     })
     await page.click('text=click on JS Confirm')
})
await(page.locator('#result'))
toHaveText('You Clicked:ok');
//
test('Handle JS Confirm Cancel', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async dialog =>{
        await dialog.dismiss();
})
    await page.click('text=Click on JS Confirm');
})
await(page.locator('#result'))
.toHaveText('You Clicked:Cancel');

