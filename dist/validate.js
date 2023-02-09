"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const regex_1 = __importDefault(require("./regex"));
exports.validate = (uuid) => {
    return typeof uuid === 'string' && regex_1.default.test(uuid);
};
//# sourceMappingURL=validate.js.map