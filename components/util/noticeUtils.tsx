import { v4 as uuidv4 } from 'uuid';

// Create a new comment
export const createComment = (name: string, text: string) => ({
  id: uuidv4(),
  name,
  date: new Date().toLocaleString(),
  text,
  replying: false,
  deleted: false,
  replies: [],
});

// Create a new reply
export const createReply = (name: string, text: string) => ({
  id: uuidv4(),
  name,
  date: new Date().toLocaleString(),
  text,
  replying: false,
});

// Handle adding a comment
export const addCommentUtil = (comments, name, text) => {
  if (text.trim() === '') return comments;
  const newComment = createComment(name, text);
  return [...comments, newComment];
};

// Handle adding a reply
export const addReplyUtil = (comments, id, name, replyText) => {
  const newReply = createReply(name, replyText);
  return comments.map((comment) =>
    comment.id === id
      ? {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        }
      : comment
  );
};

// Handle deleting a comment
export const handleDeleteCommentUtil = (comments, id) => {
  return comments.map((comment) =>
    comment.id === id
      ? { ...comment, text: '삭제된 댓글입니다.', deleted: true }
      : comment
  );
};

// Handle deleting a reply
export const handleDeleteReplyUtil = (comments, commentId, replyId) => {
  return comments.map((comment) =>
    comment.id === commentId
      ? {
          ...comment,
          replies: comment.replies?.filter((reply) => reply.id !== replyId),
        }
      : comment
  );
};
