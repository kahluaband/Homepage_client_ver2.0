"use client"
import FinalStep from "@/components/templates/ticket/FinalStep";
import FreshmanInfo from "@/components/templates/ticket/FreshmanInfo";
import MemberSelection from "@/components/templates/ticket/MemberSelection";
import PartySelection, { Action, State, reducer } from "@/components/templates/ticket/PartySelection";
import TicketSelection from "@/components/templates/ticket/TicketSelection";
import Warning from "@/components/templates/ticket/Warning";
import Bar from "@/components/ui/Bar";
import {useState, useReducer, useEffect} from "react";

const initialState: State = {
    participation1: false,
    participation2: false,
    notParticipation: false,
};

const Freshman_tickets: React.FC = () => {
    const [member, setMember] = useState<number>(1);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [isAlreadyReserved, setIsAlreadyReserved] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        department: '',
        student_id: '',
        phone_num: ''
    });

    const handleUserInfoChange = (info: { name: string, department: string, student_id: string, phone_num: string }) => {
        setUserInfo(info);
    };

    const [partySelection, dispatchPartySelection] = useReducer((state: State, action: Action) => {
        switch (action.type) {
            case 'PARTICIPATION1':
            case 'PARTICIPATION2':
            case 'NOT_PARTICIPATION':
                return reducer(state, action);
            default:
                return state;
        }
    }, initialState);

    const handleReservationComplete = () => {
        window.location.href = `/ticket/complete`;
    };

    const handleAlreadyReserved = () => {
        window.location.href = `/ticket/search`;
    };

    useEffect(() => {
        const { name, phone_num, department, student_id } = userInfo;
        const isDataComplete =
            name.trim() !== "" &&
            phone_num.trim() !== "" &&
            department.trim() !== "" &&
            student_id.trim() !== "";
        setIsFormComplete(isDataComplete);
    }, [userInfo]);

    return (
    <div className="h-[2000px] w-[996px] flex flex-col relative mx-auto top-20 mt-4 ">
        <div className="h-[200px] w-full rounded-t-xl bg-gray-90 flex flex-col mx-auto">
            <p className="mt-10 text-gray-0 text-center text-2xl font-semibold leading-[48px]">신입생 티켓 예매</p>
            <p className="mt-4 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024년 3월 정기 공연</p>
            <p className="mt-1 text-gray-20 text-center text-lg  font-normal leading-[27px]">2024.03.01  SAT  18:00</p>
        </div>
        <div className="h-[1395px] w-full rounded-b-xl border border-gray-15 flex flex-col mx-auto">
            <div className="mx-12 flex flex-col">
                <MemberSelection description="신입생은 최대 1인 1매 구매 가능합니다." min={1} max={1} ticket={"freshman"}  member={member} setMember={setMember}/>
                <Bar/>
                <FreshmanInfo userInfo={userInfo} onInfoChange={handleUserInfoChange}/>
                <Bar/>
                <TicketSelection/>
                <Bar/>
                <PartySelection dispatch={dispatchPartySelection} state={partySelection} />
                <Bar/>
                <Warning/>
            </div>
            <FinalStep price={0} amount={1} onReservationComplete={handleReservationComplete} isFormComplete={isFormComplete} onAlreadyReserved={handleAlreadyReserved} isAlreadyReserved = {isAlreadyReserved}/>
        </div>
    </div>
    );
};

export default Freshman_tickets;