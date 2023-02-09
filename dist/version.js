"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const validate_1 = require("./validate");
exports.version = (uuid) => {
    if (!validate_1.validate(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
};
//# sourceMappingURL=version.js.map