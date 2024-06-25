import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { TableDesktop } from "../TableDesktop/table_desktop";
import { TableMobile } from "../TableMobile/table_mobile";
import { EmptyCart } from "../EmptyCart/empty_cart";

export function Table() {
   const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
   const { cart } = useCart();

   useEffect(() => {
      function updateTableComponentBasedInWidthWindow() {
         const currentWidth = document.documentElement.clientWidth;
         setWindowWidth(currentWidth);
      }

      window.addEventListener("resize", updateTableComponentBasedInWidthWindow);

      return () => {
         window.removeEventListener("resize", updateTableComponentBasedInWidthWindow);
      };
   }, []);

   if (cart.length === 0) {
      return <EmptyCart title='Ops! Parece que você não tem pedidos, peça já!' />;
   }

   return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}
