import { ProviderCollection } from "./extensions/providerCollectionGit";
import { GitProvider } from "./providers/gitProvider";

async function main() {
    ProviderCollection.loadGitProviders();

    // test
    const provider = GitProvider.providers.get("github.com");

    if (!provider) {
        return;
    }

    const response = await provider.getRepositoryContents({ name: "gurkansahinn", username: "gurkansahinn" });
    console.log(response);
}
main();