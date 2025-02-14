import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log(`[App.jsx]: import.meta.env.MODE:`, import.meta.env.MODE);
  console.log(`[App.jsx]: import.meta.env.BASE_URL:`, import.meta.env.BASE_URL);
  console.log(`[App.jsx]: import.meta.env.PROD:`, import.meta.env.PROD);
  console.log(`[App.jsx]: import.meta.env.DEV:`, import.meta.env.DEV);
  console.log(`[App.jsx]: import.meta.env.SSR:`, import.meta.env.SSR);
  
  console.log(`[App.jsx]: import.meta.env.VITE_API_URL:`, import.meta.env.VITE_API_URL);
  console.log(`[App.jsx]: import.meta.env.VITE_API_KEY:`, import.meta.env.VITE_API_KEY);
  console.log(`[App.jsx]: import.meta.env.VITE_PORT:`, import.meta.env.VITE_PORT);
  console.log(`[App.jsx]: import.meta.env.VITE_USE_LEGACY:`, import.meta.env.VITE_USE_LEGACY);
  console.log(`[App.jsx]: import.meta.env.VITE_FOO:`, import.meta.env.VITE_FOO);
  console.log(`[App.jsx]: import.meta.env.VITE_MORE_FOO:`, import.meta.env.VITE_MORE_FOO);
  console.log(`[App.jsx]: import.meta.env.VITE_EXPOSED_FOO:`, import.meta.env.VITE_EXPOSED_FOO);
  console.log(`[App.jsx]: import.meta.env.VITE_TEST:`, import.meta.env.VITE_TEST);
  console.log(`[App.jsx]: import.meta.env.VITE_SOME_KEY:`, import.meta.env.VITE_SOME_KEY);
  console.log(`[App.jsx]: import.meta.env.VITE_API_OPENWEATHERMAP_KEY:`, import.meta.env.VITE_API_OPENWEATHERMAP_KEY);
  
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
