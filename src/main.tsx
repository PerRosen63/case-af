import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
