import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { SnackProvider } from "./contexts/snackContext.tsx";
import { CartProvider } from "./contexts/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <SnackProvider>
         <CartProvider>
            <App />
         </CartProvider>
      </SnackProvider>
   </React.StrictMode>,
);
