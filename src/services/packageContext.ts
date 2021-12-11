export class PackageContext {
    static strategies: Map<string, PackageStrategy> = new Map();

    constructor(packageStrategy: PackageStrategy) {
        PackageContext.strategies.set(packageStrategy.fileName, packageStrategy);
    }

    static async getDependencyFiles(fileName: string, providerDomain: string, repositoryData: IRepositoriesData) {
        const packageStrategy = PackageContext.strategies.get(fileName);

        if (!packageStrategy) {
            throw new Error(`Package strategy for ${fileName} not found`);
        }

        return await packageStrategy.getDependencyFiles(providerDomain, repositoryData);
    }

    static async getPackageLastVersion(fileName: string, packageName: string): Promise<void> {
        const packageStrategy = PackageContext.strategies.get(fileName);

        if (!packageStrategy) {
            throw new Error(`Package strategy for ${fileName} not found`);
        }

        return await packageStrategy.getPackageLastVersion(packageName);
    }
}