import { v4 as uuidv4 } from 'uuid';

export interface Reply {
  id: string;
  name: string;
  date: string;
  text: string;
  replying: boolean;
  deleted?: boolean;
}

export interface Comment {
  id: string;
  name: string;
  date: string;
  text: string;
  replying: boolean;
  replies?: Reply[];
  deleted?: boolean;
}

export const addComment = (
  commentText: string,
  comments: any[],
  setComments: React.Dispatch<React.SetStateAction<any[]>>,
  setChatCount: React.Dispatch<React.SetStateAction<number>>,
  setCommentText: React.Dispatch<React.SetStateAction<string>>
) => {
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

export const addReply = (
  id: string,
  replyText: string,
  comments: any[],
  setComments: React.Dispatch<React.SetStateAction<any[]>>,
  setReplyingToId: React.Dispatch<React.SetStateAction<string | null>>,
  setReplyText: React.Dispatch<React.SetStateAction<string>>,
  setChatCount: React.Dispatch<React.SetStateAction<number>>
) => {
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

export const handleDeleteComment = (
  id: string,
  comments: any[],
  setComments: React.Dispatch<React.SetStateAction<any[]>>,
  setChatCount: React.Dispatch<React.SetStateAction<number>>
) => {
  setComments((prevComments) =>
    prevComments.map((comment) =>
      comment.id === id
        ? { ...comment, text: '삭제된 댓글입니다.', deleted: true }
        : comment
    )
  );
  setChatCount((prev) => Math.max(0, prev - 1));
};

export const handleDeleteReply = (
  commentId: string,
  replyId: string,
  comments: Comment[],
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  setChatCount: React.Dispatch<React.SetStateAction<number>>
) => {
  setComments((prevComments) =>
    prevComments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: comment.replies
              ? comment.replies
                  .map((reply) =>
                    reply.id === replyId ? { ...reply, deleted: true } : reply
                  )
                  .filter((reply) => !reply.deleted) // Filter out deleted replies
              : [],
          }
        : comment
    )
  );
  setChatCount((prev) => Math.max(0, prev - 1));
};

export const handleDeleteConfirm = (
  setShowDeletePopup: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowDeletePopup(false);
};

export const handleDeleteCancel = (
  setShowDeletePopup: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setShowDeletePopup(false);
};
