import dotenv from "dotenv";
dotenv.config();

import { EmailService } from "./notification/email";

export class NotificationService {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService({
            hostName: process.env.SMTP_HOST,
            port: 25,
            username: process.env.SMTP_USERNAME,
            password: process.env.SMTP_PASSWORD,
        });
    }

    public sendNotification(email: string, message: string) {
        this.emailService.sendEmail(email, message);
    }
}