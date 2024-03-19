"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckGender = function (number) {
    var newNum = number.slice(6, 10);
    if (newNum >= "0000" && newNum <= "4999") {
        return "Female";
    }
    else if (newNum >= "5000" && newNum <= "9999") {
        return "Male";
    }
    return "Invalid";
};
// console.log(CheckGender("9908195163089"))

exports.default = CheckGender;
