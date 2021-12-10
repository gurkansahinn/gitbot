import { AxiosResponse } from "axios";

interface IGitProvider {
    getRepositoryContents(repositoryData: IRepositoriesData): Promise<AxiosResponse>;
}

export class GitProvider implements IGitProvider {
    static providers: Map<string, GitProvider> = new Map();

    constructor(providerDomain: string) {
        GitProvider.providers.set(providerDomain, this);
    }

    getRepositoryContents(repositoryData: IRepositoriesData): Promise<AxiosResponse> {
        throw new Error("Method not implemented." + repositoryData);
    }
}