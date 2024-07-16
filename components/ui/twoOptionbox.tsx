'use client'

import * as React from 'react';

interface twoOptionProps {
    option1: string;
    option2: string;
    seletion: (selected: string) => void;
}

const TwoOptionBox: React.FC<twoOptionProps> = ({ option1, option2, seletion } ) => {

    const [selected, setSelected] = React.useState<string>(option1);

    React.useEffect(() => {
        seletion(selected);
    }, [selected]);


    return (
    <div>
        <div onClick={(e) => setSelected(option1)} className={`mt-5 flex items-center justify-center w-[352px] h-14 border ${selected === option1 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} rounded-xl bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
            {option1}
        </div>
        <div onClick={(e) => setSelected(option2)} className={`mt-5 flex items-center justify-center w-[352px] h-14 border ${selected === option2 ? "border-primary-50 text-primary-50" : "border-gray-40 text-gray-90"} rounded-xl bg-gray-0 text-[16px] font-normal leading-6 text-center`}>
            {option2}
        </div>
    </div>
    );
};    

export default TwoOptionBox;