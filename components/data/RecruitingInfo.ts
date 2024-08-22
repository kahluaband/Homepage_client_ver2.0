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

// 문자열에서 숫자만 추출 (ex. 23)
export const getOnlyNum = (str: string) => {
  const regex = /[^0-9]/g;
  const result = str.replace(regex, '');
  return result;
};

// 년도 네자리로 추출 (ex. 2024)
export const formatYear = (date: Date): string => `${date.getFullYear()}`;

// 월 두자리로 추출 (ex. 03)
export const formatMonth = (date: Date): string =>
  `${('0' + (date.getMonth() + 1)).slice(-2)}`;

// 일 두자리로 추출 (ex. 22)
export const formatDay = (date: Date): string =>
  `${('0' + date.getDate()).slice(-2)}`;

// 요일 영어로 추출 (ex. FRI)
export const formatDayofWeek = (date: Date) => {
  const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT');
  const dayOfWeek = date.getDay();
  return week[dayOfWeek];
};

// 년도부터 요일까지 (ex. 2024.03.11 FRI)
export const formatFullDate = (date: Date): string =>
  `${formatYear(date)}.${formatMonth(date)}.${formatDay(date)} ${formatDayofWeek(date)}`;

// 월부터 요일까지 (ex. 03.11 FRI)
export const formatMonthToDate = (date: Date): string =>
  `${formatMonth(date)}.${formatDay(date)} ${formatDayofWeek(date)}`;

// 시간 추출 (ex. 16)
export const formatHour = (date: Date): string => `${date.getHours()}`;

// 분 추출 (ex. 59)
export const formatMinute = (date: Date): string =>
  `${String(date.getMinutes()).padStart(2, '0')}`;

// 시간 전체 (ex. 16:59)
export const formatTime = (date: Date): string =>
  `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

export const recruitingInfo = (
  num: string,
  startDate: string,
  finishDate: string,
  vocalDue: string,
  auditionDate: string,
  afterPartyDate: string,
  announcementDate: string,
  activityPeriodDate: string
): recruitingInformation => {
  return {
    num: num,
    recruitingStartDate: new Date(startDate),
    recruitingFinishDate: new Date(finishDate),
    vocalApplyingDue: new Date(vocalDue),
    audition: new Date(auditionDate),
    afterParty: new Date(afterPartyDate),
    announcementDate: new Date(announcementDate),
    activityPeriod: new Date(activityPeriodDate),
  };
};

const dynamicRecruitingInfo = recruitingInfo(
  '23rd',
  '2024-03-01T00:00:00+09:00', // 모집 시작일
  '2024-03-07T23:59:00+09:00', // 모집 마감일
  '2024-03-08T23:59:00+09:00', // 보컬 지원 마감일
  '2024-03-11T16:00:00+09:00', // 면접 날짜
  '2024-03-11T19:00:00+09:00', // 면접 후 모임 날짜
  '2024-03-15T10:00:00+09:00', // 발표 날짜
  '2026-09-01T18:00:00+09:00' // 활동 기간
);

export const Recruiting23rd: recruitingInformation = dynamicRecruitingInfo;
