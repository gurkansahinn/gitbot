import { GithubProvider } from "../providers/githubProvider";

export class ProviderCollection {

    static loadGitProviders() {
        new GithubProvider();
    }
}