import settings from "../../appsettings.json";

import { ComposerClient } from "../../clients/composerClient";
import { GitProvider } from "../../providers/gitProvider";

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

        const response = await provider.getRepositoryContents(repositoryData, this.fileName);
        console.log(response)
    }

    public async separateOutdatedDependencyFiles() {
        // TODO
    }

    public async getPackageLastVersion(packageName: string): Promise<string> {
        return this.client.getPackageVersion(packageName);
    }
}