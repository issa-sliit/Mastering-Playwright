import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');


  console.log("page 2 test 1")
  await setTimeout(10000)


    // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  console.log("page 2 test 2")
  await setTimeout(10000)

  
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
