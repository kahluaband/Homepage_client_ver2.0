import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DropdownMenu from '../DropdownMenu';

interface MemberRowProps {
  member: any;
  index: number;
  openIndex: number | null;
  dropdownPosition: { top: number; left: number };
  toggleDropdown: (
    index: number,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
  handleSelectGrade: (index: number, userType: string) => void;
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
}

const MemberRow = ({
  member,
  index,
  openIndex,
  dropdownPosition,
  toggleDropdown,
  handleSelectGrade,
  dropdownRef,
}: MemberRowProps) => {
  return (
    <div
      className={`w-full px-4 max-dt:px-2 max-pad:px-2 py-4 max-pad:py-[10px] flex items-center justify-around
      border-gray-10 border-solid ${index === 8 ? 'border-b-0' : 'border-b-[2px]'}`}
    >
      <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-pad:min-w-[40px] text-center">
        {member.term}기
      </div>
      <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-pad:min-w-[60px] text-center">
        {member.name}
      </div>
      <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm w-[160px] max-pad:w-[100px] max-[400px]:w-[60px] text-center truncate">
        {typeof window !== 'undefined' &&
        window.innerWidth <= 400 &&
        member.session === 'SYNTHESIZER'
          ? 'SYNTH'
          : member.session}
      </div>
      <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[140px] max-dt:min-w-[120px] max-pad:hidden text-center">
        {member.loginType}
      </div>
      <div className="text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[100px] max-dt:min-w-[120px] max-pad:min-w-[58px] text-center">
        {member.approvalStatus === 'APPROVED' ? '완료' : '대기'}
      </div>

      {/* 드롭다운 트리거 */}
      <div
        className="cursor-pointer dropdown-trigger text-2xl font-semibold max-dt:text-[20px] max-pad:text-sm min-w-[200px] max-dt:min-w-[160px] max-pad:min-w-[90px] flex items-center justify-center gap-[7px] relative"
        onClick={(e) => toggleDropdown(index, e)}
        onDoubleClick={(e) => toggleDropdown(index, e)}
      >
        <span>{member.userType}</span>
        <ExpandMoreIcon
          className={`cursor-pointer ${openIndex === index ? 'rotate-180' : ''} max-pad:hidden`}
        />
      </div>

      {/* 드롭다운 메뉴 */}
      {openIndex === index && (
        <DropdownMenu
          ref={(el) => {
            dropdownRef.current = el;
          }}
          isOpen={true}
          position={dropdownPosition}
          options={['KAHLUA', 'ADMIN', 'UNACCEPTED']}
          onSelect={(newGrade) => handleSelectGrade(index, newGrade)}
        />
      )}
    </div>
  );
};

export default MemberRow;
