interface OptionProps {
  option: string;
}

const OptionBox: React.FC<OptionProps> = ({ option }) => {
  return (
    <div className="mt-5 flex items-center justify-center w-[352px] h-14 border border-primary-50 rounded-xl bg-gray-0 text-primary-50 text-[16px] font-normal leading-6 text-center">
      {option}
    </div>
  );
};

export default OptionBox;
