import settings from '../appsettings.json';

import { GitProvider } from './gitProvider';
import { AxiosResponse } from 'axios';

class GitHubClient {
    private provider: GitProvider;

    constructor() {
        this.provider = new GitProvider(settings.githubApiUrl);
    }

    get Provider() {
        return this.provider;
    }

    async getRepositryFiles(repositoryData: IRepositoriesData): Promise<AxiosResponse> {
        return await this.Provider.getRepositoryContents(`repos/${repositoryData.username}/${repositoryData.name}/contents`);
    }
}

export const githubClient = new GitHubClient();