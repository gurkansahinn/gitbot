import { GithubProvider } from "../providers/githubProvider";

export class ProviderCollection {
    static githubProvider: GithubProvider;

    static loadGitProviders() {
        ProviderCollection.githubProvider = new GithubProvider();
    }
}