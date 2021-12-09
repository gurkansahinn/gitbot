import settings from '../appsettings.json';

import { GitProvider } from './gitProvider';
import { AxiosResponse } from 'axios';

class GitHubClient {
    private provider: GitProvider;

    constructor() {
        this.provider = new GitProvider(settings.githubApiUrl);
    }

    get Provider(): GitProvider {
        return this.provider;
    }

    async getRepositoryFiles(repositoryData: IRepositoriesData): Promise<AxiosResponse> {
        return await this.Provider.getRepositoryContents(`repos/${repositoryData.username}/${repositoryData.name}/contents`);
    }
}

export const githubClient = new GitHubClient();