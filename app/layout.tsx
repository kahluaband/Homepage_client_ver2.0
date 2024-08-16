'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isMainPage = pathname === '/';
  const isCompletePage = pathname === '/ticket/complete';
  const isTicketPage = pathname === '/ticket';
  const isFreshmanTicketPage = pathname === '/ticket/freshman_ticket';
  const isGeneralTicketPage = pathname === '/ticket/general_ticket';
  const isCancelPage = pathname === '/ticket/cancel';
  const isReservationPage = pathname === '/ticket/reservation';
  const isSearchPage = pathname === '/ticket/search';

  const isNoticePage = pathname === '/recruit/notice';
  const isApplyCompletePae = pathname === '/recruit/complete';
  const isApplyPage = pathname === '/recruit/apply';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 834);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <meta property="og:title" content="KAHLUA BAND" />
      <meta
        property="og:description"
        content="안녕하세요 홍익대학교 컴퓨터공학과 밴드부 깔루아입니다!"
      />
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta property="og:image:alt" content="Kahlua Band" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kahluaband.com" />

      <body className={inter.className}>
        <div className="font-pretendard w-full h-auto mb-40">
          <Header />
          {children}
        </div>
        {!isCompletePage &&
          !isFreshmanTicketPage &&
          !isGeneralTicketPage &&
          !isCancelPage &&
          !isReservationPage &&
          !isSearchPage &&
          !isNoticePage &&
          !isApplyCompletePae &&
          !isApplyPage &&
          !(isMobile && isTicketPage) && <Footer />}
      </body>
      {/* gaId 추후 발급 후 작성 필요 -> 배포 이후*/}
      <GoogleAnalytics gaId="" />
    </html>
  );
}
