import dotenv from "dotenv";
dotenv.config();

import { EmailService } from "./notifications/email";
import { MailOrderService } from "./mailOrderService";

export class NotificationService {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService({
            hostName: process.env.SMTP_HOST,
            port: 587,
            username: process.env.SMTP_USERNAME,
            password: process.env.SMTP_PASSWORD,
        });
    }

    public sendNotification(email: string, subject: string, message: string) {
        this.emailService.sendEmail(email, subject, message);
    }

    public sendOutDatedNotificationToMultiple(subject: string, outdatedDependencyFile: Array<IOutDatedDependencyFile>, emails: string[]) {
        const message = MailOrderService.getMailTemplate(outdatedDependencyFile);

        for (const email of emails) {
            this.emailService.sendEmail(email, subject, message);
        }
    }
}

export const notificationService: NotificationService = new NotificationService();