import { Page } from '@playwright/test';
import Logger from '../utils/Logger';

/**
 * BasePage class that provides common functionality and properties for all page objects.
 * This class should be inherited by specific page object classes.
 */
export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates the current page to a given URL.
     * @param url - The URL to navigate to.
     */
    async goto(url: string) {
        Logger.info(`Navigating to: ${url}`);
        await this.page.goto(url);
    }

    /**
     * Waits for a specific amount of time.
     * Use with caution; prefer using locator-based waits.
     * @param ms - The time to wait in milliseconds.
     */
    async wait(ms: number) {
        Logger.info(`Waiting for ${ms} ms`);
        await this.page.waitForTimeout(ms);
    }

    /**
     * Gets the current page's title.
     * @returns A promise that resolves to the page title.
     */
    async getTitle(): Promise<string> {
        const title = await this.page.title();
        Logger.info(`Page title: ${title}`);
        return title;
    }
}
