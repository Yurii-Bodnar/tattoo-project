import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./utility/theme";
// import GlobalStyle from "./utility/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <BrowserRouter basename="/tattoo-arena">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
