import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class GitProvider {
    private instance: AxiosInstance | null = null;

    constructor(private readonly serviceDomain: string) {
        this.instance = axios.create({
            baseURL: this.serviceDomain,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=utf-8",
            },
        });
    }

    public async getRepositoryContents(url: string): Promise<AxiosResponse> {
        const response: AxiosResponse = await this.instance.get(url);
        return response;
    }
}