//supported for legacy
//const{test, expect}=require('@playwright/test')
import { test, expect } from '@playwright/test';
test ('test 1', async ({ page }) => {
    expect(1).toBe(1);
});
test.skip ('test 2', async ({ page }) => {
    expect(10).toBe(10);
});
test ('test 3', async ({ page }) => {
    expect(100).toBe(100);
});
test.only ('test 4', async ({ page }) => {
    expect("Prasenjit Malakar").toContain("Malakar");
});
test.only ('test 5', async ({ page }) => {
    expect(true).toBeTruthy();
});
test.only ('test 6', async ({ page }) => {
    expect(false).toBeFalsy();
});
test.only ('test 7', async ({ page }) => {
    expect("Prasenjit Malakar").toContain("Malakar").toBeTruthy();
});