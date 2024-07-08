'use client'
import { Input } from "@/components/ui/input";

interface InfoTemplateProps {
  role: string;
  handleBuyerChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNamesArrayChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhonesArrayChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InfoTemplate: React.FC<InfoTemplateProps> = ({
  role,
  handleBuyerChange,
  handleNamesArrayChange,
  handlePhoneChange,
  handlePhonesArrayChange
}) => {

  return (
    <div>
      <p className="mt-6 text-[16px] font-normal leading-6">{role}</p>
      <div className='flex flex-row mt-2 gap-6'>
        <Input type="text" placeholder="이름" />
        <Input type="text" placeholder="전화번호 -없이 입력" />
      </div>
    </div>
  );
};

export default InfoTemplate;
