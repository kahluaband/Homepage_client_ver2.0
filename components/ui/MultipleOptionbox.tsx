'use client'

import * as React from 'react';
import Image from 'next/image';

interface multipleOptionProps {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    option5: string;
    seletion: (selected: string) => void;
    className: string;
}

const MultipleOptionBox: React.FC<multipleOptionProps> = ({ option1, option2, option3, option4, option5, seletion, className } ) => {

    const [selected, setSelected] = React.useState<string>(option1);

    React.useEffect(() => {
        seletion(selected);
    }, [selected]);


    return (
        <div>
            <div className={`flex flex-col gap-6 pad:flex-row ${className}`}>
                <div onClick={(e) => setSelected(option1)} className={`flex items-center justify-between px-4 h-12 w-[180px] rounded-xl border ${selected === option1 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
                    {option1}
                    {selected === option1 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
                </div>
                <div onClick={(e) => setSelected(option2)} className={`pad:mt-0 flex items-center justify-between px-4 h-12 w-[180px] rounded-xl border ${selected === option2 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
                    {option2}
                    {selected === option2 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
                </div>
                <div onClick={(e) => setSelected(option3)} className={`pad:mt-0 flex items-center justify-between px-4 h-12 w-[180px] rounded-xl border ${selected === option3 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
                    {option3}
                    {selected === option3 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
                </div>
            </div>
            <div className='flex flex-col gap-6 pad:flex-row mt-6'>
                <div onClick={(e) => setSelected(option4)} className={`pad:mt-0 flex items-center justify-between px-4 h-12 w-[180px] rounded-xl border ${selected === option4 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
                    {option4}
                    {selected === option4 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
                </div>
                <div onClick={(e) => setSelected(option5)} className={`pad:mt-0 flex items-center justify-between px-4 h-12 w-[180px] rounded-xl border ${selected === option5 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
                    {option5}
                    {selected === option5 && <Image src="/image/ticket/check.svg" width={20} height={20} alt={"text"} className=""/>}
                </div>
            </div>
        </div>
    );
};    

export default MultipleOptionBox;