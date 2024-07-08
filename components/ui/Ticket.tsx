interface TicketProps {
    ticket: string;
    price: string;
    state: string;
    onClick: () => void; 
    className?: string;
}

const Ticket: React.FC<TicketProps> = ({ ticket, price, state, onClick,className }) => {
    if(state==="selected"){
        return (
            <button onClick={onClick} className={`${className}focus:cursor-pointer px-5 mt-5 flex items-center justify-center w-[352px] h-14 border border-primary-50 rounded-xl bg-gray-0 text-primary-50 text-[16px] font-normal leading-6 text-start`}>
                <p className="w-[74px]">{ticket}</p>
                <p className="ml-[26px] w-[57px]">{price}</p>
                <p className="ml-auto w-[61px]">예매 가능</p>
            </button>
        )
    } else if(state==="possible"){
        return (
            <button onClick={onClick} className={`${className}focus:cursor-pointer px-5 mt-5 flex items-center justify-center w-[352px] h-14 text-gray-60 text-[16px] font-normal leading-6 text-start`}>
                <p className="w-[74px]">{ticket}</p>
                <p className="ml-[26px] w-[57px]">{price}</p>
                <p className="ml-auto w-[61px]">예매 가능</p>
            </button>
        )
    } else{
        return (
            <button onClick={onClick} className={`${className}px-5 mt-5 flex items-center justify-center w-[352px] h-14 text-gray-30 text-[16px] font-normal leading-6 text-start`}>
                <p className="w-[74px]">{ticket}</p>
                <p className="ml-[26px] w-[57px]">{price}</p>
                <p className="ml-auto w-[61px]">매진</p>
            </button>
        )
    }
}

export default Ticket;