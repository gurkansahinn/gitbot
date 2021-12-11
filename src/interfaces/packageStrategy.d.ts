declare interface PackageStrategy {
    public fileName: string;

    getOutdatedDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData);
    separateOutdatedDependencyFiles(packageContents: any);
    getPackageLastVersion(packageName: string): Promise<string>;
}