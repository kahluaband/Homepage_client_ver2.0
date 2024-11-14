import { InputFieldType } from '@/components/ui/admin/type';

export const recruitingInfoList: InputFieldType[] = [
  {
    title: '기수',
    label: 'generation',
    type: 'text',
    required: true,
    inputType: 'text',
  },
  {
    title: '모집 시작일',
    label: 'recruiting_start',
    type: 'datetime',
    required: true,
  },
  {
    title: '모집 마감일',
    label: 'recruiting_deadline',
    type: 'datetime',
    required: true,
  },
  {
    title: '보컬 모집 마감일',
    label: 'vocal_deadline',
    type: 'datetime',
    required: true,
  },
  {
    title: '면접일',
    label: 'meeting',
    type: 'datetime',
    required: true,
  },
  {
    title: '뒷풀이 날짜',
    label: 'after_party',
    type: 'datetime',
    required: true,
  },
  {
    title: '최종 합격 발표일',
    label: 'announcement',
    type: 'datetime',
    required: true,
  },
  {
    title: '활동 기한',
    label: 'activity',
    type: 'datetime',
    required: true,
  },
];

export const defaultData = {
  generation: '',
  recruiting_start: '2022-04-17T15:30',
  recruiting_deadline: '2022-04-17T15:30',
  vocal_deadline: '2022-04-17T15:30',
  meeting: '2022-04-17T15:30',
  after_party: '2022-04-17T15:30',
  announcement: '2022-04-17T15:30',
  activity: '2022-04-17T15:30',
};
