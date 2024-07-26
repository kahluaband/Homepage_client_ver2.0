'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import applicant_image from '@/public/image/admin/image.svg';
import { useState } from 'react';
import ApplicantCard from '@/components/admin/applicant/ApplicantCard';
import chevron_down_blue from '@/public/image/performance/chevron-down-blue.svg';
import { useRouter } from 'next/navigation';
import { authInstance } from '@/api/auth/axios';

interface ApplicantProps {
  id: number;
  name: string;
  phone_num: string;
  birth_date: string;
  gender: string;
  address: string;
  major: string;
  first_preference: string;
  second_preference: string;
}

const page = () => {
  const router = useRouter();
  const sessionArr = ['ALL', '보컬', '기타', '드럼', '베이스', '신디'];
  const [applicantList, setApplicantList] = useState<ApplicantProps[]>([]);
  const [session, setSession] = useState('ALL');

  const [showMore, setShowMore] = useState(false);
  const handleMore = () => {
    setShowMore(!showMore);
  };

  const fetchApplicantList = async () => {
    try {
      const response = await authInstance.get('/admin/apply');
      console.log(response.data);
      setApplicantList(response.data.result.applies);
    } catch (error) {
      console.log(error);
    }
  };

  // middleware로 수정 가능성
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      router.push('/login');
    }

    fetchApplicantList();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="font-pretendard w-full pt-[64px] flex flex-col items-center">
        <div className="w-full h-[259px] bg-gray-5 flex justify-between px-[360px]">
          <div className="flex flex-col mt-16">
            <span className="font-mustica text-[40px] text-gray-90 font-semibold leading-10 pb-[15px]">
              Applicant
            </span>
            <section className="flex gap-2 pb-10">
              <span className="font-pretendard text-2xl text-gray-90 font-semibold leading-9">
                24기 지원자 정보
              </span>
              {/* 데이터 연동 필요 */}
              <span className="font-pretendard text-2xl text-primary-50 font-semibold leading-9">
                00
              </span>
            </section>
            <section className="w-[504px] h-8 rounded-[32px] bg-gray-0">
              {sessionArr.map((sessionName) => (
                <div
                  key={sessionName}
                  onClick={() => {
                    setSession(sessionName);
                  }}
                  className={`${session === sessionName ? 'bg-primary-50' : 'bg-gray-0'} " w-[84px] inline-flex px-[12px] py-[4px] justify-center items-center gap-[10px] rounded-[32px] cursor-pointer "`}
                >
                  <span
                    key={sessionName}
                    className={`${session === sessionName ? 'text-gray-0' : 'text-gray-50'} " text-center font-pretendard text-[16px] font-medium leading-6 "`}
                  >
                    {sessionName}
                  </span>
                </div>
              ))}
            </section>
          </div>
          <Image src={applicant_image} alt="image" width={377} height={244} />
        </div>
        <div className="w-full h-full px-[360px] pt-8 grid grid-cols-3 gap-x-6 gap-y-10">
          {/* 카드 섹션 */}
          {applicantList.map((applicant) => (
            <ApplicantCard
              key={applicant.id}
              name={applicant.name}
              phone_num={applicant.phone_num}
              birth_date={applicant.birth_date}
              gender={applicant.gender}
              address={applicant.address}
              major={applicant.major}
              first_preference={applicant.first_preference}
              second_preference={applicant.second_preference}
            />
          ))}
        </div>

        <div onClick={handleMore} className="flex mt-16 gap-2 cursor-pointer">
          {showMore ? (
            <span className="text-primary-50 text-center text-lg font-medium">
              닫기
            </span>
          ) : (
            <span className="text-primary-50 text-center text-lg font-medium">
              더보기
            </span>
          )}
          {showMore ? (
            <Image
              style={{ transform: 'rotate(180deg)' }}
              src={chevron_down_blue}
              alt="more"
              width={16}
            />
          ) : (
            <Image src={chevron_down_blue} alt="more" width={16} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;