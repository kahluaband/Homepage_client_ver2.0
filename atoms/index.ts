import { atom } from 'recoil';

export const selectedYear = atom<string>({
  key: 'selectedYear',
  default: 'ALL',
});
