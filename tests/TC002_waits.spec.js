// Test Cases for Waits.
const { test, expect } = require('@playwright/test');

// Custom Waits -Page, Element Waits. And Sleep in Playwright.
test('Waits test', async ({ page }) => {
  // waitUntil can have three values - 'domcontentloaded', 'load', 'networkidle',defaults to load.
  await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
  // Element Level - state can have values 'attached','detached', 'hidden'.defaults to visible.
  await page.waitForSelector('.navbar__title', { state: 'attached' });
  const name = await page.innerText('.navbar__title');
  // Equivalent to Thread.sleep
  await page.waitForTimeout(10000);
  expect(name).toBe('Playwright');
});

// waitForNavigation - Wait for a redirect to happen