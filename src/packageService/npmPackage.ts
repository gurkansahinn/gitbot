import axios from "axios";

export class NPMPackage implements PackageStrategy {
    public async getPackageLastVersion(packageName: string): Promise<void> {
        const response = await axios.get(`https://unpkg.com/${packageName}/package.json`);

        return response.data.version;
    }
}