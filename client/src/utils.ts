const leadingZero = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export const transformDate = (str: string) => {
  const inputDate = new Date(str);
  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();
  const outputDateString = `${leadingZero(day)}.${leadingZero(
    month
  )}.${leadingZero(year)}`;
  return outputDateString;
};

export const transformDateTime = (str: string) => {
  let dateStr = "2019-04-25T11:14:15.000Z";
  let date = new Date(dateStr);
  let formattedDate = `${leadingZero(date.getUTCDate())}.${leadingZero(
    date.getUTCMonth() + 1
  )}.${date.getUTCFullYear()} в ${leadingZero(
    date.getUTCHours()
  )}.${leadingZero(date.getUTCMinutes())}`;
  return formattedDate;
};
