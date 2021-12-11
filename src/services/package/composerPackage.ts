import { GitProvider } from "../../providers/gitProvider";

export class ComposerPackage implements PackageStrategy {
    public fileName: string = "composer.json";

    public async getDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData) {
        const provider = GitProvider.providers.get(providerDomain);

        if (!provider) {
            throw new Error("Provider not found");
        }

        const response = await provider.getRepositoryContents(repositoryData, this.fileName);
        console.log(response);
    }

    public async getPackageLastVersion(packageName: string): Promise<void> {
        console.log(packageName);
    }
}