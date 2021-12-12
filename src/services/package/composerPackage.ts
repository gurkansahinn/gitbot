import settings from "../../appsettings.json";

import { ComposerClient } from "../../clients/composerClient";
import { GitProvider } from "../../providers/gitProvider";
import { clearVersionKeys } from "../../utilitys/clearVersionKeys";

export class ComposerPackage implements PackageStrategy {
    private client: ComposerClient;

    public fileName: string = "composer.json";

    constructor() {
        this.client = new ComposerClient(settings.composerBaseUrl);
    }

    public async getOutdatedDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData) {
        const provider = GitProvider.providers.get(providerDomain);

        if (!provider) {
            throw new Error("Provider not found");
        }

        const packageContents = await provider.getRepositoryContents(repositoryData, this.fileName);
        return this.separateOutdatedDependencyFiles(packageContents);
    }

    public async separateOutdatedDependencyFiles(packageContents: any) {
        const outDatedDependencyFiles: Array<IOutDatedDependencyFile> = [];

        for (const [packageName, packageCurrentVersion] of Object.entries(packageContents.require)) {
            if (packageName === "php") {
                continue;
            }

            const currentVersion = clearVersionKeys(packageCurrentVersion);
            const lastVersion = clearVersionKeys(await this.getPackageLastVersion(packageName));

            if (currentVersion !== lastVersion) {
                outDatedDependencyFiles.push({ name: packageName, currentVersion: currentVersion, lastVersion: lastVersion });
            }
        }

        return outDatedDependencyFiles;
    }

    public async getPackageLastVersion(packageName: string): Promise<string> {
        return this.client.getPackageVersion(packageName);
    }
}