export class GitProvider implements IGitProvider {
    static providers: Map<string, GitProvider> = new Map();

    constructor(providerDomain: string) {
        GitProvider.providers.set(providerDomain, this);
    }

    public getRepositoryContents(repositoryData: IRepositoriesData, fileName: string): Promise<any> {
        throw new Error(`Method not implemented. ${repositoryData}, ${fileName}`);
    }

    public getDependencyListFromContents(contents: Array<any>) {
        throw new Error("Method not implemented. " + contents);
    }
}