import { test, expect } from '@playwright/test';
import console from 'console';
test('Verify Google Search Title', async ({ page }) => {
await page.goto('https://www.google.com/');
//await expect(page).toHaveTitle(/Google/);
const url=await page.url();
console.log("Title: " + url);
const title=await page.title();
console.log("Title: " + title);
expect(title).toBe("Google");
await expect(page).toHaveTitle("Google");
})