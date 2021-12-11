import axios, { AxiosInstance } from 'axios';

export class GitHubClient {
    private readonly client: AxiosInstance;

    constructor(baseUrl: string) {
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                Accept: 'application/vnd.github.v3+json',
            }
        });;
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData, fileName: string) {
        return await this.client.get(`${repositoryData.username}/${repositoryData.name}/${repositoryData.branch}/${fileName}`);
    }
}