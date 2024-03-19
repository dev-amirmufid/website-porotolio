import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { PageRouterProvider } from "./routers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageRouterProvider />
  </React.StrictMode>
);
