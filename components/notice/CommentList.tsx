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
  onDeleteComment: (id: string) => void; // Add this line
  onDeleteReply: (commentId: string, replyId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onAddReply,
  onDeleteComment,
  onDeleteReply,
}) => {
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
