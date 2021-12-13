import { prismaService } from "./prismaService";
import { Cron } from "cron-decorators";

import { notificationService } from "./notificationService";
import { PackageContext } from "./packageContext";
import { MailOrderService } from "./mailOrderService";

export class PackageCronService {
    @Cron("PackageCronService", CronTypes.MINUTE_LOOP)
    static async start() {
        const currentDate = new Date();

        const repositories = await prismaService.repositories.findMany();

        for (const repository of repositories) {
            if (repository.createdAt.getHours() != currentDate.getHours() || repository.createdAt.getMinutes() != currentDate.getMinutes()) {
                continue;
            }

            const outdatedDependencyFiles: Array<IOutDatedDependencyFile> = await PackageContext.getOutdatedDependencyFiles(repository.fileName, repository.providerDomain, {
                owner: repository.owner,
                name: repository.name,
                branch: repository.branch
            });

            const emails = await prismaService.mails.findMany({
                where: {
                    repositoryId: repository.id
                }
            });

            notificationService.sendOutDatedNotificationToMultiple(`Gitbot - Outdated Packages (${repository.owner}/${repository.name} ${repository.fileName})`,
                outdatedDependencyFiles,
                MailOrderService.getMailList(emails));
        }
    }
}