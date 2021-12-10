import axios from 'axios';
import settings from '../appsettings.json';

import { GitHubClient } from '../clients/githubClient';
import { GitProvider } from "./gitProvider";

export class GithubProvider extends GitProvider {
    private readonly client: GitHubClient;

    constructor() {
        super(settings.githubDomain);

        const httpClient = axios.create({
            baseURL: settings.githubApiUrl,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        this.client = new GitHubClient(httpClient);
    }

    public getRepositoryContents(repositoryData: IRepositoriesData): Promise<void> {
        return this.client.getRepositoryContents(repositoryData);
    }
}