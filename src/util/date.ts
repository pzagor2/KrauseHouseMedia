export const getMonthFromIndex = (index: number): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[index];
};

export const dateObjectToString = (date: Date): string => {
  const day = date.getDate();
  const month = getMonthFromIndex(date.getMonth());
  const year = date.getFullYear();
  return `${month.substring(0, 3)} ${day}, ${year}`;
};
