import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after{box-sizing:border-box;}
  
  html,body{height:100%;}

  body{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.bgColor};}

  a{text-decoration:none;}
`;

export default GlobalStyle;
