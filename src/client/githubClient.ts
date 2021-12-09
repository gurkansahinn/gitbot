import settings from '../appsettings.json';

import { GitProvider } from './gitProvider';
import { AxiosResponse } from 'axios';

class GitHubClient extends GitProvider {
    constructor() {
        super(settings.githubDomain);
    }

    getRepositoryContents(url: string): Promise<AxiosResponse> {
        return this.getRepositoryContents(url);
    }
}

export const githubClient = new GitHubClient();