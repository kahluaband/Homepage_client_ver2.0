interface TicketInfo {
  name: string;
  price: string;
  maxQuantity: number;
}

interface Tickets {
  freshman: TicketInfo;
  general: TicketInfo;
}

interface Information {
  title: string;
  location: string;
  locationDetails: string;
  dateForString: string;
  dateForMinute: string;
  subDate: string;
  eventDate: Date;
  lastReserveDate: Date;
  isFreshmanFree: boolean;
  tickets: Tickets;
  day: string;
  time: string;
}

// Function to format date in the "2024년 3월 1일 18시 00분" format
const formatDateForString = (date: Date): string =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시`;

const formatDay= (date: Date): string =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

const formatTime= (date: Date): string =>
  `${date.getHours()}시 ${String(date.getMinutes()).padStart(2, '0')}분`;

const formatDateForMinute = (date: Date): string =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${String(date.getMinutes()).padStart(2, '0')}분`;

const formatSubDate = (date: Date): string => {
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${dayOfWeek} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

// Define base dates
const baseEventDate = new Date('2024-09-02T18:00:00+09:00');
const lastReserveDate = new Date('2024-09-01T00:00:00+09:00');

// Information object
export const information: Information = {
  title: "2024년 9월 정기 공연",
  location: "001 클럽",
  locationDetails: "서울 마포구 와우산로18길 20 지하 1층",
  dateForString: formatDateForString(baseEventDate),
  dateForMinute: formatDateForMinute(baseEventDate),
  day: formatDay(baseEventDate),
  time: formatTime(baseEventDate),
  subDate: formatSubDate(baseEventDate),
  eventDate: baseEventDate,
  lastReserveDate: lastReserveDate,
  isFreshmanFree: false,
  tickets: {
    freshman: {
      name: "신입생 티켓",
      price: "무료",
      maxQuantity: 1
    },
    general: {
      name: "일반 티켓",
      price: "5,000원",
      maxQuantity: 5
    }
  }
};
