import loaderUtils from 'loader-utils';
import fs from 'fs';
let globalSassFile = '';

export default function globalSassLoader(source: string) {
	const options = loaderUtils.getOptions(this) as ICssRulesOptions;
	const { filePaths } = options;
	globalSassFile =
		globalSassFile || filePaths.map((filePath) => fs.readFileSync(filePath, { encoding: 'utf8' })).join('\n');
	source = globalSassFile + '\n' + source;

	return source;
}

export interface ICssRulesOptions {
	filePaths: string[];
}

export interface IVarOption {
	[key: string]: string;
}
