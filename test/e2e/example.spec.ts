import { expect, test } from '@playwright/test';

const websiteURL = 'http://localhost:4321/';

test('has title', async ({ page }) => {
  await page.goto(websiteURL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Gebruikersonderzoeken/i);
});

test('GitHub link', async ({ page }) => {
  await page.goto(websiteURL);

  const link = page.getByRole('link', { name: 'GitHub' });

  await expect(link).toBeDefined();
});
