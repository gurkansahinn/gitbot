import settings from '../appsettings.json';

import { GitProvider } from './gitProvider';
import { AxiosResponse } from 'axios';

class GitHubClient extends GitProvider {
    constructor() {
        super(settings.githubDomain);
    }

    getRepositories(url: string): Promise<AxiosResponse> {
        return this.getRepositories(url);
    }
}

export const githubClient = new GitHubClient();