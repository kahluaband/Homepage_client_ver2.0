'use client';
import { RecoilRoot } from 'recoil';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import './globals.css';

import * as gtag from '../libs/gtag';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
  const isLoginPage = pathname === '/login';
  const isAdminApplicantPage = pathname === '/admin/applicant';
  const isAdminTicketingPage = pathname === '/admin/ticketing';

  const isRoomReservationPage = pathname === '/reservation';

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
    <>
      <RecoilRoot>
        <html lang="en">
          <head>
            {/*<!-- Google tag (gtag.js) -->*/}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}');
              `,
              }}
            />
            <meta property="og:title" content="KAHLUA BAND" />
            <meta
              property="og:description"
              content="안녕하세요 홍익대학교 컴퓨터공학과 밴드부 Kahlua 입니다!"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://kahluaband.com" />
          </head>
          <body className={roboto.className}>
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
              !isApplyCompletePage &&
              !isApplyPage &&
              !isLoginPage &&
              !isAdminApplicantPage &&
              !isAdminTicketingPage &&
              !isRoomReservationPage &&
              !(isMobile && isTicketPage) && <Footer />}
          </body>
        </html>
      </RecoilRoot>
    </>
  );
}
