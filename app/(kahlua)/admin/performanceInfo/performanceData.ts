import { InputFieldType } from '@/components/ui/admin/type';

export const performanceInfoList: InputFieldType[] = [
  {
    title: '공연 제목',
    label: 'title',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    title: '장소',
    label: 'venue',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    title: '장소',
    label: 'address',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    title: '일시',
    label: 'dateTime',
    type: 'datetime',
    required: true,
  },
  {
    title: '예매 시작일',
    label: 'bookingStartDate',
    type: 'datetime',
    required: true,
  },
  {
    title: '예매 마감일',
    label: 'bookingEndDate',
    type: 'datetime',
    required: true,
  },
];

export const defaultData = {
  // [todo] api 연결
  title: '2024년 9월 정기 공연',
  venue: '001 클럽',
  address: '서울 마포구 월드컵북로2길 49',
  dateTime: '2022-04-17T15:30',
  bookingStartDate: '2022-04-17T15:30',
  bookingEndDate: '2022-04-17T15:30',
};
