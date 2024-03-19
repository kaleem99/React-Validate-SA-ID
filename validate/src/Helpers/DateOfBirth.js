"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateOfBirth = function (IDNumber) {
    var getFullYear = new Date(IDNumber.slice(0, 2)).getFullYear();
    return getFullYear.toString();
};
exports.default = DateOfBirth;
