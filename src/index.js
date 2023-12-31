import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}></ThemeProvider>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
