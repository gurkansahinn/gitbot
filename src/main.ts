import { ProviderCollection } from "./extensions/providerCollectionGit";
import { PackageCollection } from "./extensions/packageCollection";
import { PackageContext } from "./services/packageContext";

async function main() {
    ProviderCollection.loadGitProviders();
    PackageCollection.loadPackages();

    const res = await PackageContext.getDependencyFiles("package.json", "github.com", { username: "gurkansahinn", name: "ghostbuster_blacklist", branch: "master" });
    console.log(res);
}
main();