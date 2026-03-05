import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

// Declare the types of your fixtures.
type MyFixtures = {
    loginPage: LoginPage;
};

// Extend base test by providing "loginPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // Set up the fixture.
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';
