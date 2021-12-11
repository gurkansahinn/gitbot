import axios from "axios";

import { GitProvider } from "../../providers/gitProvider";

export class NodePackage implements PackageStrategy {
    public fileName: string = "package.json";

    public async getDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData) {
        const provider = GitProvider.providers.get(providerDomain);

        if (!provider) {
            throw new Error("Provider not found");
        }

        const response = await provider.getRepositoryContents(repositoryData, this.fileName);
        console.log(response);
    }

    public async getPackageLastVersion(packageName: string): Promise<void> {
        const response = await axios.get(`https://unpkg.com/${packageName}/package.json`);

        return response.data.version;
    }
}