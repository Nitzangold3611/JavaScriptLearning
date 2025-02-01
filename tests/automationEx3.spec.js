import {expect, test} from "@playwright/test";

test.describe('selecting JavaScript option from the list test', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://devexpress.github.io/testcafe/example');
    });
    test('validate the correction of the URL', async ({page}) => {
        await expect(page).toHaveURL('https://devexpress.github.io/testcafe/example/');
    })
test('Select JavaScript option+validation', async ({page}) => {
    const dropdown = page.locator('[id="preferred-interface"]');
    await dropdown.click();

    // Select the "JavaScript API" option
    await dropdown.selectOption({ label: 'JavaScript API' });
    await expect(dropdown).toHaveValue('JavaScript API'); // validation

    })


})
