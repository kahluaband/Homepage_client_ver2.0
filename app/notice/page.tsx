'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CommentList from '@/components/notice/CommentList';
import Image from 'next/image';
import defaultImg from '@/public/image/notice/defaultProfile.svg';
import arrow from '@/public/image/notice/Left.svg';
import chat from '@/public/image/notice/chat.svg';
import DeletePopup from '@/components/notice/DeletePostPopup';
import CommentInput from '@/components/notice/CommentInput';
import LikeButton from '@/components/notice/LikeButton';

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

  const [chatCount, setChatCount] = useState(0);
  const [replyingToId, setReplyingToId] = useState<string | null>(null);

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
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [replyText, setReplyText] = useState('');

  const addComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      id: uuidv4(),
      name: '원마루',
      date: new Date().toLocaleString(),
      text: commentText,
      replying: false,
      deleted: false,
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

    setReplyText('');
    setReplyingToId(null);
    setChatCount((prev) => prev + 1);
  };

  const handleDeleteComment = (id: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, text: '삭제된 댓글입니다.', deleted: true }
          : comment
      )
    );
    setChatCount((prev) => Math.max(0, prev - 1));
  };

  const handleDeleteReply = (commentId: string, replyId: string) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies?.filter((reply) => reply.id !== replyId),
            }
          : comment
      )
    );
    setChatCount((prev) => Math.max(0, prev - 1));
  };
  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    // 삭제 로직 추가
    setShowDeletePopup(false);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center pt-16 w-full max-w-[500px] pad:max-w-[786px] dt:max-w-[1200px] max-pad:px-[16px]">
        <div className="flex flex-col w-full gap-16">
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
                  <span
                    className="font-pretendard text-base text-danger-50 font-normal cursor-pointer"
                    onClick={handleDeleteClick}
                  >
                    삭제
                  </span>
                </div>
              </span>
            </div>
          </div>
          <div className="w-full border-b border-gray-15" />
          <div className="font-pretendard text-xl font-medium whitespace-pre-wrap word-break: break-word">
            {text}
          </div>
          <div className="w-full border-b border-gray-15 mb-10" />
        </div>
        <div className="w-full">
          <div className="flex flex-col mb-10">
            <div className="flex items-center">
              <LikeButton initialCount={0} />
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
        <CommentList
          comments={comments}
          onAddReply={addReply}
          onDeleteComment={handleDeleteComment}
          onDeleteReply={handleDeleteReply}
        />

        {/* 댓글 입력창 */}
        <CommentInput
          commentText={commentText}
          setCommentText={setCommentText}
          onAddComment={addComment}
        />

        <div className="w-full">
          <div className="flex items-start w-full">
            <div className="flex w-[90px] cursor-pointer gap-[10px]">
              <Image src={arrow} alt="arrow" width={24} height={24} />
              <span className="font-pretendard text-base font-medium">
                목록으로
              </span>
            </div>
          </div>
        </div>
      </div>

      {showDeletePopup && (
        <DeletePopup
          onConfirm={handleDeleteConfirm}
          onClose={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default Page;
