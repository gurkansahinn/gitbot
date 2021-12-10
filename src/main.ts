import { githubClient } from "./client/githubClient";
import { NPMPackage } from "./packageService/npmPackage";
import { PackageContext } from "./packageService/packageContext";

async function main() {
    const response = await githubClient.getRepositoryFiles({ username: "gurkansahinn", name: "ghostbuster_blacklist" });
    console.log(response.data);

    const context = new PackageContext(new NPMPackage());
    console.log(await context.getPackageLastVersion("axios"));
}
main();