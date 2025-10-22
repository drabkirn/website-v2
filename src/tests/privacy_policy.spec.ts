import { test, expect } from '@playwright/test';
import { testNavbar, testFooter, testAccessibility } from './common';

const pagePath = '/privacy_policy';

test.describe('navbar and footer elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('accessibility elements', async ({ page }) => {
    await testAccessibility(page);
  });

  test('navbar elements', async ({ page }) => {
    await testNavbar(page);
  });

  test('footer elements', async ({ page }) => {
    await testFooter(page);
  });
});

test.describe('privacy_policy.md page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('hero section elements', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Privacy Policy/);
    await expect(page.getByRole('heading', { name: 'Privacy Policy', exact: true })).toBeVisible();
  });
});