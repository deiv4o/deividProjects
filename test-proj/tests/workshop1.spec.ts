import { test, expect } from '@playwright/test';

// test ('Navigate to gitlab page',async ({page}) => {
//     await page.goto('https://gitlab.com');
//     await page.waitForTimeout(3000);
//     await page.reload;
// })    

// test ('Iteract with some web element', async ({page}) => {
//     await page.goto('https://gitlab.com');
//     await page.click('#onetrust-accept-btn-handler');
//     await page.locator('#be-navigation-mobile').getByRole('link', {name: 'Get free trial'}).click();
//     await page.locator('[data-testid]=new_user_first_name').fill('Deyvid');
//     await page.locator('[data-testid]=new_user_last_name').fill('Stoykov');
//     await page.locator('[data-testid]=new_user_username').fill('deivtta');
//     await page.locator('[data-testid]=new-user-email-field').fill('deivid.stoikov@gmail.com');
//     await page.getByTestId('new_user_password').fill('password');

// })

test ('Iteract with some web element', async ({page}) => {
    await page.goto('https://about.gitlab.com/');
    // await page.click('#onetrust-accept-btn-handler'); //cookie button click
    // await page.getByRole('link', {name: 'Sign in'}).click();
    await page.click(':has-text("Sign in")');
    await page.waitForTimeout(3000);


})