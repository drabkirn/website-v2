import { expect, type Page } from '@playwright/test';

export async function testNavbar(page: Page) {
  const navbar = page.getByRole('navigation');
  const initialUrl = page.url();
  let currentUrl = page.url();

  await expect(navbar).toBeVisible();
  await expect(navbar.locator('.drabkirn-brand-link')).toBeVisible();
  await expect(navbar.locator('.drabkirn-brand-link')).toHaveAttribute('href', '/');
  await expect(navbar.getByAltText('Drabkirn Brand Logo')).toBeVisible();

  await expect(navbar.locator('.home-link')).toBeVisible();
  await expect(navbar.locator('.home-link')).toHaveAttribute('href', '/');

  // Theme toggle (light/dark) behaviour
  const html = page.locator('html');
  const sunToggle = navbar.locator('.theme-icon-sun');
  const moonToggle = navbar.locator('.theme-icon-moon');

  const initialTheme = await html.getAttribute('data-bs-theme');

  if (initialTheme === 'light') {
    await expect(moonToggle).toBeVisible();
    await expect(sunToggle).toBeHidden();

    await moonToggle.click();
    await expect(html).toHaveAttribute('data-bs-theme', 'dark');
    await expect(sunToggle).toBeVisible();
    await expect(moonToggle).toBeHidden();
    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('theme')))
      .toBe('dark');

    await sunToggle.click();
    await expect(html).toHaveAttribute('data-bs-theme', 'light');
    await expect(moonToggle).toBeVisible();
    await expect(sunToggle).toBeHidden();
    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('theme')))
      .toBe('light');
  } else {
    // default or stored theme is dark
    await expect(sunToggle).toBeVisible();
    await expect(moonToggle).toBeHidden();

    await sunToggle.click();
    await expect(html).toHaveAttribute('data-bs-theme', 'light');
    await expect(moonToggle).toBeVisible();
    await expect(sunToggle).toBeHidden();
    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('theme')))
      .toBe('light');

    await moonToggle.click();
    await expect(html).toHaveAttribute('data-bs-theme', 'dark');
    await expect(sunToggle).toBeVisible();
    await expect(moonToggle).toBeHidden();
    await expect
      .poll(async () => page.evaluate(() => localStorage.getItem('theme')))
      .toBe('dark');
  }

  // Test Navigation
  await navbar.locator('.drabkirn-brand-link').click();
  currentUrl = page.url();
  await expect(page).toHaveURL('http://localhost:4321/');
  if (initialUrl !== currentUrl) {
    await page.goBack();
  }
  await expect(page).toHaveURL(initialUrl);

  await navbar.locator('.home-link').click();
  currentUrl = page.url();
  await expect(page).toHaveURL('http://localhost:4321/');
  if (initialUrl !== currentUrl) {
    await page.goBack();
  }
  await expect(page).toHaveURL(initialUrl);
}

export async function testFooter(page: Page) {
  const footer = page.locator('footer');
  const currentYear = new Date().getFullYear();
  const initialUrl = page.url();
  let currentUrl = page.url();

  await expect(footer).toBeVisible();

  await expect(footer.locator('.copyrights-text')).toHaveText(
    `Copyrights ©, 2019-${currentYear} - drabkirn`
  );

  const privacy = footer.locator('.privacy-policy-link');
  await expect(privacy).toBeVisible();
  await expect(privacy).toHaveAttribute('href', '/privacy_policy');
  await privacy.click();
  currentUrl = page.url();
  await expect(page).toHaveURL('http://localhost:4321/privacy_policy');
  await expect(page.getByRole('heading', { name: 'Privacy Policy', exact: true })).toBeVisible();
  if (initialUrl !== currentUrl) {
    await page.goBack();
  }
  await expect(page).toHaveURL(initialUrl);

  const terms = footer.locator('.terms-conditions-link');
  await expect(terms).toBeVisible();
  await expect(terms).toHaveAttribute('href', '/terms_conditions');
  await terms.click();
  currentUrl = page.url();
  await expect(page).toHaveURL('http://localhost:4321/terms_conditions');
  await expect(page.getByRole('heading', { name: 'Terms and Conditions' })).toBeVisible();

  if (initialUrl !== currentUrl) {
    await page.goBack();
  }
  await expect(page).toHaveURL(initialUrl);

  const contact = footer.locator('.contact-link');
  await expect(contact).toBeVisible();
  await expect(contact).toHaveAttribute('href', 'mailto:drabkirn@cdadityang.xyz');
}