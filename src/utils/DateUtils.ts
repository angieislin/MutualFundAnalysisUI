export function getFormattedDate(date) {
  const year = date.getFullYear(); 
  const month = date.getMonth() + 1; 
  const day = date.getDate(); 


  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  
  return `${year}-${formattedMonth}-${formattedDay}`;
}
export const OneMonthMillSecond = 30 * 24 * 60 * 60 * 1000;
 
export function getOneMonthAgoDate(date) {
  const millSecond = date.getTime() - 1 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}
export function getThreeMonthAgoDate(date) {
  const millSecond = date.getTime() - 3 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}

export function getSixMonthAgoDate(date) {
  const millSecond = date.getTime() - 6 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}

export function getOneYearAgoDate(date) {
  const millSecond = date.getTime() - 12 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}
 
export function getThreeYearAgoDate(date) {
  const millSecond = date.getTime() - 36 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}

 
export function getFiveYearAgoDate(date) {
  const millSecond = date.getTime() - 60 * OneMonthMillSecond;
  return getFormattedDate(new Date(millSecond));
}

export function getFirstDateThisYear(date) {
  const newDate = new Date(date.getTime());
  newDate.setMonth(0);
  newDate.setDate(0);
  return getFormattedDate(newDate);
}

 
 