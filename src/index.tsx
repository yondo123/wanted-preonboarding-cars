import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/GlobalFonts';
import colors from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={colors}>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </ThemeProvider>
);
