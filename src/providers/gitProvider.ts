export class GitProvider implements IGitProvider {
    static providers: Map<string, GitProvider> = new Map();

    constructor(providerDomain: string) {
        GitProvider.providers.set(providerDomain, this);
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData, fileName: string) {
        throw new Error(`Method not implemented. ${repositoryData}, ${fileName}`);
    }

    public async getDependencyListFromContents(contents: Array<any>) {
        throw new Error("Method not implemented. " + contents);
    }
}