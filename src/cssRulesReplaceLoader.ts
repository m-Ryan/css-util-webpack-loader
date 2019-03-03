import loaderUtils from 'loader-utils';

export default function cssRulesReplaceLoader(source: string) {
	const options = loaderUtils.getOptions(this) as ICssRulesOptions;
	options.rules.forEach((item) => {
		item.originValues.forEach((value) => {
			source = source.replace(
				new RegExp(`\\b${item.name}\\s*:\\s*${value}\\b`, 'mig'),
				`${item.name}:${item.replaceValue}`
			);
		});
	});
	return source;
}

export interface ICssRulesOptions {
	test: RegExp;
	rules: ICssRule[];
}

export interface ICssRule {
	name: string;
	originValues: string[];
	replaceValue: string;
}
