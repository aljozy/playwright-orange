import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('has title', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.navigateTo();
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);
  await homePage.navigateTo();
  await homePage.clickGetStarted();
  await expect(homePage.getInstallationHeading()).toBeVisible();
});
