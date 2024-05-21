import { useCart } from "../../hooks/useCart";
import { TableDesktop } from "../TableDesktop/table_desktop";

export function Table() {
   const { cart } = useCart();

   if (cart.length === 0) {
      return <h1>Empty Cart</h1>;
   }

   return <TableDesktop />;
}
