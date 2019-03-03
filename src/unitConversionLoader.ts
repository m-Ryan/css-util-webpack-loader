import loaderUtils from 'loader-utils';

export default function unitConversionLoader(source: string) {
	const options = loaderUtils.getOptions(this) as ICssRulesOptions;
	const pattern = new RegExp(`\\b(\\d+(\\.\\d+)?)(${options.originUnit})\\b`, 'mig');
	source = source.replace(pattern, function(group1: string, group2: string, group3: string, group4: string) {
		const newText = parseFloat((Number(group2) * options.times).toFixed(options.precision)) + options.replaceUnit;
		return newText;
	});
	return source;
}

export interface ICssRulesOptions {
	originUnit: string;
	replaceUnit: string;
	precision: number;
	times: number;
}
