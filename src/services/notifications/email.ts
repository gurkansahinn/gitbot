import nodemailer from "nodemailer";
import settings from '../../appsettings.json';

export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor(emailConfig: IEmailConfig) {
        this.transporter = nodemailer.createTransport({
            host: emailConfig.hostName,
            port: emailConfig.port,
            auth: {
                user: emailConfig.username,
                pass: emailConfig.password,
            },
        });
    }

    public async sendEmail(email: string, subject: string, message: string) {
        const response = await this.transporter.sendMail({
            from: settings.applicationName,
            to: email,
            subject: subject,
            text: message,
            headers: {}
        })

        return response;
    }
}