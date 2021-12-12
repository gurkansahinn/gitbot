import './services/notificationService';

import { ProviderCollection } from "./extensions/providerCollectionGit";
import { PackageCollection } from "./extensions/packageCollection";
import { PackageContext } from "./services/packageContext";
import { notificationService } from './services/notificationService';

async function main() {
    ProviderCollection.loadGitProviders();
    PackageCollection.loadPackages();

    const outdatedDependencyFiles: Array<IOutDatedDependencyFile> = await PackageContext.getOutdatedDependencyFiles("composer.json", "github.com", { username: "composer", name: "composer", branch: "main" });

    let emailMessage = "";

    for (const outdatedDependencyFile of outdatedDependencyFiles) {
        emailMessage += `${outdatedDependencyFile.name} Current Version: ${outdatedDependencyFile.currentVersion}, Last Version: ${outdatedDependencyFile.lastVersion} is outdated.\n`;
    }

    notificationService.sendNotification("gurkansahin9075@gmail.com", "Gitbot", emailMessage);
}
main();