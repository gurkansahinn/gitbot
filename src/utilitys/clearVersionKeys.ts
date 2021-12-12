export function clearVersionKeys(version: any): string {
    // TODO: regex
    return version.replace('^', "").replace('v', "").replace('V');
}