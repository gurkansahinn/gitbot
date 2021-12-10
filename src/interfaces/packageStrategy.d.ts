declare interface PackageStrategy {
    getPackageLastVersion(packageName: string): Promise<void>;
}