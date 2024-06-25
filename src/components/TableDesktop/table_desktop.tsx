import { CurrencyFormat } from "../../helpers/currencyFormat";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import PlusIcon from "../../assets/circle-plus.svg?react";
import MinusIcon from "../../assets/circle-minus.svg?react";
import { ConfirmOrder } from "../OrderCloseAction/ConfirmOrder/confirm_order";

export function TableDesktop() {
   const { cart, snackCartDecrement, snackCartIncrement, removeSnackFromCart } = useCart();

   return (
      <Container>
         <table>
            <thead>
               <tr>
                  <th></th>
                  <th>Lanche</th>
                  <th title='Quantidade'>Qtd</th>
                  <th>Subtotal</th>
                  <th></th>
               </tr>
            </thead>

            <tbody>
               {cart.map((item) => (
                  <tr key={`${item.snack}-${item.id}`}>
                     <td>
                        <img src={item.image} alt={item.name} />
                     </td>
                     <td>
                        <h4>{item.name}</h4>
                        <span>{CurrencyFormat(item.price)}</span>
                     </td>
                     <td>
                        <div>
                           <button type='button' onClick={() => snackCartDecrement(item)}>
                              <MinusIcon />
                           </button>
                           <span>{`${item.quantity}`.padStart(2, "0")}</span>
                           <button type='button' onClick={() => snackCartIncrement(item)}>
                              <PlusIcon />
                           </button>
                        </div>
                     </td>

                     <td>
                        <h5>{CurrencyFormat(item.subtotal)}</h5>
                     </td>
                     <td>
                        <button type='button' onClick={() => removeSnackFromCart(item)}>
                           <FaTrashAlt />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <ConfirmOrder />
      </Container>
   );
}
