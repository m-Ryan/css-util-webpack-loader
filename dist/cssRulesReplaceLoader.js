"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = __importDefault(require("loader-utils"));
function cssRulesReplaceLoader(source) {
    var options = loader_utils_1.default.getOptions(this);
    options.rules.forEach(function (item) {
        item.originValues.forEach(function (value) {
            source = source.replace(new RegExp("\\b" + item.name + "\\s*:\\s*" + value + "\\b", 'mig'), item.name + ":" + item.replaceValue);
        });
    });
    return source;
}
exports.default = cssRulesReplaceLoader;
//# sourceMappingURL=cssRulesReplaceLoader.js.map