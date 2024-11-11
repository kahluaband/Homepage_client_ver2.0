'use client';
import React, { useState } from 'react';
import DeletePopup from './DeletePostPopup';
import TitleSection from '@/components/notice/post/TitleSection';
import InfoSection from '@/components/notice/post/InfoSection';
import ContentSection from '@/components/notice/post/ContentSection';

interface NoticeData {
  title?: string;
  text?: string;
  author?: string;
  date?: string;
}
interface PostProps {
  noticeData: NoticeData;
  commentCount: number;
  replyCount: number;
}

const Post: React.FC<PostProps> = ({
  noticeData,
  commentCount,
  replyCount,
}) => {
  const [chatCount, setChatCount] = useState(0);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    // 글 삭제
    setShowDeletePopup(false);
  };

  const handleDeleteCancel = () => {
    // 글 삭제 취소
    setShowDeletePopup(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-16">
          <TitleSection
            title={noticeData?.title || 'No Title'}
            author={noticeData?.author || 'Unknown'}
            date={noticeData?.date || 'Unknown'}
            onDeleteClick={handleDeleteClick}
          />
          <div className="w-full border-b border-gray-15" />
          <ContentSection text={noticeData?.text || ''} />
        </div>
        <InfoSection commentCount={commentCount} replyCount={replyCount} />
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

export default Post;
