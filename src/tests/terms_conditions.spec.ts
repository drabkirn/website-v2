import { test, expect } from '@playwright/test';
import { testNavbar, testFooter, testAccessibility } from './common';

const pagePath = '/terms_conditions';

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

test.describe('terms_conditions.md page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('hero section elements', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Terms and Conditions/);
    await expect(page.getByRole('heading', { name: 'Terms and Conditions', exact: true })).toBeVisible();
  });
});