import React, { createContext, useState } from "react";
import { SnackData } from "../types/SnackData";
import { snackEmoji } from "../helpers/snackEmoji";
import { toastMessage } from "../helpers/toastMessage";

export interface Snack extends SnackData {
   quantity: number;
   subtotal: number;
}

// interface UpdateCartProps {
//    id: number;
//    snack: string;
//    newQuantity: number;
// }

// interface RemoveSnackFromCart {
//    id: number;
//    snack: string;
// }

interface CartContextProps {
   cart: Snack[];
   addSnackIntoCart: (snack: SnackData) => void;
   // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void; --> *to be developed*
   // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void; --> *to be developed*
}

interface CartProviderProps {
   children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
   const [cart, setCart] = useState<Snack[]>([]);

   function addSnackIntoCart(snack: SnackData): void {
      const snackExistentInCart = cart.find(
         (item) => item.snack === snack.snack && item.id === snack.id,
      );

      if (snackExistentInCart) {
         const newCart = cart.map((item) => {
            if (item.id === snack.id) {
               const quantity = item.quantity + 1;
               const subtotal = item.price * quantity;

               return { ...item, quantity, subtotal };
            }

            return item;
         });

         toastMessage(
            `Mais um(a) ${snackEmoji(snack.snack)}`,
            snack.name,
            "adicionado aos pedidos!",
         );

         setCart(newCart);
         return;
      }

      const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
      const newCart = [...cart, newSnack];

      toastMessage(snackEmoji(snack.snack), snack.name, "Foi adicionado(a) aos pedidos!");
      setCart(newCart);
   }

   return (
      <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
   );
}
