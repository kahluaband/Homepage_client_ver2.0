'use client';
import { authInstance } from '@/api/auth/axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { totalTicket } from '@/atoms';

interface TicketProps {
  id: number;
  status: string;
  reservation_id: string;
  buyer: string;
  phone_num: string;
  total_ticket: number;
  major: string | null;
  meeting: string | null;
}

interface TicketMemberProps {
  id: number;
  name: string;
  phone_num: string;
}

const TicketLists = ({ type }: { type: string }) => {
  const [allTicketList, setAllTicketList] = useState<TicketProps[]>([]);
  const [generallTicketList, setGeneralTicketList] = useState<TicketProps[]>(
    []
  );
  const [freshmanTicketList, setFreshmanTicketList] = useState<TicketProps[]>(
    []
  );
  const ticketList =
    type === '신입생'
      ? freshmanTicketList
      : type === '일반'
        ? generallTicketList
        : allTicketList;

  const [total, setTotal] = useRecoilState(totalTicket);
  const [members, setMembers] = useState<TicketMemberProps[]>([]);

  const getAllTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets');
      setAllTicketList(response.data.result.tickets);
      setTotal(response.data.result.total);

      for (let i = 0; i < response.data.result.tickets.length; i++) {
        setMembers(response.data.result.tickets[i].members);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getGeneralTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets/general');
      setGeneralTicketList(response.data.result.tickets);
    } catch (error: any) {
      console.error(error);
    }
  };

  const getFreshmanTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets/freshman');
      setFreshmanTicketList(response.data.result.tickets);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (type === '신입생') {
      getFreshmanTicketList();
    } else if (type === '일반') {
      getGeneralTicketList();
    } else {
      getAllTicketList();
    }
  }, [type]);

  return (
    <>
      {ticketList.map((ticket) => (
        <Accordion key={ticket.id}>
          <AccordionSummary
            className="w-[1200px] border-solid border-gray-10 border-b-2 p-0 pr-6"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {ticket.status === 'FINISH' ? (
              <Typography className="w-[94px] text-center text-base font-medium text-success-40">
                결제 완료
              </Typography>
            ) : (
              <Typography className="w-[94px] text-center text-base font-medium text-danger-40">
                결제 대기
              </Typography>
            )}

            <Typography className="w-[186px] text-center text-base font-medium text-gray-60">
              {ticket.reservation_id}
            </Typography>
            <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
              {ticket.buyer}
            </Typography>
            <Typography className="w-[160px] text-center text-base font-medium text-gray-60">
              {ticket.phone_num}
            </Typography>
            <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
              {ticket.total_ticket}장
            </Typography>

            <Typography className="w-[256px] text-center text-base font-medium text-gray-60">
              {ticket.major === null ? '-' : ticket.major}
            </Typography>

            {/* 워딩 생각해보겠슴 */}
            <Typography className="w-[120px] text-center text-base font-medium text-gray-60">
              {ticket.meeting === null ? '-' : ticket.meeting}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="pl-4">
            <Typography>
              {members &&
                members.map((member) => (
                  <span key={member.id}>
                    <span className="text-base font-medium text-gray-60 pl-3 pr-6">
                      이름 : {member.name}
                    </span>
                    <span className="text-base font-medium text-gray-60">
                      전화번호 : {member.phone_num}
                    </span>
                  </span>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default TicketLists;
