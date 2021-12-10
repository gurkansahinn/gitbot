export class GitProvider implements IGitProvider {
    static providers: Map<string, GitProvider> = new Map();

    constructor(providerDomain: string) {
        GitProvider.providers.set(providerDomain, this);
    }

    public getRepositoryContents(repositoryData: IRepositoriesData): Promise<void> {
        throw new Error("Method not implemented." + repositoryData);
    }
}