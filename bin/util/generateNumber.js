"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateNumber = function (size) {
    if (size === void 0) { size = 1; }
    return new Array(size)
        .fill(0, 0, size)
        .map(function (_) { return Math.floor(Math.random() * 10); })
        .join("");
};
exports.default = generateNumber;
//# sourceMappingURL=generateNumber.js.map