import { useEffect, useRef } from 'react';
import React from 'react';
import Image from 'next/image';

interface LocationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const apikey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
    const loc = "서울 마포구 와우산로18길 20 지하 1층";
    const mapContainerRef = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    function copyLocation() {
        navigator.clipboard.writeText(loc).then(() => {
          alert("주소 복사되었습니다!");
        });
    }

    useEffect(() => {
        if (!isOpen || !mapContainerRef.current) return;

        const script = document.createElement("script");
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}&autoload=false`;
        script.async = true;

        const handleScriptLoad = () => {
            window.kakao.maps.load(() => {
                const container = mapContainerRef.current;
                if (!container) return;

                const options = {
                    center: new window.kakao.maps.LatLng(
                        37.55099593968109,
                        126.92401144435387
                    ),
                    level: 3,
                };

                const map = new window.kakao.maps.Map(container, options);

                const markerPosition = new window.kakao.maps.LatLng(
                    37.55099593968109,
                    126.92401144435387
                );

                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    map: map,
                    draggable: true,
                });

                window.kakao.maps.event.addListener(marker, "click", function () {
                    window.open("https://place.map.kakao.com/23696074", "_blank");
                });

                marker.setMap(map);
                marker.setDraggable(true);
            });
        };

        script.onload = handleScriptLoad;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [isOpen]);


    return (
        <div onClick={handleOverlayClick} className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-[#0000008a] flex justify-center items-center">
            <div className="fixed flex flex-col rounded-3xl w-[652px] h-[515px] z-50 bg-gray-0">
                <div className='w-full h-[76px] rounded-t-3xl bg-gray-80 text-gray-0 items-center flex px-8'>
                    <p className='text-[24px] font-semibold leading-9 w-[110px]'>공연장 위치</p>
                    <Image src="/image/tabler_x.svg" width={24} height={24} alt="X" onClick={onClose} className='ml-auto cursor-pointer' />
                </div>
                <div className='px-8 py-6 flex flex-col'>
                    <div className='flex flex-row gap-3'>
                        <p className='text-[20px] font-medium leading-[30px] text-gray-90 text-center w-[242px] whitespace-nowrap truncate'>{loc}</p>
                        <div onClick={copyLocation} className='flex flex-row items-center gap-1'>
                            <Image src="/image/ticket/copy.svg" width={20} height={20} alt="copy"/>
                            <p className='text-gray-40 font-medium text-[16px] leading-6'>복사</p>
                        </div>
                    </div>
                    <div ref={mapContainerRef} id="map" className="mt-4 w-[588px] h-[345px] rounded-xl flex-shrink-0 z-10 bottom-0"/>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;
