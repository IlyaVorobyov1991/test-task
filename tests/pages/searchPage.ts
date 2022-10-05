import {expect, Page} from "@playwright/test";

const searchButton = '//div[@class="mini-suggest__button-fill"]'
const searchInput = '//input[@class="input__control mini-suggest__input"]'
const posterWithPreviewFirst = '(//div[1]/div[contains(@class, "thumb-preview")])[1]/..'
const posterWithPreviewActive = '//div[contains(@class, "thumb-preview_active_yes")]'

class SearchPage {

     public inputTextInTheSearchField = async (page:Page, searchValue) =>{
        await page.locator(searchInput).fill(searchValue)
        await page.locator(searchButton).click()
    }

    public textSearchCheck = async (page:Page, searchValue) =>{
        const searchValueFirstPoster = '//div[@class="serp-list__items"]/div[1]//a[contains(text(),"' + searchValue + '")]'
        await expect(page.locator(searchValueFirstPoster)).toBeVisible()
    }

    public firstPosterWithPreviewHover = async (page:Page) =>{
        await expect(page.locator(posterWithPreviewFirst)).toBeVisible()
        await page.locator(posterWithPreviewFirst).hover()
    }

    public previewActiveCheck = async (page:Page) =>{
        await expect(page.locator(posterWithPreviewActive)).toBeVisible()
    }


}



export default SearchPage