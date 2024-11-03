import React, { useEffect, useRef, useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState<string[]>([]);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map(
        (file) => URL.createObjectURL(file) // 이미지 미리 볼 수 있게
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  // 스크롤바 유무 감지
  useEffect(() => {
    const checkScrollbar = () => {
      if (containerRef.current) {
        const hasScroll =
          containerRef.current.scrollWidth > containerRef.current.clientWidth;
        setHasScrollbar(hasScroll);
      }
    };

    checkScrollbar();

    // 이미지가 변경될 때마다 스크롤바 상태 확인
    window.addEventListener('resize', checkScrollbar);
    return () => window.removeEventListener('resize', checkScrollbar);
  }, [images]);

  return (
    <div className="mb-10">
      <p className="text-gray-90 text-[20px] font-[400] leading-normal pad:mb-2 ph:mb-4">
        첨부파일 업로드<span className="ml-2">({images.length}/5)</span>
      </p>

      {/* container */}
      <div ref={containerRef} className="mt-2 overflow-x-auto w-full">
        <div
          className={`flex ${
            images.length === 0 ? 'justify-center' : 'space-x-4'
          } ${hasScrollbar ? 'pb-[10px]' : ''}`}
        >
          {/* 이미지 */}
          {images.map((image, index) => (
            <div
              key={index}
              className="pad:w-[300px] ph:w-[234px] pad:h-[400px] ph:h-[328px] rounded-[12px] flex justify-center items-center overflow-hidden flex-shrink-0"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 1)' }}
            >
              <img
                src={image}
                alt={`uploaded-${index}`}
                className="pad:w-[298px] ph:w-[232px] pad:h-[398px] ph:h-[326px] object-cover rounded-[11px]"
              />
            </div>
          ))}

          {/* 추가버튼 box */}
          {images.length < 5 && (
            <label
              className="pad:w-[400px] ph:w-[328px] pad:h-[400px] ph:h-[328px] rounded-[12px] flex justify-center items-center cursor-pointer flex-shrink-0"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 1)' }}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div
                className="w-8 h-8 rounded-full bg-gray-10 flex justify-center items-center"
                style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
              >
                <span className="text-gray-0 text-[24px] font-[500] leading-normal pb-1">
                  +
                </span>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
