import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { SnackProvider } from "./contexts/snackContext.tsx";
import { CartProvider } from "./contexts/cartContext.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <SnackProvider>
            <CartProvider>
               <App />
               <Toaster richColors />
            </CartProvider>
         </SnackProvider>
      </BrowserRouter>
   </React.StrictMode>,
);
