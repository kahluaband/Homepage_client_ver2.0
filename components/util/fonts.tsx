import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'mustica pro';
    src: url('https://db.onlinewebfonts.com/t/8784ec149f84f77ada651e2dd98e0943.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap; 
  }

  @font-face {
    font-family: 'pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap; 
  }

  body {
    font-family: 'mustica pro', 'pretendard'; /* 폰트 우선 순위 설정 */
  }
`;

export default GlobalStyle;
