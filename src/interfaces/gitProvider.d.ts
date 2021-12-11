declare interface IGitProvider {
    getRepositoryContents(repositoryData: IRepositoriesData, fileName: string);
    getDependencyListFromContents(contents: Array<any>);
}