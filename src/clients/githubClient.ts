import settings from '../appsettings.json';

import axios, { AxiosInstance } from 'axios';

export class GitHubClient {
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: settings.githubApiUrl,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });;
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData): Promise<void> {
        return this.client.get(`/repos/${repositoryData.username}/${repositoryData.name}/contents`);
    }
}