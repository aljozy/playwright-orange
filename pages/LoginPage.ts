import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import Logger from '../utils/Logger';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByRole('alert');
    }

    async navigateToLogin() {
        // BasePage's goto logs the action
        await this.goto('/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        Logger.info(`Logging in with username: ${username}`);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        Logger.info('Verifying login success');
        await expect(this.page).toHaveURL(/dashboard/);
        const dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });
        await expect(dashboardHeader).toBeVisible();
    }
}
