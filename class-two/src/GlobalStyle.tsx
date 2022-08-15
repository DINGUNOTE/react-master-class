import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after{box-sizing:border-box;}
  
  html{font-size:16px;}

  html,body{height:100%;}

  body{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${(props) => props.theme.textColor};
    font-weight: 400;
    word-break:break-word;
    background-color: ${(props) => props.theme.bgColor};
  }

  #root{
    margin: 0 auto;
    padding: 0 1rem 1rem 1rem;
    max-width: 480px;
  }

  main{display:flex;flex-direction:column;gap:1.5rem;}

  a{color:inherit;text-decoration:none;}
`;

export default GlobalStyle;
