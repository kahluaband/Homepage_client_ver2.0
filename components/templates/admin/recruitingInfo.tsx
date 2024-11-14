import AdminInputBox from '@/components/admin/AdminInputBox';
import Text from '@/components/ui/admin/TextBox';

interface RecruitingInfoProps {
  onInfoChange: (info: {
    generation: BigInteger;
    recruitingStartDate: Date;
    recruitingDeadline: Date;
    vocalDeadline: Date;
    applyDeadline: Date;
    meeting: Date;
    afterParty: Date;
    announcementDate: Date;
    activePeriod: Date;
  }) => void;
  Info: {
    generation: BigInteger;
    recruitingStartDate: Date;
    recruitingDeadline: Date;
    vocalDeadline: Date;
    applyDeadline: Date;
    meeting: Date;
    afterParty: Date;
    announcementDate: Date;
    activePeriod: Date;
  };
}

const RecruitingInfo: React.FC<RecruitingInfoProps> = ({
  onInfoChange,
  Info,
}) => {
  const {
    generation,
    recruitingStartDate,
    recruitingDeadline,
    vocalDeadline,
    applyDeadline,
    meeting,
    afterParty,
    announcementDate,
    activePeriod,
  } = Info;

  const handleGenerationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onInfoChange({ ...Info, generation: event.target.value });
  };

  return (
    <div className="max-pad:px-[16px] pad:w-[786px] dt:w-[1200px]">
      <Text isEditing field={} onChange={} value={}>
        기수
      </Text>
    </div>
  );
};

export default RecruitingInfo;
