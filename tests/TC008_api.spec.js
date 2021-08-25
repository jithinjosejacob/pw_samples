// Test Cases for Playwright Inspector.
const { test, expect } = require('@playwright/test');

test('GET API Call', async ({ playwright }) => {
    const request = await playwright._newRequest();
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    console.log(await response.text())
});