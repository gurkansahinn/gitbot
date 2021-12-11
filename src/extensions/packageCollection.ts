import { ComposerPackage } from "../services/package/composerPackage";
import { NodePackage } from "../services/package/nodePackage";
import { PackageContext } from "../services/packageContext";

export class PackageCollection {
    static loadPackages() {
        new PackageContext(new NodePackage());
        new PackageContext(new ComposerPackage());
    }
}