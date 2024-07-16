'use client'

import * as React from 'react';
import Image from 'next/image';

interface twoOptionProps {
    option1: string;
    option2: string;
    seletion: (selected: string) => void;
    className: string;
}

const TwoOptionBox: React.FC<twoOptionProps> = ({ option1, option2, seletion, className } ) => {

    const [selected, setSelected] = React.useState<string>(option1);

    React.useEffect(() => {
        seletion(selected);
    }, [selected]);


    return (
    <div className='flex flex-row gap-4 pad:flex-col'>
        <div onClick={(e) => setSelected(option1)} className={`flex items-center justify-between px-4 h-12 w-[156px] pad:w-[282px] rounded-xl border ${selected === option1 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} ${className} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
            {option1}
            {selected === option1 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
        </div>
        <div onClick={(e) => setSelected(option2)} className={`mt-2 pad:mt-0 flex items-center justify-between px-4 h-12 w-[156px] pad:w-[282px] rounded-xl border ${selected === option2 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
            {option2}
            {selected === option2 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
        </div>
    </div>
    );
};    

export default TwoOptionBox;