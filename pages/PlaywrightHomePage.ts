import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class PlaywrightHomePage extends BasePage {
    private readonly getStartedLink: Locator;
    private readonly installationHeading: Locator;

    constructor(page: Page) {
        super(page);
        this.getStartedLink = page.getByRole('link', { name: 'Get started' });
        this.installationHeading = page.getByRole('heading', { name: 'Installation' });
    }

    /**
     * Navigates to the Playwright home page.
     */
    async navigateTo() {
        await this.goto('https://playwright.dev/');
    }

    /**
     * Clicks on the 'Get started' link.
     */
    async clickGetStarted() {
        await this.getStartedLink.click();
    }

    /**
     * Returns the installation heading locator.
     * Useful for assertions in the test file.
     * @returns The installation heading locator.
     */
    getInstallationHeading(): Locator {
        return this.installationHeading;
    }
}
