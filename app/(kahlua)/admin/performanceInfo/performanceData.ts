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
    label: 'location',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    title: '일시',
    label: 'event_date',
    type: 'datetime',
    required: true,
  },
  {
    title: '예매 시작일',
    label: 'reservation_start',
    type: 'datetime',
    required: true,
  },
  {
    title: '예매 마감일',
    label: 'reservation_dealine',
    type: 'datetime',
    required: true,
  },
];

export const defaultData = {
  // [todo] api 연결
  title: '2024년 9월 정기 공연',
  location: '001 클럽',
  event_date: '2022-04-17T15:30',
  reservation_start: '2022-04-17T15:30',
  reservation_dealine: '2022-04-17T15:30',
};
