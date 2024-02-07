import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import responsiveTheme from "./theme/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
