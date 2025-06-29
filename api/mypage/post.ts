import { authInstance } from '@/api/auth/axios';
import { MyPost } from '@/types/post';

// 내가 쓴 글 리스트 조회
export const fetchMyPosts = async (
  page: number,
  size: number
): Promise<{ posts: MyPost[]; totalPages: number } | null> => {
  try {
    const response = await authInstance.get('my-page/post/list', {
      params: { page, size },
    });
    return {
      posts: response.data.result.content,
      totalPages: response.data.result.totalPages,
    };
  } catch (error) {
    console.error('내 게시글 조회 실패:', error);
    return null;
  }
};

// 댓글 수 조회
export const fetchCommentCount = async (postId: number): Promise<number> => {
  try {
    const response = await authInstance.get(`comment/${postId}/list`);
    const comments = response.data.result.comments;
    return comments.filter((comment: any) => comment.deletedAt === null).length;
  } catch (error) {
    console.error('댓글 수 조회 실패:', error);
    return 0;
  }
};
