import { githubClient } from "./client/githubClient.js";

async function main() {
    const response = await githubClient.getRepositryFiles({ username: "gurkansahinn", name: "gurkansahinn" });
    console.log(response.data);

}
main();