import { test, expect, type Page } from '@playwright/test';



test.describe('Soundwave App', () => {
  let browser;
  let page;
  
  test.use({
    viewport: { width: 420, height: 1200 },
    // isMobile: true
  })

  test.beforeEach(async ({ page }) => {

    await page.goto('http://localhost:5173/');
  });

  test.afterAll(async () => {

  });

  test('should have the expected title', async ({ page }) => {
    const expectedTitle = "Home"; // Replace with the title you expect
  
    const pageTitle = await page.title();
    expect(pageTitle).toBe(expectedTitle);
  });

  test('should display the logo with alt text', async ({ page }) => {
    const logo = await page.waitForSelector('img[alt="Soundwave Logo"]');
    expect(logo).not.toBeNull();
  });

  test('should display items in the navigation', async ({ page }) => {
    const navigationItems = await page.$$eval('nav ul li', (items) => items.map((item) => item.textContent));
    expect(navigationItems.length).toBeGreaterThan(0);
  });

  // test('should display the hero image with alt text', async ({ page }) => {
  //   const heroImage = await page.waitForSelector('img[alt="Hero Image"]');
  //   expect(heroImage).not.toBeNull();
  // });

  test('should display the title "Feel the music"', async ({ page }) => {
    const title = await page.waitForSelector('h1');
    const titleText = await title.textContent();
    expect(titleText).toBe('Feel the music');
  });

  test('should display the paragraph with the specified text', async ({ page }) => {
    const paragraph = await page.waitForSelector('p');
    const paragraphText = await paragraph.textContent();
    expect(paragraphText).toBe('Stream over 20 thousand songs with a click');
  });

  test('should have a "Join Now" button with the specified background color', async ({ page }) => {
    const joinButton = await page.waitForSelector('button');
    const buttonBgColor = await joinButton.evaluate((btn) => getComputedStyle(btn).backgroundColor);
    expect(buttonBgColor).toBe('rgb(23, 98, 167)');
  });
});
