import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { SnackProvider } from "./contexts/snackContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <SnackProvider>
         <App />
      </SnackProvider>
   </React.StrictMode>,
);
