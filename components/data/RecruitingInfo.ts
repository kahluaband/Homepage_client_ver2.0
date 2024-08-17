interface recruitingInformation {
  num: string;
  recruitingStartDate: Date;
  recruitingFinishDate: Date;
  vocalApplyingDue: Date;
  audition: Date;
  afterParty: Date;
  announcementDate: Date;
  activityPeriod: Date;
}

// ex. 23
export const getOnlyNum = (str: string) => {
  const regex = /[^0-9]/g;
  const result = str.replace(regex, '');
  return result;
};

// ex. 2024
export const formatYear = (date: Date): string => `${date.getFullYear()}`;

// ex. 03
export const formatMonth = (date: Date): string =>
  `${('0' + (date.getMonth() + 1)).slice(-2)}`;

// ex. 22
export const formatDay = (date: Date): string =>
  `${('0' + date.getDate()).slice(-2)}`;

// ex. FRI
export const formatDayofWeek = (date: Date) => {
  const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT');
  const dayOfWeek = date.getDay();
  return week[dayOfWeek];
};

// ex. 2024.03.11 FRI
export const formatFullDate = (date: Date): string =>
  `${formatYear(date)}.${formatMonth(date)}.${formatDay(date)} ${formatDayofWeek(date)}`;

// ex. 03.11 FRI
export const formatMonthToDate = (date: Date): string =>
  `${formatMonth(date)}.${formatDay(date)} ${formatDayofWeek(date)}`;

// ex. 16
export const formatHour = (date: Date): string => `${date.getHours()}`;

// ex. 59
export const formatMinute = (date: Date): string =>
  `${String(date.getMinutes()).padStart(2, '0')}`;

// ex. 16:59
export const formatTime = (date: Date): string =>
  `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

export const Recruiting23rd: recruitingInformation = {
  num: '23rd',
  recruitingStartDate: new Date('2024-03-01T00:00:00+09:00'),
  recruitingFinishDate: new Date('2024-03-07T23:59:00+09:00'),
  vocalApplyingDue: new Date('2024-03-08T23:59:00+09:00'),
  audition: new Date('2024-03-11T16:00:00+09:00'),
  afterParty: new Date('2024-03-11T19:00:00+09:00'),
  announcementDate: new Date('2024-03-15T10:00:00+09:00'),
  activityPeriod: new Date('2026-09-01T18:00:00+09:00'),
};
