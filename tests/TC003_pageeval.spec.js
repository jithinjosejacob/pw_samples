// Test Cases for Page Eval.
const { test, expect } = require('@playwright/test');

// Evaluating an expression.
test('Pageeval test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  let value = await page.evaluate(() => document.querySelector('.navbar__title').innerText);
  console.log("Page Eval Output - ",value);
  const name = await page.innerText('.navbar__title');
  console.log("CSS Selector Text - ",name);
  expect(name).toBe(value);
});