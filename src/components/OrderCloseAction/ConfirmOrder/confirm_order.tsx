import { CurrencyFormat } from "../../../helpers/currencyFormat";
import { useCart } from "../../../hooks/useCart";
import { Container } from "../styles";

export function ConfirmOrder() {
   const { cart, confirmOrder } = useCart();

   const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

   return (
      <Container>
         <button type='button' onClick={confirmOrder}>
            Finalizar pedido
         </button>
         <span>
            total : <strong>{CurrencyFormat(totalAmount)}</strong>
         </span>
      </Container>
   );
}
