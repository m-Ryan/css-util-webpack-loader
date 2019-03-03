import loaderUtils from 'loader-utils';
import css from 'css';

export default function unitConversionLoader(source: string) {
	const options = loaderUtils.getOptions(this) as ICssRulesOptions;
	const parseCssObject = css.parse(source);
	parseCssObject.stylesheet.rules.forEach((rule) => {
		if (rule.type === 'rule') {
			(rule as css.Rule).declarations.forEach((declaration: css.Declaration) => {
				if (declaration.type === 'declaration') {
					declaration.value = conver(declaration.value, options);
				}
			});
		}

		if (rule.type === 'keyframes') {
			let keyframes = (rule as css.KeyFrames).keyframes;
			keyframes.forEach((item) => {
				if (item.type === 'keyframe') {
					let keyframe = item as css.KeyFrame;
					keyframe.declarations.forEach((declaration: css.Declaration) => {
						if (declaration.type === 'declaration') {
							declaration.value = conver(declaration.value, options);
						}
					});
				}
			});
		}

		if (rule.type === 'media') {
			let media = (rule as css.Media).rules;
			media.forEach((rule) => {
				if (rule.type === 'rule') {
					(rule as css.Rule).declarations.forEach((declaration: css.Declaration) => {
						if (declaration.type === 'declaration') {
							declaration.value = conver(declaration.value, options);
						}
					});
				}
			});
		}
	});

	return css.stringify(parseCssObject);
}

function conver(declaration: string, options: ICssRulesOptions) {
	const pattern = new RegExp(`\\b(\\d+(\\.\\d+)?)(${options.originUnit})\\b`, 'mig');
	return declaration.replace(pattern, function(group1: string, group2: string, group3: string, group4: string) {
		const newText = parseFloat((Number(group2) * options.times).toFixed(options.precision)) + options.replaceUnit;
		return newText;
	});
}

export interface ICssRulesOptions {
	originUnit: string;
	replaceUnit: string;
	precision: number;
	times: number;
}
