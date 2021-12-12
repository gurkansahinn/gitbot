import nodemailer from "nodemailer";
import settings from '../../appsettings.json';

export class EmailService {
    private transporter: nodemailer.Transporter;

    constructor(emailConfig: IEmailConfig) {
        this.transporter = nodemailer.createTransport({
            host: emailConfig.hostName,
            port: emailConfig.port,
            secure: false,
            requireTLS: true,
            auth: {
                user: emailConfig.username,
                pass: emailConfig.password,
            },
            logger: true
        });
    }

    public async sendEmail(email: string, message: string) {
        const response = await this.transporter.sendMail({
            from: settings.applicationName,
            to: email,
            subject: "asdgasg",
            text: message,
            headers: {}
        })


    }
}