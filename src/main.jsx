import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// TSで動かす場合は拡張子を.tsx, Reactで動かす場合は拡張子を.jsx
import App from "./App.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
