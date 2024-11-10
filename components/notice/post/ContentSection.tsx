// ContentSection.tsx
import React from 'react';

interface ContentSectionProps {
  text: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ text }) => {
  return (
    <>
      <div className="font-pretendard text-xl font-medium whitespace-pre-wrap">
        {text}
      </div>
      <div className="w-full border-b border-gray-15" />
    </>
  );
};

export default ContentSection;
