import './api/main';
import './services/notificationService';

import { ProviderCollection } from "./extensions/providerCollectionGit";
import { PackageCollection } from "./extensions/packageCollection";
import { PackageCronService } from './services/packageCronService';

async function main() {
    ProviderCollection.loadGitProviders();
    PackageCollection.loadPackages();

    PackageCronService.start();
}
main();

/*const repository = await prismaService.repositories.create({
        data: {
            providerDomain: "github.com",
            name: 'gurkansahinn',
            owner: 'gurkansahinn',
            branch: 'master',
            fileName: 'package.json',
        }

    });

    const mails = await prismaService.mails.create({
        data: {
            repositoryId: repository.id,
            emailAddress: "gurkansahin9075@gmail.com"
        }
    });

    console.log(repository, mails);*/