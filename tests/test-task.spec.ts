import { test } from '@playwright/test';
import SearchPage from "./pages/searchPage";

const searchPage = new SearchPage()

test.beforeEach(async ({ page }) => {
  await page.goto('https://yandex.ru/video')
});

 test('preview trailer check', async ({ page }) => {
     await searchPage.inputTextInTheSearchField(page, 'Ураган')
     await searchPage.textSearchCheck(page, 'Ураган')
     await searchPage.firstPosterWithPreviewHover(page)
     await searchPage.previewActiveCheck(page)
 });

