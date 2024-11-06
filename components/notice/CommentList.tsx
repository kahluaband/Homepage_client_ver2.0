import React, { useEffect, useState } from 'react';
import Comment from './Comment';

interface Comment {
  id: string;
  name: string;
  date: string;
  text: string;
  replying: boolean;
  replies?: Comment[];
}

interface CommentListProps {
  comments: Comment[];
  onAddReply: (id: string, replyText: string) => void;
  onDeleteComment: (id: string) => void;
  onDeleteReply: (commentId: string, replyId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onAddReply,
  onDeleteComment,
  onDeleteReply,
}) => {
  const [commentList, setCommentList] = useState<Comment[]>(comments);
  const [replyingId, setReplyingId] = useState<string | null>(null);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  // 답글 입력창 토글 함수
  const handleToggleReplying = (id: string) => {
    setReplyingId((prevId) => (prevId === id ? null : id)); // 현재 id와 동일하면 닫고, 아니면 해당 id를 열기
  };

  return (
    <div className="w-full ">
      {commentList.length > 0 && (
        <div className="flex flex-col">
          {commentList.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              onAddReply={onAddReply}
              onToggleReplying={handleToggleReplying}
              onDeleteComment={onDeleteComment}
              onDeleteReply={onDeleteReply}
              replying={comment.id === replyingId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
