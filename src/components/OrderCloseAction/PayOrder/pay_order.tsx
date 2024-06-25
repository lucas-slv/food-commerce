import { CurrencyFormat } from "../../../helpers/currencyFormat";
import { useCart } from "../../../hooks/useCart";
import { Container } from "../styles";

export function PayOrder() {
   const { cart } = useCart();

   const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

   return (
      <Container>
         <button type='submit'>Confirmar pagamento</button>
         <span>
            total : <strong>{CurrencyFormat(totalAmount)}</strong>
         </span>
      </Container>
   );
}
