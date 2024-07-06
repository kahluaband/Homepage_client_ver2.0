import React from 'react';

const YearCard = () => {
  const years = ['ALL', '2024', '2023', '2022', '2019', '2018', '2017', '2016'];

  return (
    <div className="absolute top-8 -left-12 grid grid-cols-4 bg-gray-0 p-3 mt-4 gap-3 rounded-2xl shadow-[0_0_24px_0px_rgba(27,28,35,0.25)]">
      {years.map((year) => (
        <div className="px-[12px] py-[4px] justify-center items-center gap-[10px] rounded-[32px] ">
          <p className="w-[60px] text-gray-50 justify-center items-center text-center font-pretendard text-base font-normal">
            {year}
          </p>
        </div>
      ))}
    </div>
  );
};

export default YearCard;
