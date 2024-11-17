'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import CommunityRule from '@/components/announcement/posting/CommunityRule';
import ContentInput from '@/components/announcement/posting/ContentInput';
import ImageUpload from '@/components/announcement/posting/ImageUpload';
import TitleInput from '@/components/announcement/posting/TitleInput';
import TopButtons from '@/components/announcement/posting/TopButtons';

const Page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const imageUrls = searchParams.getAll('imageUrls');

  const [currentTitle, setTitle] = useState('');
  const [currentContent, setContent] = useState('');
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const isPostActive =
    currentTitle.trim() !== '' && currentContent.trim() !== '';

  useEffect(() => {
    if (title) setTitle(title);
    if (content) setContent(content);
    if (imageUrls.length > 0) {
      setCurrentImages([...imageUrls]);
    }
  }, [title, content, imageUrls.length]);

  return (
    <div className="relative flex flex-col items-center mt-[96px] mb-[-160px] font-pretendard">
      <section className="dt:w-[1200px] pad:w-[786px] ph:w-[328px] dt:pb-[578px] pad:pb-[559px] ph:pb-[171px]">
        <TopButtons isPostActive={isPostActive} />
        <TitleInput title={currentTitle} setTitle={setTitle} />
        <ContentInput content={currentContent} setContent={setContent} />{' '}
        {currentImages.length > 0 && (
          <ImageUpload image={currentImages} setImage={setCurrentImages} />
        )}
        <CommunityRule />
      </section>
    </div>
  );
};

export default Page;
