declare interface IGitProvider {
    getRepositoryContents(repositoryData: IRepositoriesData): Promise<void>;
}