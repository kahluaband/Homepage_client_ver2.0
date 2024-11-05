'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentList from '@/components/notice/CommentList';
import Image from 'next/image';
import defaultImg from '@/public/image/notice/defaultProfile.svg';
import FullHeart from '@/public/image/notice/FullHeart.svg';
import EmptyHeart from '@/public/image/notice/EmptyHeart.svg';
import Send from '@mui/icons-material/Send';
import chat from '@/public/image/notice/chat.svg';

const Page = () => {
  const text = `❗️깔루아 9월 정기공연❗️
안녕하세요 깔루아 21기 기장 최승원입니다🤩
9월 1일 금요일, 깔루아의 9월 정기공연이 있습니다‼️
재학생이신 선배님들께서는 수업이 끝난 후에, 졸업생이신 선배님들께서는 시간이 되신다면 공연 보러오셔서 함께 즐겨주시면 좋을 것 같습니다 !!

> 9월 정기공연 일정 <
날짜 : 9월 1일 금요일
시간 : 오후 6시 ~ 9시
장소 : 플렉스라운지
티켓가격 : 5000원

뒷풀이 : 오후 9시 ~
장소: 오맥

공연 이후에 뒷풀이를 진행할 예정입니다. 뒷풀이 장소 예약을 위해서 대략적인 인원을 확인하고 있습니다!
혹시 공연에 참석하시는 선배님들이나, 뒷풀이에 참석하시는 선배님들께서는 010-4827-2589로 연락주시면 감사하겠습니다🤩

기타 모든 문의사항은 페이스북 메세지나 댓글, 또는 위의 전화번호로 연락주세요 ! 감사합니다🤩🤩`;

  const [isFilled, setIsFilled] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [chatCount, setChatCount] = useState(0);

  const [comments, setComments] = useState<
    {
      id: string;
      name: string;
      date: string;
      text: string;
      replying: boolean;
      replies?: any[];
    }[]
  >([]);
  const [commentText, setCommentText] = useState('');

  const handleToggle = () => {
    setIsFilled((prev) => !prev);
    setHeartCount((prev) => (isFilled ? prev - 1 : prev + 1));
  };

  const addComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      id: uuidv4(),
      name: '원마루',
      date: new Date().toLocaleString(),
      text: commentText,
      replying: false,
      replies: [],
    };
    setComments((prevComments) => {
      const updatedComments = [...prevComments, newComment];
      return updatedComments;
    });
    setCommentText('');
    setChatCount((prev) => prev + 1);
  };

  const addReply = (id: string, replyText: string) => {
    const newReply = {
      id: uuidv4(),
      name: '원채영',
      date: new Date().toLocaleString(),
      text: replyText,
      replying: false,
    };
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            }
          : comment
      )
    );
    setChatCount((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full px-4 ph:px-4 pad:px-6 dt:px-[150px]">
      <div className="w-full font-pretendard pt-[64px] flex flex-col justify-center items-center">
        <div
          className="flex flex-col 
          w-full 
          max-w-[500px] 
          pad:max-w-[786px] 
          dt:max-w-[1200px] 
          gap-16"
        >
          <div className="flex mt-8">
            <Image
              src={defaultImg}
              alt="default-profile"
              width={88}
              height={88}
              className="dt:flex pad:flex ph:hidden"
            />
            <div className="w-full flex flex-col dt:ml-[24px] pad:ml-[24px] ph:ml-0">
              <span className="font-pretendard text-[32px] font-semibold">
                2024년 9월 정기공연
              </span>
              <span className="w-full flex flex-row mt-[16px] items-center  justify-between">
                <div className="flex flex-row gap-2">
                  <span className="font-pretendard text-base font-medium flex">
                    관리자
                  </span>
                  <div className="h-[24px] border-l border-black" />
                  <span className="font-pretendard text-base font-medium flex">
                    2024. 08. 01
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="font-pretendard text-base font-normal cursor-pointer">
                    수정
                  </span>
                  <span className="font-pretendard text-base text-danger-50 font-normal cursor-pointer">
                    삭제
                  </span>
                </div>
              </span>
            </div>
          </div>
          <div className="w-full border-b border-gray-15" />
          <div className="font-pretendard text-xl font-medium whitespace-pre-line ">
            {text}
          </div>
          <div className="w-full border-b border-gray-15 mb-10" />
        </div>
        <div
          className="w-full max-w-[500px] 
          pad:max-w-[786px] 
          dt:max-w-[1200px]"
        >
          <div className="flex flex-col mb-10">
            <div className="flex items-center">
              <div
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
                className="flex items-center"
              >
                <Image
                  src={isFilled ? FullHeart : EmptyHeart}
                  alt="heart"
                  width={20}
                  height={20}
                />
                <span className="ml-[10px] font-pretendard text-base">
                  {heartCount}
                </span>
              </div>
              <div className="flex items-center ml-[24px]">
                <Image src={chat} alt="chat" width={24} height={24} />
                <span className="ml-[10px] font-pretendard text-base">
                  {chatCount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 댓글 리스트 */}
        <CommentList comments={comments} onAddReply={addReply} />

        {/* 댓글 입력창 */}
        <div
          className="w-full max-w-[500px] 
          pad:max-w-[786px] 
          dt:max-w-[1200px] flex items-start gap-3 mb-10"
        >
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={(e) => {
              if (e.nativeEvent.isComposing) return;
              if (e.key === 'Enter') addComment();
            }}
            placeholder=" 댓글을 입력하세요"
            className="w-full min-h-[60px] border font-pretendard text-base font-semibold border-black rounded-lg px-3 py-2 placeholder:text-gray-40 focus:outline-none"
          />
          <button
            className="border rounded-lg border-black min-w-[60px] min-h-[60px] cursor-pointer flex items-center justify-center"
            onClick={addComment}
          >
            <Send width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
