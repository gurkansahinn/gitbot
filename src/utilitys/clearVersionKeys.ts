export function clearVersionKeys(version: any): string {
    return version.replace('^', "");
}