export class ComposerPackage implements PackageStrategy {
    public async getPackageLastVersion(packageName: string): Promise<void> {
        console.log(packageName);
    }
}