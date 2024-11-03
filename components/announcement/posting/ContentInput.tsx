import React from 'react';

interface ContentInputProps {
  content: string;
  setContent: (value: string) => void;
}

const ContentInput: React.FC<ContentInputProps> = ({ content, setContent }) => (
  <textarea
    placeholder="내용을 입력하세요"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    className="w-full h-[586px] shadow-[0_0_0_1px_black] rounded-[8px] px-3 py-2 pad:text-[20px] ph:text-[16px] font-[500] leading-[150%] text-black placeholder-gray-40
    focus:shadow-outline focus:shadow-primary-50 focus:outline-none resize-none mb-10"
  />
);

export default ContentInput;
