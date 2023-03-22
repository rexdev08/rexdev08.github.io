import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeModeContextProvider } from "./context/ThemeModeContetx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeContextProvider>
      <App />
    </ThemeModeContextProvider>
  </React.StrictMode>
);
