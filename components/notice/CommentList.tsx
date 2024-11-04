import React, { useEffect, useState } from 'react';
import Comment from './Comment';

interface Comment {
  id: string;
  name: string;
  date: string;
  text: string;
  replying: boolean;
  replies?: Comment[]; // Use Comment type for replies
}

interface CommentListProps {
  comments: Comment[];
  onAddReply: (id: string, replyText: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onAddReply }) => {
  const [commentList, setCommentList] = useState<Comment[]>(comments);

  useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  const handleToggleReplying = (id: string) => {
    setCommentList((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, replying: !comment.replying }
          : comment
      )
    );
  };

  return (
    <div className="w-full max-w-[500px] pad:max-w-[786px] dt:max-w-[1200px]">
      {commentList.length > 0 && (
        <div className="flex flex-col gap-10 mb-10">
          {commentList.map((comment) => (
            <Comment
              key={comment.id} // Using comment.id as a unique key
              comment={comment}
              onAddReply={onAddReply}
              onToggleReplying={handleToggleReplying}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
