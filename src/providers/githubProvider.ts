import settings from '../appsettings.json';

import { GitHubClient } from '../clients/githubClient';
import { GitProvider } from "./gitProvider";

export class GithubProvider extends GitProvider {
    private readonly client: GitHubClient;

    constructor() {
        super(settings.githubDomain);

        this.client = new GitHubClient();
    }

    public getRepositoryContents(repositoryData: IRepositoriesData): Promise<void> {
        return this.client.getRepositoryContents(repositoryData);
    }
}