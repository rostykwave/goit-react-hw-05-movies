import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { theme } from 'styleConfig/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    </ThemeProvider>
  </React.StrictMode>
);
