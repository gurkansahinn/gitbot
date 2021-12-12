import { ProviderCollection } from "./extensions/providerCollectionGit";
import { PackageCollection } from "./extensions/packageCollection";
import { PackageContext } from "./services/packageContext";

async function main() {
    ProviderCollection.loadGitProviders();
    PackageCollection.loadPackages();

    const outdatedDependencyFiles = await PackageContext.getOutdatedDependencyFiles("composer.json", "github.com", { username: "composer", name: "composer", branch: "main" });
    console.log(outdatedDependencyFiles);
}
main();