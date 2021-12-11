declare interface PackageStrategy {
    public fileName: string;

    getDependencyFiles(providerDomain: string, repositoryData: IRepositoriesData);
    getPackageLastVersion(packageName: string): Promise<void>;
}