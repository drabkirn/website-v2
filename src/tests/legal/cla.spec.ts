import { test, expect } from '@playwright/test';
import { testNavbar, testFooter } from '../common';

const pagePath = '/legal/cla';

test.describe('navbar and footer elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('navbar elements', async ({ page }) => {
    await testNavbar(page);
  });

  test('footer elements', async ({ page }) => {
    await testFooter(page);
  });
});

test.describe('cla.md page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('hero section elements', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Contributor License Agreement/);
    await expect(page.getByRole('heading', { name: 'Contributor License Agreement', exact: true })).toBeVisible();
  });
});