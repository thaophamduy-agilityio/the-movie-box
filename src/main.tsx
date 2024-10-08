import "./utils/wdyr.ts"; // This must be the first import

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { ErrorBoundary } from "@/components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
