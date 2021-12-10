import "./providers/githubProvider";

import { GitProvider } from "./providers/gitProvider";

async function main() {
    const provider = GitProvider.providers.get("github.com");

    if (!provider) {
        return;
    }

    const response = await provider.getRepositoryContents({ name: "gurkansahinn", username: "gurkansahinn" });
    console.log(response);
}
main();