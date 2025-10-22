import { test, expect } from '@playwright/test';
import { testNavbar, testFooter } from './common';

const pagePath = '/';

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

test.describe('index.astro page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(pagePath);
  });

  test('hero section elements', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Drabkirn/);
    await expect(page.getByRole('heading', { name: 'Drabkirn' })).toBeVisible();
    await expect(page.getByText('Create the world out of the things that you build')).toBeVisible();
  });

  test('project elements', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects:' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Feedka' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Notga' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Botja' })).toBeVisible();
    await expect(page.locator('.card')).toHaveCount(3);

    await expect(page.getByRole('link', { name: 'GitHub' }).first()).toHaveAttribute('href', 'https://github.com/drabkirn/feedka');
    await expect(page.getByRole('link', { name: 'GitHub' }).nth(1)).toHaveAttribute('href', 'https://github.com/drabkirn/notga');
    await expect(page.getByRole('link', { name: 'GitHub' }).nth(2)).toHaveAttribute('href', 'https://github.com/drabkirn/botja');
  });

  test('social section elements', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s GitHub' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s GitHub' })).toHaveAttribute('href', 'https://github.com/drabkirn');

    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s X profile' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s X profile' })).toHaveAttribute('href', 'https://x.com/drabkirn');

    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s Instagram profile' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Visit drabkirn\'s Instagram profile' })).toHaveAttribute('href', 'https://www.instagram.com/drabkirn');

    await expect(page.getByRole('link', { name: 'Join drabkirn\'s discord server' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Join drabkirn\'s discord server' })).toHaveAttribute('href', 'https://discordapp.com/invite/wFPtMUY');
  });
});