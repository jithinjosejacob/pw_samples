// Test Cases for Playwright Inspector.
const { test, expect } = require('@playwright/test');

// Test Case to view Playwright Inspector.
test('Playwright Inspector test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const name = await page.innerText('.navbar__title');
    // Added page.pause to show the Playwright Debugger
    await page.pause();
    await page.click(`//a[contains(text(),'Get started')]`, { force: true });
});