import settings from '../appsettings.json';

import { GitProvider } from './gitProvider';
import { AxiosResponse } from 'axios';

class GitHubClient {
    private provider: GitProvider;

    constructor() {
        this.provider = new GitProvider(settings.githubApiUrl);
    }

    async getRepositryFiles(repositoryData: IRepositoriesData): Promise<AxiosResponse> {
        return await this.provider.getRepositoryContents(`repos/${repositoryData.username}/${repositoryData.name}/contents`);
    }
}

export const githubClient = new GitHubClient();