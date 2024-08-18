'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';

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
  const isApplyCompletePage = pathname === '/recruit/complete';
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
      <head>
        <link
          rel="preload"
          href="https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://db.onlinewebfonts.com/t/8784ec149f84f77ada651e2dd98e0943.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="globals.css" />
      </head>
      <body className={inter.className}>
        <div className="font-pretendard w-full h-auto mb-40">
          {pathname === '/login' ||
          pathname === '/admin/applicant' ||
          pathname === '/admin/ticketing' ? (
            <AdminHeader />
          ) : (
            <Header />
          )}
          {children}
        </div>
        {!isCompletePage &&
          !isFreshmanTicketPage &&
          !isGeneralTicketPage &&
          !isCancelPage &&
          !isReservationPage &&
          !isSearchPage &&
          !isNoticePage &&
          !isApplyCompletePage &&
          !isApplyPage &&
          !(isMobile && isTicketPage) && <Footer />}
      </body>
      {/* gaId 추후 발급 후 작성 필요 -> 배포 이후*/}
      <GoogleAnalytics gaId="" />
    </html>
  );
}
