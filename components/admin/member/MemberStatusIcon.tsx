import Image from 'next/image';

interface MemberStatusIconProps {
  icon: string;
  alt: string;
  label: string;
  count: number;
}

const MemberStatusIcon = ({
  icon,
  alt,
  label,
  count,
}: MemberStatusIconProps) => {
  return (
    <div className="flex items-center gap-8 max-dt:gap-[21px]">
      <Image
        src={icon}
        alt={alt}
        width={113}
        height={113}
        className="w-[113px] h-[113px] max-pad:w-[100px] max-pad:h-[100px]"
        priority
      />
      <div className="flex flex-col items-center h-[78px]">
        <span className="text-2xl font-semibold h-9">{label}</span>
        <div className="flex h-12 items-center">
          <span className="text-[32px] font-semibold">{count}</span>
          <span className="text-2xl font-semibold relative translate-y-[3.5px]">
            &nbsp;건
          </span>
        </div>
      </div>
    </div>
  );
};

export default MemberStatusIcon;
