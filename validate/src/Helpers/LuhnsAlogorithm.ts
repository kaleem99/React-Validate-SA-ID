function luhnsAlgorithm(number: string): boolean {
  let str = number.split("");
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
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

interface DateParams {
  date: number;
  month: number; // Change to 'number' for month property
  year: number;
}

function isValidDate(date: number, month: number, year: number): boolean {
  month--; // Adjust month to 0-based index
  let daysInMonth = 0;

  if (month === 1) {
    daysInMonth =
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  } else if ([3, 5, 8, 10].includes(month)) {
    daysInMonth = 30;
  } else {
    daysInMonth = 31;
  }

  return month >= 0 && month < 12 && date > 0 && date <= daysInMonth;
}
function isValidGender(IDNumber: string): boolean {
  let counter: number = 0;
  const genderDigits: string = IDNumber.slice(6, 10);
  if (genderDigits >= "0000" && genderDigits <= "4999") {
    counter += 1;
  } else if (genderDigits >= "5000" && genderDigits <= "9999") {
    counter += 1;
  }
  return counter === 1;
}
function valididateCitizenOrResident(IDNumber: string): boolean {
  const citizen: string = IDNumber.slice(10, 11);
  let counter: number = 0;
  if (citizen === "0") {
    counter++;
  } else if (citizen === "1") {
    counter++;
  }
  return counter === 1;
}
function ValidateID(IDNumber: string): boolean {
  let counter = 0;
  let date = IDNumber.slice(0, 6);
  let d = parseInt(date.slice(4, 6));
  let m = parseInt(date.slice(2, 4));
  let y = parseInt(date.slice(0, 2));

  if (luhnsAlgorithm(IDNumber)) {
    counter++;
  }
  if (IDNumber.length === 13) {
    counter++;
  }
  if (isValidDate(d, m, y)) {
    counter++;
  }
  if (isValidGender(IDNumber)) {
    counter++;
  }
  if (valididateCitizenOrResident(IDNumber)) {
    counter++;
  }
  if (
    IDNumber[IDNumber.length - 3] === "1" ||
    IDNumber[IDNumber.length - 3] === "0"
  ) {
    counter++;
  }

  return counter === 6;
}

export { ValidateID };
