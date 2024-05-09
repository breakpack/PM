import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GangwonState';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/GangwonState.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'GangwonState';
    margin:0;
    padding:0;
`
export default GlobalStyle;