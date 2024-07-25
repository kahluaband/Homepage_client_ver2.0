"use client"
import TicketOption from "@/components/templates/ticket/TicketOption";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const apikey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const page = () => {
  const [nowUrl, setNowUrl] = useState("");
  const [isDays, setIsDays] = useState(true);

  useEffect(() => {
    setNowUrl(window.location.href);
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        /*
                공연 위치 설정
                */
        const options = {
          center: new window.kakao.maps.LatLng(
            37.55099593968109,
            126.92401144435387
          ),
        };

        const map = new window.kakao.maps.Map(container, {
          ...options,
          level: 3,
        });

        const markerPosition = new window.kakao.maps.LatLng(
          37.55099593968109,
          126.92401144435387
        );

        const createMarker = (map: string) => {
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            map: map,
            draggable: true,
          });

          window.kakao.maps.event.addListener(marker, "click", function () {
            window.open("https://place.map.kakao.com/23696074", "_blank");
          });

          return marker;
        };

        const marker = createMarker(map);
        marker.setMap(map);
        marker.setDraggable(true);
      });
    };
  }, []);

  useEffect(() => {
    const checkEventStatus = () => {
      const eventDate = new Date('2024-09-05T00:00:00+09:00');
      const nowDate = new Date();

      const nowKoreanTime = new Date(
        nowDate.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
      );

      setIsDays(nowKoreanTime < eventDate);
    };

    checkEventStatus();
    const interval = setInterval(checkEventStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  function copyUrl() {
    navigator.clipboard.writeText(nowUrl).then((res) => {
      alert("링크가 복사되었습니다!");
    });
  }

  return (
  <div className="flex relative flex-col top-16 h-[1100px] w-[1200px] mx-auto">
    <div className="flex flex-row mt-8 h-[376px] justify-center"> 
      <Image src="image/ticket/Poster.svg" alt="포스터사진" width={282} height={376} className="flex flex-shrink-0 rounded-xl"/>
      <div className="flex flex-col mt-2 ml-8">
        <div className={`inline-flex rounded-[32px] gap-2.5 items-center justify-center py-1 px-3 w-[84px] h-8
        ${isDays?"bg-primary-50 text-gray-0":"bg-gray-10 text-gray-50"}`}>{isDays?"예매 가능":"예매 마감"}</div>
        <div className="mt-4 gap-4 flex flex-row">
          <p className="w-[217px] h-9 text-gray-90 font-semibold leading-9 text-[24px]">2024년 3월 정기 공연</p>
          <div onClick={copyUrl} className="flex flex-col justify-center">
            <Image src="image/ticket/share.svg" alt="share" width={24} height={24} className="cursor-pointer"/>
          </div>
        </div>
        <div className="flex flex-row mt-6 text-[18px] leading-9 font-normal gap-6 h-7">
          <p className="text-gray-40 w-8">장소</p>
          <p className="text-gray-90 w-[65px]">001 클럽</p>
        </div>
        <div className="flex flex-row mt-6 text-[18px] leading-9 font-normal gap-6 h-7">
          <p className="text-gray-40 w-8">일시</p>
          <p className="text-gray-90 w-40">2024년 3월 1일 18시</p>
        </div>
        <div className="flex flex-row mt-6 text-[18px] leading-9 font-normal">
          <p className="text-gray-40 w-8 h-7">가격</p>
          <div className="ml-6 flex flex-col">
            <div className="flex flex-row items-start h-7">
              <p className="text-gray-90 w-[83px] ">신입생 티켓</p>
              <p className="text-primary-50 w-8  ml-6 font-semibold">무료</p>
              <p className="text-gray-40 text-[14px] font-normal ml-2 flex justify-center w-[68px]">1인 최대 1매</p>
            </div>
            <div className="flex flex-row items-start h-7 mt-5">
              <p className="text-gray-90 w-[67px]">일반 티켓</p>
              <p className="text-primary-50 w-[66px] ml-10 font-semibold">5,000원</p>
              <p className="text-gray-40 text-[14px] font-normal ml-2 flex justify-center w-[70px]">1인 최대 5매</p>
            </div>
          </div>
        </div>
        <Link href="ticket/search/" className="ml-[56px] mt-[24px] w-[280px] h-[60px] flex flex-shrink-0 text-center items-center justify-center text-gray-0 bg-primary-50 rounded-xl text-[18px] font-medium">예매 조회/취소</Link>
      </div>
      <div className="ml-[164px] mt-[120px] h-[282px]">
        <p className="text-[18px] font-medium left-9 text-gray-70 h-[27px]">공연장 위치</p>
        <div id="map" className="mt-2 w-[384px] h-[225px] rounded-xl flex-shrink-0 z-0 bottom-0"/>
      </div>
    </div>
    <div className="w-[1200px] h-[1px] bg-gray-15 flex flex-shrink-0 mt-10"/> 
    <TicketOption  isDays={isDays} />
  </div>
  );
};

export default page;
