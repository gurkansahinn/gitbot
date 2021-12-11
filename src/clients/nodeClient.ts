import axios, { AxiosInstance } from 'axios';

export class NodeClient {
    private readonly client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            }
        });;
    }

    public async getPackageVersion(packageName: string): Promise<string> {
        return await (await this.client.get(`${packageName}/package.json`)).data.version;
    }
}