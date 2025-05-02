// tests/homepage.test.js
const { test, expect } = require('@playwright/test');

test('homepage has title "Mon Site" et un bouton "Commencer"', async ({ page }) => {
  // Naviguer vers la page
  await page.goto('http://localhost:3000');

  // Vérifier le titre
  await expect(page).toHaveTitle(/Mon Site/);

  // Vérifier la présence du bouton "Commencer"
  const button = await page.locator('text=Commencer');
  await expect(button).toBeVisible();
});