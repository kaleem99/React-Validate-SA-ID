function validateSAID(idNumber) {
  // Check if the ID number is in the correct format
  const idPattern = /^\d{13}$/;
  if (!idPattern.test(idNumber)) {
    return false; // ID number format is invalid
  }

  // Extract birthdate information from the ID number
  const year = parseInt(idNumber.substr(0, 2), 10);
  const month = parseInt(idNumber.substr(2, 2), 10);
  const day = parseInt(idNumber.substr(4, 2), 10);
  const fullYear = year < 22 ? 2000 + year : 1900 + year; // Adjust the year for 2000+
  const birthdate = new Date(fullYear, month - 1, day);

  // Check if the birthdate is valid
  if (
    isNaN(birthdate.getTime()) || // Invalid date
    birthdate.getFullYear() !== fullYear || // Year doesn't match
    birthdate.getMonth() + 1 !== month || // Month doesn't match
    birthdate.getDate() !== day // Day doesn't match
  ) {
    return false;
  }

  // Check if the birthdate is not in the future
  const currentDate = new Date();
  if (birthdate > currentDate) {
    return false;
  }

  // Check if the birthdate is not too far in the past (adjust as needed)
  const minValidDate = new Date();
  minValidDate.setFullYear(minValidDate.getFullYear() - 150); // Example: consider IDs for individuals up to 150 years old
  if (birthdate < minValidDate) {
    return false;
  }

  // ID number is valid
  return true;
}

// Example usage:
const idNumber1 = "9908195173089"; // Replace with an actual ID number
if (validateSAID(idNumber1)) {
  console.log("ID number is valid.");
} else {
  console.log("Invalid ID number.");
}
