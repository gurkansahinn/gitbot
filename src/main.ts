import { githubClient } from "./client/githubClient.js";

async function main() {
    const response = await githubClient.getRepositoryFiles({ username: "gurkansahinn", name: "ghostbuster_blacklist" });
    console.log(response.data);

}
main();