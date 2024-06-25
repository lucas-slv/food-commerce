import { CurrencyFormat } from "../../helpers/currencyFormat";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import PlusIcon from "../../assets/circle-plus.svg?react";
import MinusIcon from "../../assets/circle-minus.svg?react";
import { FaTrashAlt } from "react-icons/fa";
import { ConfirmOrder } from "../OrderCloseAction/ConfirmOrder/confirm_order";
export function TableMobile() {
   const { cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart();
   return (
      <Container>
         {cart.map((item) => (
            <div className='orderItem' key={`${item.snack}-${item.id}`}>
               <div>
                  <img src={item.image} alt={item.name} />
               </div>

               <div>
                  <h4>{item.name}</h4>
                  <span>{CurrencyFormat(item.price)}</span>
                  <div>
                     <div>
                        <button type='button' onClick={() => snackCartDecrement(item)}>
                           <MinusIcon />
                        </button>
                        <span>{`${item.quantity}`.padStart(2, "0")}</span>
                        <button type='button' onClick={() => snackCartIncrement(item)}>
                           <PlusIcon />
                        </button>
                     </div>
                     <button type='button' onClick={() => removeSnackFromCart(item)}>
                        <FaTrashAlt />
                     </button>
                  </div>
                  <h5>
                     <span>Subtotal</span> {CurrencyFormat(item.subtotal)}
                  </h5>
               </div>
            </div>
         ))}

         <ConfirmOrder />
      </Container>
   );
}
