import { test } from '@playwright/test';

test(`smoke test`, async ({ page }) => {
	// Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
	await page.goto(`/`);
	// // Find an element with the text 'About Me' and click on it
	// await page.click('text=About Me')
	// // The new url should be "/#about-me" (baseURL is used there)
	// await expect(page).toHaveURL('http://localhost:3000/#about')
	// // The new page should contain an h1 with "About Page"
	// await expect(page.locator('h1')).toContainText('About Me')
});
