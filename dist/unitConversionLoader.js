"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = __importDefault(require("loader-utils"));
var css_1 = __importDefault(require("css"));
function unitConversionLoader(source) {
    var options = loader_utils_1.default.getOptions(this);
    var parseCssObject = css_1.default.parse(source);
    parseCssObject.stylesheet.rules.forEach(function (rule) {
        if (rule.type === 'rule') {
            rule.declarations.forEach(function (declaration) {
                if (declaration.type === 'declaration') {
                    declaration.value = conver(declaration.value, options);
                }
            });
        }
        if (rule.type === 'keyframes') {
            var keyframes = rule.keyframes;
            keyframes.forEach(function (item) {
                if (item.type === 'keyframe') {
                    var keyframe = item;
                    keyframe.declarations.forEach(function (declaration) {
                        if (declaration.type === 'declaration') {
                            declaration.value = conver(declaration.value, options);
                        }
                    });
                }
            });
        }
        if (rule.type === 'media') {
            var media = rule.rules;
            media.forEach(function (rule) {
                if (rule.type === 'rule') {
                    rule.declarations.forEach(function (declaration) {
                        if (declaration.type === 'declaration') {
                            declaration.value = conver(declaration.value, options);
                        }
                    });
                }
            });
        }
    });
    return css_1.default.stringify(parseCssObject);
}
exports.default = unitConversionLoader;
function conver(declaration, options) {
    var pattern = new RegExp("\\b(\\d+(\\.\\d+)?)(" + options.originUnit + ")\\b", 'mig');
    return declaration.replace(pattern, function (group1, group2, group3, group4) {
        var newText = parseFloat((Number(group2) * options.times).toFixed(options.precision)) + options.replaceUnit;
        return newText;
    });
}
//# sourceMappingURL=unitConversionLoader.js.map