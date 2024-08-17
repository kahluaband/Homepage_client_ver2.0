import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'KAHLUA BAND',
    short_name: 'KAHLUA BAND',
    description: '안녕하세요 홍익대학교 컴퓨터공학과 밴드부 Kahlua 입니다!',
    start_url: '/',
  };
}
