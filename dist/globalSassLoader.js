"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = __importDefault(require("loader-utils"));
var fs_1 = __importDefault(require("fs"));
var globalSassFile = '';
function globalSassLoader(source) {
    var options = loader_utils_1.default.getOptions(this);
    var filePaths = options.filePaths;
    globalSassFile =
        globalSassFile || filePaths.map(function (filePath) { return fs_1.default.readFileSync(filePath, { encoding: 'utf8' }); }).join('\n');
    source = globalSassFile + '\n' + source;
    return source;
}
exports.default = globalSassLoader;
//# sourceMappingURL=globalSassLoader.js.map