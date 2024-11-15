interface ReservationSuccessModalProps {
  formattedDateTime: string;
  onClose: () => void;
}

const ReservationSuccessModal = ({
  formattedDateTime,
  onClose,
}: ReservationSuccessModalProps) => {
  const handleOnClose = () => {
    onClose();
    window.location.reload();
  };

  // 날짜와 시간을 분리(모바일 전용)
  const datePart =
    formattedDateTime.split(' ')[0] +
    ' ' +
    formattedDateTime.split(' ')[1] +
    ' ' +
    formattedDateTime.split(' ')[2];
  const timePart =
    formattedDateTime.split(' ')[3] + ' ' + formattedDateTime.split(' ')[4] + ' ' + formattedDateTime.split(' ')[5];

  return (
    <div className="w-[328px] pad:w-[600px] pad:h-[300px] flex flex-col text-center gap-6 py-[52px] px-[50px] pad:py-20 pad:px-10 bg-gray-0 rounded-3xl relative z-50">
      <img
        src="/image/reservation/tabler_x.svg"
        className="w-6 h-6 cursor-pointer absolute top-4 right-10"
        onClick={handleOnClose}
        alt="close"
      />
      <div>
        <div className="hidden pad:inline pad:text-2xl font-semibold">
          {formattedDateTime}
        </div>
        <div className="pad:hidden text-xl font-semibold">
          <div>{datePart}</div>
          <div>{timePart}</div>
        </div>
        <div className="text-lg pad:text-22px font-medium">
          예약이 확정되었습니다.
        </div>
      </div>
      <div className="text-base pad:text-lg font-medium">
        <span className="hidden pad:inline">
          동아리방 도어락 비밀번호는
          <span className="font-semibold">[5896]</span> 입니다.
        </span>
        <span className="pad:hidden">
          동아리방 도어락 비밀번호는
          <br />
          <span className="font-semibold">[5896]</span> 입니다.
        </span>
        <br />
        비밀번호를 입력해야 출입이 가능하니 꼭 기억해주세요!
      </div>
    </div>
  );
};

export default ReservationSuccessModal;
