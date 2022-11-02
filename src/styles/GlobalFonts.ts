import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'icomoon';
  src: url('../assets/fonts/icomoon.eot?q87p3b');
  src: url('../assets/fonts/icomoon.eot?q87p3b#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?q87p3b') format('truetype'),
    url('../assets/fonts/icomoon.woff?q87p3b') format('woff'),
    url('../assets/fonts/icomoon.svg?q87p3b#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-back:before {
  content: "\e900";
}

`;

export default GlobalFonts;
