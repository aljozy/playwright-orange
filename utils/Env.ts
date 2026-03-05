export default class Env {
    public static get BASE_URL(): string {
        return process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    }

    public static get USERNAME(): string {
        return process.env.USERNAME || 'Admin';
    }

    public static get PASSWORD(): string {
        return process.env.PASSWORD || 'admin123';
    }
}
