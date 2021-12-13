import { ComposerPackage } from "../services/packages/composerPackage";
import { NodePackage } from "../services/packages/nodePackage";
import { PackageContext } from "../services/packageContext";

export class PackageCollection {
    static loadPackages() {
        new PackageContext(new NodePackage());
        new PackageContext(new ComposerPackage());
    }
}