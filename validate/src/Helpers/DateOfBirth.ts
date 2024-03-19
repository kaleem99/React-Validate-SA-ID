const DateOfBirth = (IDNumber: string): string => {
  const getFullYear = new Date(IDNumber.slice(0, 2)).getFullYear();
  return getFullYear.toString();
};

export default DateOfBirth;
