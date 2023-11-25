import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { GlobalStyle } from "./globalStyles";
import { Routes } from "./routes";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import store from './redux/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Layout>
            <Routes />
          </Layout>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
