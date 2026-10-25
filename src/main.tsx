import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { IdiomaProvider } from "./i18n";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </StrictMode>
);
