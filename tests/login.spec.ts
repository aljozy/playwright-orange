import { test, expect } from './fixtures/base';
import Env from '../utils/Env';

test.describe('OrangeHRM Login Tests', () => {
    
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToLogin();
    });

    test('should login successfully with valid credentials', async ({ loginPage }) => {
        await loginPage.login(Env.USERNAME, Env.PASSWORD);
        await loginPage.verifyLoginSuccess();
    });

    test('should show error with invalid credentials', async ({ loginPage }) => {
        await loginPage.login('Admin', 'invalidPass');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Invalid credentials');
    });
});
