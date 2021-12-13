import settings from '../appsettings.json';

import { GitHubClient } from '../clients/githubClient';
import { GitProvider } from "./gitProvider";

export class GithubProvider extends GitProvider {
    private readonly client: GitHubClient;

    constructor() {
        super(settings.githubDomain);

        this.client = new GitHubClient(settings.githubRawUrl);
    }

    public async getRepositoryContents(repositoryData: IRepositoriesData, fileName: string) {
        const response = await this.client.getRepositoryContents(repositoryData, fileName);

        console.log(response);
        if (!response) {
            return false;
        }

        return response.data;
    }
}