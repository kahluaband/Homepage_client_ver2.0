const ImageUpload = () => {
  return (
    <>
      <p className="text-gray-90 text-[20px] font-[400] leading-normal pad:mb-2 ph:mb-4">
        첨부파일 업로드<span className="ml-2">(0/5)</span>
      </p>
      <div className="w-full pad:h-[400px] ph:h-[328px] flex justify-center items-center mb-10">
        <div className="pad:h-[400px] ph:h-[328px] pad:w-[400px] ph:w-[328px] shadow-[0_0_0_1px_black] rounded-[12px] flex justify-center items-center">
          <div
            className="w-8 h-8 rounded-full bg-gray-10 flex justify-center items-center cursor-pointer"
            style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)' }}
          >
            <span className="text-gray-0 text-[24px] font-[500] leading-normal pb-1">
              +
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUpload;
