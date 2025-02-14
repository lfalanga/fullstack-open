import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// console.log(`[main.jsx]: MODE:`, import.meta.env.MODE);
// console.log(`[main.jsx]: BASE_URL:`, import.meta.env.BASE_URL);
// console.log(`[main.jsx]: PROD:`, import.meta.env.PROD);
// console.log(`[main.jsx]: DEV:`, import.meta.env.DEV);
// console.log(`[main.jsx]: SSR:`, import.meta.env.SSR);

// console.log(`[main.jsx]: VITE_API_URL:`, import.meta.env.VITE_API_URL);
// console.log(`[main.jsx]: VITE_API_KEY:`, import.meta.env.VITE_API_KEY);
// console.log(`[main.jsx]: VITE_PORT:`, import.meta.env.VITE_PORT);
// console.log(`[main.jsx]: VITE_USE_LEGACY:`, import.meta.env.VITE_USE_LEGACY);
// console.log(`[main.jsx]: VITE_FOO:`, import.meta.env.VITE_FOO);
// console.log(`[main.jsx]: VITE_MORE_FOO:`, import.meta.env.VITE_MORE_FOO);
// console.log(`[main.jsx]: VITE_EXPOSED_FOO:`, import.meta.env.VITE_EXPOSED_FOO);
// console.log(`[main.jsx]: VITE_TEST:`, import.meta.env.VITE_TEST);
// console.log(`[main.jsx]: VITE_SOME_KEY:`, import.meta.env.VITE_SOME_KEY);
// console.log(`[main.jsx]: VITE_API_OPENWEATHERMAP_KEY:`, import.meta.env.VITE_API_OPENWEATHERMAP_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
