import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  registerSW({
    onNeedRefresh() {
      if (confirm("New content available. Reload?")) {
        window.location.reload();
      }
    },
    onOfflineReady() {
      console.log("App is ready to work offline");
    },
  });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
