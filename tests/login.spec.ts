import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM Login Tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await loginPage.navigateToLogin();
        await loginPage.login('Admin', 'admin123');
        await loginPage.verifyLoginSuccess();
    });
});
