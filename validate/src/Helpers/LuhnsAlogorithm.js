"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateID = void 0;
function luhnsAlgorithm(number) {
    var str = number.split("");
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        var digit = parseInt(str[i]);
        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        result += digit;
    }
    return result % 10 === 0;
}
function isValidDate(date, month, year) {
    month--; // Adjust month to 0-based index
    var daysInMonth = 0;
    if (month === 1) {
        daysInMonth =
            (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    }
    else if ([3, 5, 8, 10].includes(month)) {
        daysInMonth = 30;
    }
    else {
        daysInMonth = 31;
    }
    return month >= 0 && month < 12 && date > 0 && date <= daysInMonth;
}
function ValidateID(IDNumber) {
    var counter = 0;
    var date = IDNumber.slice(0, 6);
    var d = parseInt(date.slice(4, 6));
    var m = parseInt(date.slice(2, 4));
    var y = parseInt(date.slice(0, 2));
    if (luhnsAlgorithm(IDNumber)) {
        counter++;
    }
    if (IDNumber.length === 13) {
        counter++;
    }
    if (isValidDate(d, m, y)) {
        counter++;
    }
    if (IDNumber[IDNumber.length - 3] === "1" ||
        IDNumber[IDNumber.length - 3] === "0") {
        counter++;
    }
    return counter === 4;
}
exports.ValidateID = ValidateID;
