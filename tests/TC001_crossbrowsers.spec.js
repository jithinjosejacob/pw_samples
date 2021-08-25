// Test Cases for Cross Browser Testing
const { test, expect } = require('@playwright/test');

// This will run tests across Chromium, Firefox and Webkit.
test('Cross browser test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
  // Wait for 5 seconds for demo
  await page.waitForTimeout(5000);
});