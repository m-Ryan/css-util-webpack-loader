export default function cssRulesReplaceLoader(source: string): string;
export interface ICssRulesOptions {
    test: RegExp;
    rules: ICssRule[];
}
export interface ICssRule {
    name: string;
    originValues: string[];
    replaceValue: string;
}
