import {Page, Locator, expect} from "@playwright/test";

export class FifaHomePage {
    page: Page;
    title: Locator;
    logo: Locator;
    navLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('href="/en/home"');
        this.title = page.locator('FIFA | The Home of Football');
        this.navLink = page.locator('#mainLinksID a');
    }

async goto() {
    await this.page.goto('https:/www.fifa.com/fifaplus/en/home/');
}
async VerifyTitlePage (term: string) {
    const logo = this.title()

    await expect(this.logo).toBeVisible();
    await expect(this.logo).not.toHaveAttribute('title', 'FIFA')


}
}