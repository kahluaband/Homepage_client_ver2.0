"use client"
import { useReducer } from "react";
import {SelectBox} from "@/components/ui/selectBox";

// 상태의 타입 정의
interface State {
    participation1: boolean;
    participation2: boolean;
    notParticipation: boolean;
}

// 액션의 타입 정의
type Action =
    | { type: 'PARTICIPATION1' }
    | { type: 'PARTICIPATION2' }
    | { type: 'NOT_PARTICIPATION' };

// 초기 상태 정의
const initialState: State = {
    participation1: false,
    participation2: false,
    notParticipation: false,
};

// 리듀서 함수 정의
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'PARTICIPATION1':
        return { ...state, participation1: !state.participation1, notParticipation: false };
        case 'PARTICIPATION2':
        return { ...state, participation2: !state.participation2, notParticipation: false };
        case 'NOT_PARTICIPATION':
        return {...state, notParticipation: !state.notParticipation, participation1: false, participation2: false,};
        default:
        return state;
    }
}

const PartySelection = (): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="flex flex-col mt-10 mb-10 w-full">
        <div className="flex h-[30px]">
            <div className="font-semibold text-xl leading-[30px] text-gray-900">새내기 소모임 참석 여부</div>
        </div>
        <div className="flex flex-col mt-6">
            <SelectBox
            name="3월 14일 참석"
            state={state.participation1}
            onClick={() => dispatch({ type: 'PARTICIPATION1' })}
            alt="PartySelection"
            />
            <SelectBox
            name="3월 15일 참석"
            state={state.participation2}
            onClick={() => dispatch({ type: 'PARTICIPATION2' })}
            alt="PartySelection"
            className="mt-4"
            />
            <SelectBox
            name="미참석"
            state={state.notParticipation}
            onClick={() => dispatch({ type: 'NOT_PARTICIPATION' })}
            alt="PartySelection"
            className="mt-4"
            />
        </div>
        </div>
    );
};

export default PartySelection;