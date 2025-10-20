import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { Buffer as BufferPolyfill } from "buffer";

// Ensure Buffer exists in the browser for libraries like gray-matter
if (typeof globalThis !== "undefined") {
  const g = globalThis as unknown as { Buffer?: typeof BufferPolyfill };
  if (!g.Buffer) g.Buffer = BufferPolyfill;
}

// Register service worker only in production to avoid dev caching issues
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Initialize Vercel Web Analytics
if (typeof window !== 'undefined') {
  inject();
}
