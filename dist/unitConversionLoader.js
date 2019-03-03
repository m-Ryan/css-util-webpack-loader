"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = __importDefault(require("loader-utils"));
function unitConversionLoader(source) {
    var options = loader_utils_1.default.getOptions(this);
    var pattern = new RegExp("\\b(\\d+(\\.\\d+)?)(" + options.originUnit + ")\\b", 'mig');
    source = source.replace(pattern, function (group1, group2, group3, group4) {
        var newText = parseFloat((Number(group2) * options.times).toFixed(options.precision)) + options.replaceUnit;
        return newText;
    });
    return source;
}
exports.default = unitConversionLoader;
//# sourceMappingURL=unitConversionLoader.js.map