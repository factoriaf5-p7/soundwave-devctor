
import { test, expect, type Page } from '@playwright/test';



test.describe('Discover page', () => {
  let browser;
  let page;
  
  test.use({
    viewport: { width: 420, height: 1200 },
    // isMobile: true
  })

  test.beforeEach(async ({ page }) => {

    await page.goto('http://localhost:5173/discover');
  });

  test('Title have discover in title page', async ({ page }) => {
    await expect(page).toHaveTitle(/discover/i)
  });

  test('Title h1 is "Discover new music', async ({ page }) => {
    const locator = page.locator('h1')
    await expect(locator).toHaveText(/discover new music/i)
  })
  
  // test('Cards have icon and label text', async ({ page }) => {
  //    const icon = await  page.getByAltText('Micro')
  //   await expect(icon).toHaveText('dd')
  // })
});
