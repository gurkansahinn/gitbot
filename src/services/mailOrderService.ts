import { Mails } from "@prisma/client";

export class MailOrderService {
    static getMailList(mails: Mails[]) {
        let mailList: Array<string> = [];

        for (const mail of mails) {
            mailList.push(mail.emailAddress);
        }
        return mailList;
    }

    static getMailTemplate(outDatedDependencyFiles: Array<IOutDatedDependencyFile>) {
        let messageTemplate = "";

        for (const outdatedDependencyFile of outDatedDependencyFiles) {
            messageTemplate += `${outdatedDependencyFile.name} Current Version: ${outdatedDependencyFile.currentVersion}, Last Version: ${outdatedDependencyFile.lastVersion} is outdated.\n`;
        }
        return messageTemplate;
    }
}