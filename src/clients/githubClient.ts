import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class GitHubClient {
    private readonly client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                Accept: 'application/vnd.github.v3+json',
            }
        });
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData, fileName: string): Promise<AxiosResponse | null> {
        try {
            const response = await this.client.get(`${repositoryData.owner}/${repositoryData.name}/${repositoryData.branch}/${fileName}`);
            return response;
        } catch (error) {
            return null;
        }
    }
}