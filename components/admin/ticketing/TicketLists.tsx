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
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '20px 28px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Pretendard',
        },
      },
    },
    // MuiAccordionSummary: {
    //   styleOverrides: {
    //     content: {
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //     },
    //   },
    // },
  },
});

interface TicketProps {
  id: number;
  status: string;
  reservation_id: string;
  buyer: string;
  phone_num: string;
  total_ticket: number;
  major: string | null;
  studentId?: string;
  meeting: string | null;
  members: TicketMemberProps[] | null;
}

interface TicketMemberProps {
  id: number;
  name: string;
  phone_num: string;
}

const TicketLists = ({ type }: { type: string }) => {
  const router = useRouter();
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
  const [members, setMembers] = useState<TicketMemberProps[][]>([]);

  const getAllTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets');
      setAllTicketList(response.data.result.tickets);
      setTotal(response.data.result.total);

      const newMembers = response.data.result.tickets.map(
        (ticket: TicketProps) => ticket.members || []
      );
      setMembers(newMembers);
    } catch (error: any) {
      if (error.response.status === 401) {
        alert('로그인이 필요합니다.');
        router.push('/login');
      }
    }
  };

  const getGeneralTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets/general');
      setGeneralTicketList(response.data.result.tickets);
    } catch (error: any) {}
  };

  const getFreshmanTicketList = async () => {
    try {
      const response = await authInstance.get('/admin/tickets/freshman');
      setFreshmanTicketList(response.data.result.tickets);
    } catch (error: any) {}
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
    <ThemeProvider theme={theme}>
      {ticketList.map((ticket, index) => (
        <Accordion key={ticket.id}>
          <AccordionSummary
            className="w-full dt:w-[1200px] border-solid border-gray-10 border-b-2 p-0 pr-6"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {ticket.status === 'FINISH_PAYMENT' ? (
              <Typography
                component="div"
                className="min-w-[94px] text-center text-base font-medium text-primary-50"
              >
                결제 완료
              </Typography>
            ) : ticket.status === 'WAIT' ? (
              <Typography
                component="div"
                className="min-w-[94px] text-center text-base font-medium text-gray-30"
              >
                취소 요청
              </Typography>
            ) : ticket.status === 'CANCEL_COMPLETE' ? (
              <Typography
                component="div"
                className="min-w-[94px] text-center text-base font-medium text-gray-30"
              >
                예매 취소
              </Typography>
            ) : ticket.status === 'CANCEL_REQUEST' ? (
              <Typography
                component="div"
                className="text-center text-base font-medium text-danger-40"
              >
                취소 요청
              </Typography>
            ) : ticket.status === 'CANCEL_COMPLETE' ? (
              <Typography
                component="div"
                className="min-w-[94px] text-center text-base font-medium text-gray-30"
              >
                예매 취소
              </Typography>
            ) : null}

            <Typography
              component="div"
              className="text-center text-base font-medium text-gray-60"
            >
              {ticket.reservation_id}
            </Typography>
            <Typography
              component="div"
              className="text-center text-base font-medium text-gray-60"
            >
              {ticket.buyer}
            </Typography>
            <Typography
              component="div"
              className="text-center text-base font-medium text-gray-60"
            >
              {ticket.phone_num}
            </Typography>
            <Typography
              component="div"
              className="text-center text-base font-medium text-gray-60"
            >
              {ticket.total_ticket}장
            </Typography>

            <Typography
              component="div"
              className="text-center text-base font-medium text-gray-60"
            >
              {ticket.major === null ? '-' : ticket.major}
            </Typography>

            <Typography
              component="div"
              className="min-w-[120px] text-center text-base font-medium text-gray-60"
            >
              {ticket.studentId === null ? '-' : ticket.studentId}
            </Typography>

            <Typography
              component="div"
              className="min-w-[120px] text-center text-base font-medium text-gray-60"
            >
              {ticket.meeting === null ? '-' : ticket.meeting}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              {members[index] &&
                members[index].map((member) => (
                  <div key={member.id} className="flex gap-14">
                    <div className="text-base font-medium text-gray-60 pb-3">
                      이름 : {member.name}
                    </div>
                    <div className="text-base font-medium text-gray-60">
                      전화번호 : {member.phone_num}
                    </div>
                  </div>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ThemeProvider>
  );
};

export default TicketLists;
