import { AxiosInstance } from 'axios';

export class GitHubClient {
    private readonly client: AxiosInstance;

    constructor(_client: AxiosInstance) {
        this.client = _client;
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData): Promise<void> {
        return this.client.get(`/repos/${repositoryData.username}/${repositoryData.name}/contents`);
    }
}