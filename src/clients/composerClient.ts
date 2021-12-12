import axios, { AxiosInstance } from 'axios';

export class ComposerClient {
    private readonly client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    public async getPackageVersion(packageName: string): Promise<string> {
        return await (await this.client.get(`${packageName}.json`)).data.packages[packageName][0].version;
    }
}