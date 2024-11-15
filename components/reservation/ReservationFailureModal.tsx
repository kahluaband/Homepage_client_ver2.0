interface ReservationFailureModalProps {
  formattedDateTime: string;
  onClose: () => void;
}

const ReservationFailureModal = ({
  onClose,
}: ReservationFailureModalProps) => {
  const handleOnClose = () => {
    onClose();
    window.location.reload();
  };

  return (
    <div className="w-[328px] h-[230px] pad:w-[600px] pad:h-[300px] flex flex-col text-center gap-6 py-[52px] px-[50px] pad:py-20 pad:px-10 bg-gray-0 rounded-3xl relative z-50">
      <img
        src="/image/reservation/tabler_x.svg"
        className="w-6 h-6 cursor-pointer absolute top-4 right-10"
        onClick={handleOnClose}
        alt="close"
      />
      <div className="text-xl pad:text-2xl font-semibold">예약 실패</div>
      <div className="text-base pad:text-lg font-medium">
        이미 예약이 완료된 시간대입니다.
        <br />
        다른 시간을 선택하여 예약을 진행해주세요.
      </div>
    </div>
  );
};

export default ReservationFailureModal;
