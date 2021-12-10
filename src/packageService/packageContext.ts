export class PackageContext {
    private packageStrategy: PackageStrategy;

    constructor(packageStrategy: PackageStrategy) {
        this.packageStrategy = packageStrategy;
    }

    public async getPackageLastVersion(packageName: string): Promise<void> {
        return await this.packageStrategy.getPackageLastVersion(packageName);
    }
}