const CheckGender = (number: string): string => {
  const newNum = number.slice(6, 10);
  if (newNum >= "0000" && newNum <= "4999") {
    return "Female";
  } else if (newNum >= "5000" && newNum <= "9999") {
    return "Male";
  }
  return "Invalid";
};
export default CheckGender;
