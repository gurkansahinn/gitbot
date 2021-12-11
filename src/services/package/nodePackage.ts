import settings from '../../appsettings.json';

import { NodeClient } from "../../clients/nodeClient";
import { GitProvider } from "../../providers/gitProvider";
import { clearVersionKeys } from '../../utilitys/clearVersionKeys';

export class NodePackage implements PackageStrategy {
    private client: NodeClient;

    public fileName: string = "package.json";

    constructor() {
        this.client = new NodeClient(settings.nodeBaseUrl);
    }

    public async getOutdatedDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData) {
        const provider = GitProvider.providers.get(providerDomain);

        if (!provider) {
            throw new Error("Provider not found");
        }

        const packageContents = await provider.getRepositoryContents(repositoryData, this.fileName);
        const outDatedDependencyFiles = await this.separateOutdatedDependencyFiles(packageContents);
        return outDatedDependencyFiles;
    }

    public async separateOutdatedDependencyFiles(packageContents: any) {
        const outDatedDependencyFiles: Array<IOutDatedDependencyFile> = [];

        for (const [packageName, packageCurrentVersion] of Object.entries(packageContents.dependencies)) {
            const currentVersion = clearVersionKeys(packageCurrentVersion);
            const lastVersion = await this.getPackageLastVersion(packageName);

            if (currentVersion !== lastVersion) {
                outDatedDependencyFiles.push({ name: packageName, currentVersion: currentVersion, lastVersion: lastVersion });
            }
        }

        return outDatedDependencyFiles;
    }

    public async getPackageLastVersion(packageName: string): Promise<string> {
        return await this.client.getPackageVersion(packageName);
    }
}